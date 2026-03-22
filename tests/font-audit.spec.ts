import { test, expect } from "@playwright/test";

const BASE = "https://manaiakalani.github.io";

test.describe("Font Audit", () => {
  test("check document fonts loaded", async ({ page }) => {
    await page.goto(BASE, { waitUntil: "networkidle" });
    await page.waitForTimeout(2000);

    const fontData = await page.evaluate(async () => {
      await document.fonts.ready;

      const loaded: {
        family: string;
        style: string;
        weight: string;
        status: string;
      }[] = [];
      document.fonts.forEach((f) => {
        loaded.push({
          family: f.family,
          style: f.style,
          weight: f.weight,
          status: f.status,
        });
      });

      const computedFonts: Record<string, string> = {};
      const selectors: Record<string, string> = {
        body: "body",
        h1: "h1",
        nav_link: "nav a",
        paragraph: "p",
        button: "button",
      };

      for (const [name, sel] of Object.entries(selectors)) {
        const el = document.querySelector(sel);
        if (el) {
          computedFonts[name] = getComputedStyle(el).fontFamily;
        }
      }

      const root = document.documentElement;
      const fontSansVar = getComputedStyle(root)
        .getPropertyValue("--font-sans")
        .trim();

      // Detect if Inter is actually rendering vs fallback
      const testEl = document.createElement("span");
      testEl.textContent = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      testEl.style.fontSize = "72px";
      testEl.style.position = "absolute";
      testEl.style.visibility = "hidden";
      document.body.appendChild(testEl);

      testEl.style.fontFamily = '"Inter", monospace';
      const interWidth = testEl.getBoundingClientRect().width;
      testEl.style.fontFamily = "monospace";
      const monoWidth = testEl.getBoundingClientRect().width;
      testEl.style.fontFamily = "system-ui";
      const systemWidth = testEl.getBoundingClientRect().width;

      document.body.removeChild(testEl);

      return {
        loaded,
        computedFonts,
        fontSansVar,
        interVsMono: interWidth !== monoWidth,
        interVsSystem: interWidth !== systemWidth,
        fontsReady: document.fonts.status,
        htmlClasses: root.className,
      };
    });

    console.log("\n=== FONT AUDIT RESULTS ===\n");
    console.log("Document fonts status:", fontData.fontsReady);
    console.log("HTML classes:", fontData.htmlClasses);
    console.log("Inter differs from monospace:", fontData.interVsMono);
    console.log("Inter differs from system-ui:", fontData.interVsSystem);
    console.log("\n--- Loaded Font Faces ---");
    if (fontData.loaded.length === 0) {
      console.log("  ⚠️  No font faces loaded!");
    }
    for (const f of fontData.loaded) {
      console.log(
        `  ${f.family} (weight: ${f.weight}, style: ${f.style}) → ${f.status}`
      );
    }
    console.log("\n--- --font-sans CSS var ---");
    console.log(`  "${fontData.fontSansVar || "(empty)"}"`);
    console.log("\n--- Computed font-family ---");
    for (const [name, value] of Object.entries(fontData.computedFonts)) {
      console.log(`  ${name}: ${value}`);
    }

    expect(fontData.fontsReady).toBe("loaded");
  });

  test("check font network requests", async ({ page }) => {
    const fontRequests: {
      url: string;
      status: number | null;
      type: string;
    }[] = [];
    const cssRequests: { url: string; status: number | null }[] = [];

    page.on("response", (resp) => {
      const url = resp.url();
      if (
        url.includes("font") ||
        url.endsWith(".woff2") ||
        url.endsWith(".woff") ||
        url.endsWith(".ttf") ||
        url.endsWith(".otf")
      ) {
        fontRequests.push({
          url,
          status: resp.status(),
          type: resp.headers()["content-type"] || "unknown",
        });
      }
      if (url.endsWith(".css") || url.includes("css")) {
        cssRequests.push({ url, status: resp.status() });
      }
    });

    await page.goto(BASE, { waitUntil: "networkidle" });
    await page.waitForTimeout(3000);

    console.log("\n=== FONT NETWORK REQUESTS ===\n");
    if (fontRequests.length === 0) {
      console.log("  ⚠️  No font files were loaded!");
    }
    for (const req of fontRequests) {
      const status = req.status === 200 ? "✓" : `✗ ${req.status}`;
      console.log(`  ${status} ${req.url}`);
    }
    console.log("\n--- CSS Requests ---");
    for (const req of cssRequests) {
      console.log(`  ${req.status} ${req.url}`);
    }
  });

  test("screenshot pages", async ({ page }) => {
    for (const [name, path] of [
      ["home", "/"],
      ["projects", "/projects/"],
      ["about", "/about/"],
    ]) {
      await page.goto(`${BASE}${path}`, { waitUntil: "networkidle" });
      await page.waitForTimeout(2000);
      await page.screenshot({
        path: `screenshots/${name}.png`,
        fullPage: false,
      });
      console.log(`  ✓ screenshots/${name}.png`);
    }
  });
});
