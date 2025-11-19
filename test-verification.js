// Simple verification script - run this in browser console
console.log("=== Code Wiki Verification ===");

// Check if Three.js is loaded
if (typeof window.THREE !== "undefined") {
  console.log("✅ Three.js loaded");
} else {
  console.log("❌ Three.js NOT loaded");
}

// Check if Tailwind CSS is processing
const bodyStyles = getComputedStyle(document.body);
const surfaceColor = bodyStyles.getPropertyValue("--color-surface");
if (surfaceColor) {
  console.log("✅ Tailwind @theme variables applied:", surfaceColor.trim());
} else {
  console.log("❌ Tailwind @theme variables NOT applied");
}

// Check if main elements exist
const elements = {
  "header-search": ".header-search",
  "hero-section": ".hero-section",
  "browser-section": ".browser-section",
  "theme-button": ".theme-button",
  "cube-elements": ".cube",
};

for (const [name, selector] of Object.entries(elements)) {
  const element = document.querySelector(selector);
  if (element) {
    console.log(`✅ ${name} element found`);
  } else {
    console.log(`❌ ${name} element NOT found`);
  }
}

// Check if JavaScript modules loaded
if (typeof window.CodeWikiApp !== "undefined") {
  console.log("✅ CodeWikiApp loaded");
} else {
  console.log("❌ CodeWikiApp NOT loaded");
}

console.log("=== Verification Complete ===");
