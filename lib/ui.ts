/**
 * Sets up the theme switcher functionality.
 */
export function initThemeSwitcher(): void {
  const themeButton = document.querySelector('[data-test-id="theme-button"]');
  if (!themeButton) {
    return;
  }

  const themeIcon = themeButton.querySelector(".google-symbols");
  const body = document.body;
  const allThemeImages =
    document.querySelectorAll<HTMLImageElement>("[data-theme-img]");

  const updateThemeAssets = () => {
    const isDark = body.classList.contains("dark-theme");
    if (themeIcon) {
      themeIcon.textContent = isDark ? "light_mode" : "dark_mode";
    }

    for (const img of allThemeImages) {
      const imgTheme = img.dataset.themeImg;
      img.style.display =
        imgTheme === (isDark ? "dark" : "light") ? "" : "none";
    }
  };

  themeButton.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    updateThemeAssets();
  });

  updateThemeAssets(); // Set initial state
}
