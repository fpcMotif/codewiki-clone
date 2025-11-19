import { useEffect } from "react";

/**
 * Custom hook to bootstrap client-side DOM behaviors.
 * Initializes i18n, theme switching, observers, and animations.
 * Runs only once when the component mounts.
 */
export function useClientBootstrap(): void {
  useEffect(() => {
    // Track if the component is still mounted to avoid state updates after unmount
    let isMounted = true;

    // Async wrapper to handle dynamic import with proper error handling
    const initBootstrap = async (): Promise<void> => {
      if (!isMounted) {
        return;
      }

      try {
        // Dynamically import and execute the bootstrap function
        const { bootstrap } = await import("@/client/bootstrap");

        if (isMounted) {
          bootstrap();
        }
      } catch (error: unknown) {
        const errorMessage =
          error instanceof Error ? error.message : String(error);
        console.error(
          "Failed to bootstrap client-side behaviors:",
          errorMessage
        );
      }
    };

    // Execute bootstrap initialization
    initBootstrap();

    // Cleanup function: mark component as unmounted
    return () => {
      isMounted = false;
    };
  }, []);
}
