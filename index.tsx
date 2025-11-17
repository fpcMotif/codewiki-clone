import { ThreeCube } from './components/ThreeCube.js';
import { initThemeSwitcher } from './lib/ui.js';
import { initHeaderObserver, initStickyScrollAnimation } from './lib/observers.js';

/**
 * Main application class to organize and initialize all UI components and behaviors.
 */
class CodeWikiApp {
  
  constructor() {
    // Wait for the DOM to be fully loaded before initializing
    document.addEventListener('DOMContentLoaded', () => this.init());
  }

  /**
   * Initializes all application components.
   */
  private init() {
    this.initComponents();
    this.initObserversAndAnimations();
    this.initThreeAnimations();
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
        if ((window as any).THREE) {
          callback();
        } else {
          requestAnimationFrame(checkThree);
        }
      };
      checkThree();
    };

    waitForThree(() => {
      new ThreeCube('.sticky-hero-cube-section');
      new ThreeCube('.sticky-visual .cube');
      new ThreeCube('.browser-section .cube');
    });
  }
}

// Instantiate the app to start it
new CodeWikiApp();