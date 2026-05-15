"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  CONFIGURATOR_PRODUCTS,
  getConfigProduct,
  type ProductConfig,
} from "./options";

type Step = 1 | 2 | 3 | 4;

type Customer = {
  name: string;
  phone: string;
  email: string;
  address: string;
  notes: string;
  consent: boolean;
};

const STEP_LABELS: Record<Step, string> = {
  1: "Product",
  2: "Customise",
  3: "Your details",
  4: "Summary",
};

export default function ConfiguratorClient() {
  const [step, setStep] = useState<Step>(1);
  const [productSlug, setProductSlug] = useState<string>("");
  const [options, setOptions] = useState<Record<string, string>>({});
  const [customer, setCustomer] = useState<Customer>({
    name: "",
    phone: "",
    email: "",
    address: "",
    notes: "",
    consent: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const product: ProductConfig | undefined = useMemo(
    () => getConfigProduct(productSlug),
    [productSlug],
  );

  function next() {
    setError("");
    if (step === 1) {
      if (!productSlug) {
        setError("Pick a product to continue.");
        return;
      }
      // reset options on product change
      const fresh: Record<string, string> = {};
      product?.groups.forEach((g) => (fresh[g.label] = ""));
      setOptions(fresh);
      setStep(2);
      return;
    }
    if (step === 2) {
      const missing = product?.groups.find((g) => !options[g.label]);
      if (missing) {
        setError(`Pick a ${missing.label.toLowerCase()} to continue.`);
        return;
      }
      setStep(3);
      return;
    }
    if (step === 3) {
      const c = customer;
      if (!c.name.trim() || !c.phone.trim() || !c.email.trim() || !c.address.trim()) {
        setError("Please fill in your name, phone, email and address.");
        return;
      }
      if (!c.consent) {
        setError("Please agree to the privacy policy to continue.");
        return;
      }
      setStep(4);
      return;
    }
  }

  function back() {
    setError("");
    if (step > 1) setStep((step - 1) as Step);
  }

  async function submit() {
    if (!product) return;
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product: product.name,
          options,
          customer: {
            name: customer.name.trim(),
            phone: customer.phone.trim(),
            email: customer.email.trim(),
            address: customer.address.trim(),
            notes: customer.notes.trim(),
          },
        }),
      });
      const json = await res.json();
      if (!json.ok) {
        setError(json.error ?? "Submission failed. Please try again.");
        setSubmitting(false);
        return;
      }
      setSubmitted(true);
    } catch {
      setError("Network error — please try again or call 07970 722720.");
    } finally {
      setSubmitting(false);
    }
  }

  // ---------- Confirmation ----------
  if (submitted) {
    return (
      <div style={containerSt}>
        <div style={cardSt}>
          <p style={kickerSt}>Step 4 of 4 — Done</p>
          <h2 style={titleSt}>Thank you! We&rsquo;ll be in touch within 24 hours.</h2>
          <p style={bodySt}>
            Your enquiry for <strong>{product?.name}</strong> has been received. Our team
            will call you on <strong>{customer.phone}</strong> with a tailored quote.
          </p>
          <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap", marginTop: "1.75rem" }}>
            <Link href="/" style={btnPrimary}>
              Back to homepage
            </Link>
            <a href="tel:07970722720" style={btnGhost}>
              Call 07970 722720
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={containerSt}>
      <ProgressBar step={step} />

      <div style={cardSt}>
        {step === 1 && (
          <Step1
            value={productSlug}
            onChange={setProductSlug}
          />
        )}

        {step === 2 && product && (
          <Step2
            product={product}
            options={options}
            onChange={(label, choice) =>
              setOptions((prev) => ({ ...prev, [label]: choice }))
            }
          />
        )}

        {step === 3 && (
          <Step3 customer={customer} onChange={setCustomer} />
        )}

        {step === 4 && product && (
          <Step4 product={product} options={options} customer={customer} />
        )}

        {error && (
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "0.85rem",
              color: "#b3261e",
              marginTop: "1.25rem",
            }}
          >
            {error}
          </p>
        )}

        <div style={navRow}>
          {step > 1 ? (
            <button onClick={back} style={btnGhost} type="button">
              ← Back
            </button>
          ) : (
            <span />
          )}
          {step < 4 ? (
            <button onClick={next} style={btnPrimary} type="button">
              Next →
            </button>
          ) : (
            <button
              onClick={submit}
              disabled={submitting}
              style={{ ...btnPrimary, opacity: submitting ? 0.5 : 1 }}
              type="button"
            >
              {submitting ? "Sending…" : "Request My Free Quote"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================ Steps ============================

function Step1({
  value,
  onChange,
}: {
  value: string;
  onChange: (slug: string) => void;
}) {
  return (
    <>
      <p style={kickerSt}>Step 1 of 4</p>
      <h2 style={titleSt}>What would you like to design?</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1rem",
          marginTop: "2rem",
        }}
      >
        {CONFIGURATOR_PRODUCTS.map((p) => {
          const selected = value === p.slug;
          return (
            <button
              key={p.slug}
              onClick={() => onChange(p.slug)}
              type="button"
              style={{
                textAlign: "left",
                padding: "1.5rem 1.4rem",
                background: selected ? "rgba(28,58,94,0.05)" : "var(--bg)",
                border: `2px solid ${selected ? "var(--navy)" : "var(--border)"}`,
                cursor: "pointer",
                fontFamily: "var(--font-dm-sans), sans-serif",
                transition: "border-color 0.15s, background 0.15s",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-dm-serif), serif",
                  fontSize: "1.4rem",
                  color: "var(--ink)",
                  lineHeight: 1.1,
                  marginBottom: "0.6rem",
                  letterSpacing: "-0.005em",
                }}
              >
                {p.name}
              </p>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--muted)",
                  lineHeight: 1.55,
                  fontWeight: 300,
                }}
              >
                {p.blurb}
              </p>
            </button>
          );
        })}
      </div>
    </>
  );
}

function Step2({
  product,
  options,
  onChange,
}: {
  product: ProductConfig;
  options: Record<string, string>;
  onChange: (label: string, choice: string) => void;
}) {
  return (
    <>
      <p style={kickerSt}>Step 2 of 4 — Customise</p>
      <h2 style={titleSt}>Customise your {product.name.toLowerCase()}.</h2>
      <div style={{ display: "grid", gap: "2rem", marginTop: "2rem" }}>
        {product.groups.map((g) => (
          <div key={g.label}>
            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--navy)",
                marginBottom: "0.85rem",
              }}
            >
              {g.label}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
              {g.choices.map((c) => {
                const selected = options[g.label] === c;
                return (
                  <button
                    key={c}
                    onClick={() => onChange(g.label, c)}
                    type="button"
                    style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      padding: "0.7rem 1.1rem",
                      background: selected ? "var(--navy)" : "var(--bg)",
                      color: selected ? "#fff" : "var(--ink)",
                      border: `1.5px solid ${selected ? "var(--navy)" : "var(--border)"}`,
                      cursor: "pointer",
                      transition: "all 0.15s",
                    }}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function Step3({
  customer,
  onChange,
}: {
  customer: Customer;
  onChange: (c: Customer) => void;
}) {
  const fieldsSt: React.CSSProperties = {
    fontFamily: "var(--font-dm-sans), sans-serif",
    fontSize: "0.95rem",
    padding: "0.85rem 1rem",
    background: "var(--bg)",
    border: "1.5px solid var(--border)",
    color: "var(--ink)",
    width: "100%",
    outline: "none",
  };
  const labelSt: React.CSSProperties = {
    fontFamily: "var(--font-dm-sans), sans-serif",
    fontSize: "0.72rem",
    fontWeight: 600,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "var(--navy)",
    marginBottom: "0.45rem",
    display: "block",
  };

  return (
    <>
      <p style={kickerSt}>Step 3 of 4 — Your details</p>
      <h2 style={titleSt}>How can we reach you?</h2>
      <div style={{ display: "grid", gap: "1.25rem", marginTop: "2rem" }}>
        <div>
          <label style={labelSt}>
            Name <span style={{ color: "#b3261e" }}>*</span>
          </label>
          <input
            type="text"
            value={customer.name}
            onChange={(e) => onChange({ ...customer, name: e.target.value })}
            style={fieldsSt}
            placeholder="Full name"
          />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }} className="form-row">
          <div>
            <label style={labelSt}>
              Phone <span style={{ color: "#b3261e" }}>*</span>
            </label>
            <input
              type="tel"
              value={customer.phone}
              onChange={(e) => onChange({ ...customer, phone: e.target.value })}
              style={fieldsSt}
              placeholder="07xxx xxxxxx"
            />
          </div>
          <div>
            <label style={labelSt}>
              Email <span style={{ color: "#b3261e" }}>*</span>
            </label>
            <input
              type="email"
              value={customer.email}
              onChange={(e) => onChange({ ...customer, email: e.target.value })}
              style={fieldsSt}
              placeholder="email@example.com"
            />
          </div>
        </div>
        <div>
          <label style={labelSt}>
            Address / Postcode <span style={{ color: "#b3261e" }}>*</span>
          </label>
          <input
            type="text"
            value={customer.address}
            onChange={(e) => onChange({ ...customer, address: e.target.value })}
            style={fieldsSt}
            placeholder="House number, street, postcode"
          />
        </div>
        <div>
          <label style={labelSt}>Additional notes</label>
          <textarea
            value={customer.notes}
            onChange={(e) => onChange({ ...customer, notes: e.target.value })}
            style={{ ...fieldsSt, minHeight: "110px", resize: "vertical" }}
            placeholder="Anything else we should know?"
          />
        </div>
        <label
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "0.7rem",
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "0.85rem",
            color: "var(--ink)",
            cursor: "pointer",
            lineHeight: 1.5,
          }}
        >
          <input
            type="checkbox"
            checked={customer.consent}
            onChange={(e) => onChange({ ...customer, consent: e.target.checked })}
            style={{ marginTop: "0.2rem" }}
          />
          <span>
            I agree to the{" "}
            <Link
              href="/privacy-policy"
              style={{ color: "var(--navy)", textDecoration: "underline" }}
            >
              privacy policy
            </Link>
            .
          </span>
        </label>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

function Step4({
  product,
  options,
  customer,
}: {
  product: ProductConfig;
  options: Record<string, string>;
  customer: Customer;
}) {
  return (
    <>
      <p style={kickerSt}>Step 4 of 4 — Review &amp; send</p>
      <h2 style={titleSt}>Your design summary.</h2>
      <div style={{ marginTop: "2rem", display: "grid", gap: "2rem" }}>
        <div>
          <p style={summaryLabel}>Product</p>
          <p style={summaryValue}>{product.name}</p>
        </div>
        {product.groups.map((g) => (
          <div key={g.label}>
            <p style={summaryLabel}>{g.label}</p>
            <p style={summaryValue}>{options[g.label] || "—"}</p>
          </div>
        ))}
        <div style={{ height: "1px", background: "var(--border)" }} />
        <div>
          <p style={summaryLabel}>Name</p>
          <p style={summaryValue}>{customer.name}</p>
        </div>
        <div>
          <p style={summaryLabel}>Phone</p>
          <p style={summaryValue}>{customer.phone}</p>
        </div>
        <div>
          <p style={summaryLabel}>Email</p>
          <p style={summaryValue}>{customer.email}</p>
        </div>
        <div>
          <p style={summaryLabel}>Address</p>
          <p style={summaryValue}>{customer.address}</p>
        </div>
        {customer.notes && (
          <div>
            <p style={summaryLabel}>Notes</p>
            <p style={summaryValue}>{customer.notes}</p>
          </div>
        )}
      </div>
    </>
  );
}

function ProgressBar({ step }: { step: Step }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "0.5rem",
        marginBottom: "2rem",
      }}
    >
      {([1, 2, 3, 4] as Step[]).map((n) => {
        const active = n <= step;
        return (
          <div key={n}>
            <div
              style={{
                height: "3px",
                background: active ? "var(--navy)" : "var(--border)",
                transition: "background 0.2s",
              }}
            />
            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "0.7rem",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: active ? "var(--navy)" : "var(--muted)",
                marginTop: "0.6rem",
              }}
            >
              {STEP_LABELS[n]}
            </p>
          </div>
        );
      })}
    </div>
  );
}

// ============================ Styles ============================

const containerSt: React.CSSProperties = {
  maxWidth: "880px",
  margin: "0 auto",
  padding: "5rem 5% 5rem",
};

const cardSt: React.CSSProperties = {
  background: "#fff",
  border: "1px solid var(--border)",
  padding: "clamp(1.5rem, 4vw, 2.75rem)",
};

const kickerSt: React.CSSProperties = {
  fontFamily: "var(--font-dm-sans), sans-serif",
  fontSize: "0.7rem",
  fontWeight: 600,
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  color: "var(--navy)",
  marginBottom: "1rem",
};

const titleSt: React.CSSProperties = {
  fontFamily: "var(--font-dm-serif), serif",
  fontSize: "clamp(1.8rem, 3.6vw, 2.6rem)",
  fontWeight: 400,
  color: "var(--ink)",
  lineHeight: 1.1,
  letterSpacing: "-0.01em",
};

const bodySt: React.CSSProperties = {
  fontFamily: "var(--font-dm-sans), sans-serif",
  fontSize: "1.05rem",
  fontWeight: 300,
  lineHeight: 1.7,
  color: "var(--ink)",
  marginTop: "1.25rem",
};

const summaryLabel: React.CSSProperties = {
  fontFamily: "var(--font-dm-sans), sans-serif",
  fontSize: "0.7rem",
  fontWeight: 600,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "var(--muted)",
  marginBottom: "0.35rem",
};

const summaryValue: React.CSSProperties = {
  fontFamily: "var(--font-dm-serif), serif",
  fontSize: "1.3rem",
  color: "var(--ink)",
  letterSpacing: "-0.005em",
};

const navRow: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "1rem",
  marginTop: "2.5rem",
  paddingTop: "1.75rem",
  borderTop: "1px solid var(--border)",
};

const btnPrimary: React.CSSProperties = {
  fontFamily: "var(--font-dm-sans), sans-serif",
  fontSize: "0.85rem",
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  background: "var(--navy)",
  color: "#fff",
  padding: "0.95rem 1.7rem",
  border: "none",
  cursor: "pointer",
  textDecoration: "none",
};

const btnGhost: React.CSSProperties = {
  fontFamily: "var(--font-dm-sans), sans-serif",
  fontSize: "0.85rem",
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  background: "transparent",
  color: "var(--navy)",
  border: "1.5px solid var(--navy)",
  padding: "0.85rem 1.5rem",
  cursor: "pointer",
  textDecoration: "none",
};
