import { ThreeCube } from "./components/three-cube.ts";
import {
  initHeaderObserver,
  initStickyScrollAnimation,
} from "./lib/observers.ts";
import { initThemeSwitcher } from "./lib/ui.ts";
import i18next, { supportedLanguages } from "./src/i18n.ts";

/**
 * Main application class to organize and initialize all UI components and behaviors.
 */
class CodeWikiApp {
  constructor() {
    // Wait for the DOM to be fully loaded before initializing
    document.addEventListener("DOMContentLoaded", () => this.init());
  }

  /**
   * Initializes all application components.
   */
  private async init() {
    // Initialize i18n first
    await this.initI18n();
    this.initComponents();
    this.initObserversAndAnimations();
    this.initThreeAnimations();
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
        i18next.on('loaded', resolve);
      }
    });

    // Initial translation of the page
    this.translatePage();

    // Update translations when language changes
    i18next.on('languageChanged', () => {
      this.translatePage();
    });

    // Make changeLanguage function globally available
    (window as { changeLanguage?: (lng: string) => void }).changeLanguage = (lng: string) => {
      i18next.changeLanguage(lng);
    };
  }

  /**
   * Translates all elements with data-i18n attributes.
   */
  private translatePage() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach((element) => {
      const key = element.getAttribute('data-i18n');
      if (key) {
        const translation = i18next.t(key);
        if (element.tagName === 'INPUT' && element.getAttribute('placeholder')) {
          (element as HTMLInputElement).placeholder = translation;
        } else if (element.tagName === 'OPTION') {
          (element as HTMLOptionElement).text = translation;
        } else if (element.tagName === 'TITLE') {
          element.textContent = translation;
          document.title = translation;
        } else if (element.tagName === 'META' && element.getAttribute('name') === 'description') {
          element.setAttribute('content', translation);
        } else {
          element.textContent = translation;
        }
      }
    });

    // Update language switcher select to show current language
    const languageSelect = document.querySelector('.language-select') as HTMLSelectElement;
    if (languageSelect) {
      languageSelect.value = i18next.language;
    }
  }

  /**
   * Initializes core UI components like the theme switcher.
   */
  private initComponents() {
    initThemeSwitcher();
  }

  /**
   * Initializes Intersection Observers and scroll-based animations.
   */
  private initObserversAndAnimations() {
    initHeaderObserver();
    initStickyScrollAnimation();
  }

  /**
   * Initializes all Three.js cube animations.
   * Waits for the THREE library to be loaded from the CDN before proceeding.
   */
  private initThreeAnimations() {
    const waitForThree = (callback: () => void) => {
      const checkThree = () => {
        if ((window as { THREE?: unknown }).THREE) {
          callback();
        } else {
          requestAnimationFrame(checkThree);
        }
      };
      checkThree();
    };

    waitForThree(() => {
      new ThreeCube(".sticky-hero-cube-section");
      new ThreeCube(".sticky-visual .cube");
      new ThreeCube(".browser-section .cube");
    });
  }
}

// Instantiate the app to start it
new CodeWikiApp();
