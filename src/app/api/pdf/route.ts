import { NextRequest, NextResponse } from "next/server";
import { chromium } from "playwright";

export async function GET(req: NextRequest) {
  let browser;

  try {
    const { searchParams } = new URL(req.url);

    const role = searchParams.get("role") || "candidate";
    const mode = searchParams.get("mode") || "single";
    const phase = searchParams.get("phase") || "control";

    const baseUrl =
      process.env.BASE_URL ||
      "http://localhost:3000";

    const printUrl =
      `${baseUrl}/resources/alignment-test/${role}/report/print` +
      `?mode=${mode}&phase=${phase}`;

    console.log("Opening:", printUrl);

    browser = await chromium.launch({
      headless: true,
    });

    const context = await browser.newContext();

    // Forward authenticated session cookie
    const sessionCookie = req.cookies.get("session");

    if (sessionCookie?.value) {
      const hostname = new URL(baseUrl).hostname;

      await context.addCookies([
        {
          name: "session",
          value: sessionCookie.value,
          domain: hostname,
          path: "/",
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
        },
      ]);
    }

    const page = await context.newPage();

    page.on("console", (msg) => {
      console.log("BROWSER:", msg.text());
    });

    page.on("pageerror", (err) => {
      console.error("PAGE ERROR:", err);
    });

    await page.goto(printUrl, {
      waitUntil: "networkidle",
      timeout: 120000,
    });

    console.log("Loaded:", page.url());

    const body = await page.locator("body").textContent();

    console.log(
      "BODY PREVIEW:",
      body?.slice(0, 500)
    );

    // Wait for actual report
    await page.waitForSelector("#print-root", {
      state: "visible",
      timeout: 120000,
    });

    await page.emulateMedia({
      media: "print",
    });

   const pdf = await page.pdf({
  format: "A4",
  printBackground: true,
});

    await page.close();
    await context.close();

  

return new NextResponse(new Uint8Array(pdf), {
  headers: {
    "Content-Type": "application/pdf",
    "Content-Disposition": `attachment; filename="${role}.pdf"`,
  },
});

  } catch (error: any) {
    console.error("PDF ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: error?.message || "PDF generation failed",
      },
      {
        status: 500,
      }
    );
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}