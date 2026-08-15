#!/usr/bin/env node
/**
 * @prihisol cover renderer — v1
 *
 * Reads 2026-08-15_instagram_posts_v1.csv, opens the cover template in
 * headless Chromium, and screenshots a 1080×1350 PNG per post into renders/.
 *
 * Usage:
 *   node 2026-08-15_instagram_render_v1.mjs            # render rows with a title and render_status=pending
 *   node 2026-08-15_instagram_render_v1.mjs --post 001 # render one post regardless of status
 *   node 2026-08-15_instagram_render_v1.mjs --all      # render every row that has a title
 *
 * Requires: npm i playwright && npx playwright install chromium
 * This script does not modify the CSV — digital-ops flips render_status
 * to "done" after checking the PNG.
 */

import { chromium } from "playwright";
import { readFileSync, mkdirSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";

const HERE = dirname(fileURLToPath(import.meta.url));
const CSV_PATH = join(HERE, "2026-08-15_instagram_posts_v1.csv");
const TEMPLATE_PATH = join(HERE, "2026-08-15_instagram_cover-template_v1.html");
const OUT_DIR = join(HERE, "renders");

// --- minimal CSV parser (handles quoted fields with commas and "" escapes) ---
function parseCsv(text) {
  const rows = [];
  let row = [], field = "", inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') inQuotes = false;
      else field += c;
    } else if (c === '"') inQuotes = true;
    else if (c === ",") { row.push(field); field = ""; }
    else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(field); field = "";
      if (row.some(f => f !== "")) rows.push(row);
      row = [];
    } else field += c;
  }
  row.push(field);
  if (row.some(f => f !== "")) rows.push(row);
  const [header, ...body] = rows;
  return body.map(r => Object.fromEntries(header.map((h, i) => [h, r[i] ?? ""])));
}

function slug(s) {
  return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 40);
}

// --- select rows ---
const args = process.argv.slice(2);
const onlyPost = args.includes("--post") ? args[args.indexOf("--post") + 1] : null;
const all = args.includes("--all");

const posts = parseCsv(readFileSync(CSV_PATH, "utf8")).filter(p => {
  if (!p.title) return false;
  if (onlyPost) return p.post_id === onlyPost;
  if (all) return true;
  return p.render_status === "pending";
});

if (posts.length === 0) {
  console.log("Nothing to render. (No pending rows with a title — try --all or --post <id>.)");
  process.exit(0);
}

mkdirSync(OUT_DIR, { recursive: true });

// CHROMIUM_PATH lets you point at an existing Chromium instead of the
// Playwright-managed download (useful in sandboxes/CI).
const browser = await chromium.launch(
  process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}
);
const page = await browser.newPage({ viewport: { width: 1080, height: 1350 } });

for (const p of posts) {
  const params = new URLSearchParams();
  if (p.kicker) params.set("kicker", p.kicker);
  params.set("title", p.title);
  if (p.img) params.set("img", p.img); // path relative to this folder, e.g. photos/berlin-talk.jpg

  const url = pathToFileURL(TEMPLATE_PATH).href + "?" + params.toString();
  await page.goto(url, { waitUntil: "networkidle" });

  const out = join(OUT_DIR, `${p.post_id}_${slug(p.title)}.png`);
  await page.screenshot({ path: out });
  console.log(`rendered ${p.post_id} -> ${out}`);
}

await browser.close();
console.log(`done: ${posts.length} cover(s). Flip render_status to "done" in the CSV after review.`);
