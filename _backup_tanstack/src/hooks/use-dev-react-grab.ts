import { useEffect } from "react";

/**
 * Custom hook to load react-grab in development mode.
 * This tool is useful for debugging React components and their behavior.
 * Runs only once when the component mounts.
 */
export function useDevReactGrab(): void {
  useEffect(() => {
    // Only load in development environment
    if (!import.meta.env.DEV) {
      return;
    }

    // Dynamically import react-grab for debugging
    import("react-grab").catch((error: unknown) => {
      // Log error but don't throw - react-grab is optional for development
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      // Only log during development to avoid noise in production
      if (import.meta.env.DEV) {
        console.warn(
          "Failed to load react-grab development tool:",
          errorMessage
        );
      }
    });
  }, []);
}
