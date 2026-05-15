import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type QuoteBody = {
  product: string;
  options: Record<string, string>;
  customer: {
    name: string;
    phone: string;
    email: string;
    address: string;
    notes?: string;
  };
};

function formatBody(body: QuoteBody): string {
  const optsLines = Object.entries(body.options)
    .map(([k, v]) => `  ${k}: ${v}`)
    .join("\n");
  return [
    `New quote request via dzignawindows.co.uk`,
    ``,
    `Product: ${body.product}`,
    `Options:`,
    optsLines || "  (none)",
    ``,
    `Customer:`,
    `  Name:    ${body.customer.name}`,
    `  Phone:   ${body.customer.phone}`,
    `  Email:   ${body.customer.email}`,
    `  Address: ${body.customer.address}`,
    `  Notes:   ${body.customer.notes ?? "—"}`,
  ].join("\n");
}

export async function POST(request: Request) {
  let body: QuoteBody;
  try {
    body = (await request.json()) as QuoteBody;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  if (!body?.customer?.name || !body?.customer?.phone || !body?.customer?.email || !body?.customer?.address) {
    return NextResponse.json({ ok: false, error: "Missing required customer details." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const inbox = process.env.QUOTE_INBOX ?? "dzignawindows@gmail.com";
  const payload = formatBody(body);

  if (!apiKey) {
    console.warn("[quote] RESEND_API_KEY not set — logging payload only");
    console.log(payload);
    return NextResponse.json({
      ok: true,
      delivered: false,
      note: "Quote captured. Email delivery pending API key configuration.",
    });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Dzigna Windows <onboarding@resend.dev>",
      to: [inbox],
      replyTo: body.customer.email,
      subject: `New quote — ${body.product} — ${body.customer.name}`,
      text: payload,
    });

    if (error) {
      console.error("[quote] Resend send error:", error);
      return NextResponse.json({ ok: false, error: "Email delivery failed." }, { status: 502 });
    }
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[quote] Unexpected error:", err);
    return NextResponse.json({ ok: false, error: "Unexpected server error." }, { status: 500 });
  }
}
