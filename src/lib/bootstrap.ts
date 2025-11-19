import { initHeaderObserver, initStickyScrollAnimation } from "./observers";

/**
 * Exported bootstrap function to be called from the client after Svelte mounts.
 */
export function bootstrap() {
    // Guard against SSR
    if (typeof window !== "undefined") {
        initHeaderObserver();
        initStickyScrollAnimation();
    }
}
