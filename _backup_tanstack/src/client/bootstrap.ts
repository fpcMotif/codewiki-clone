import i18next from "@/i18n.ts";
import {
  initHeaderObserver,
  initStickyScrollAnimation,
} from "../../lib/observers.ts";

/**
 * Main application class to organize and initialize all UI components and behaviors.
 */
class CodeWikiApp {
  constructor() {
    this.init();
  }

  /**
   * Initializes all application components.
   */
  private async init() {
    // Initialize i18n first
    await this.initI18n();
    this.initComponents();
    this.initObserversAndAnimations();
  }

  /**
   * Initializes i18n and sets up DOM translation.
   */
  private async initI18n() {
    // Wait for i18n to be ready
    await new Promise<void>((resolve) => {
      if (i18next.isInitialized) {
        resolve();
      } else {
        i18next.on("loaded", resolve);
      }
    });

    // Initial translation of the page
    this.translatePage();

    // Update translations when language changes
    i18next.on("languageChanged", () => {
      this.translatePage();
    });

    // Make changeLanguage function globally available
    (window as { changeLanguage?: (lng: string) => void }).changeLanguage = (
      lng: string
    ) => {
      i18next.changeLanguage(lng);
    };
  }

  /**
   * Translates all elements with data-i18n attributes.
   */
  private translatePage() {
    if (typeof document === "undefined") {
      return;
    }
    const elements = document.querySelectorAll("[data-i18n]");
    // Use for...of loop to reduce cognitive complexity
    for (const element of elements) {
      this.processElement(element);
    }

    // Update language switcher select to show current language
    const languageSelect = document.querySelector(
      ".language-select"
    ) as HTMLSelectElement;
    if (languageSelect) {
      languageSelect.value = i18next.language;
    }
  }

  private processElement(element: Element) {
    const key = element.getAttribute("data-i18n");
    if (key) {
      this.translateElement(element, key);
    }
  }

  /**
   * Translates a single element based on its tag and attributes.
   */
  private translateElement(element: Element, key: string) {
    const translation = i18next.t(key);

    if (this.isInputElementWithPlaceholder(element)) {
      (element as HTMLInputElement).placeholder = translation;
      return;
    }

    if (element.tagName === "OPTION") {
      (element as HTMLOptionElement).text = translation;
      return;
    }

    if (element.tagName === "TITLE") {
      element.textContent = translation;
      document.title = translation;
      return;
    }

    if (this.isMetaDescription(element)) {
      element.setAttribute("content", translation);
      return;
    }

    element.textContent = translation;
  }

  private isInputElementWithPlaceholder(element: Element): boolean {
    return element.tagName === "INPUT" && element.hasAttribute("placeholder");
  }

  private isMetaDescription(element: Element): boolean {
    return (
      element.tagName === "META" &&
      element.getAttribute("name") === "description"
    );
  }

  /**
   * Initializes core UI components.
   * Theme switcher is now handled by React ThemeProvider.
   */
  private initComponents() {
    // No longer needed - theme switching is handled by React context
  }

  /**
   * Initializes Intersection Observers and scroll-based animations.
   */
  private initObserversAndAnimations() {
    initHeaderObserver();
    initStickyScrollAnimation();
  }
}

/**
 * Exported bootstrap function to be called from the client after React mounts.
 */
export function bootstrap() {
  // Guard against SSR
  if (typeof window !== "undefined") {
    new CodeWikiApp();
  }
}
