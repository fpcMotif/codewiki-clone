import "react";

declare module "react" {
  // biome-ignore lint/style/noNamespace: Required for extending React JSX
  namespace JSX {
    type IntrinsicElements = {
      "sdlc-agents-root": React.HTMLAttributes<HTMLElement>;
      "landing-page": React.HTMLAttributes<HTMLElement>;
      "app-home": React.HTMLAttributes<HTMLElement>;
      "app-bar": React.HTMLAttributes<HTMLElement>;
      "app-split-section": React.HTMLAttributes<HTMLElement>;
      "app-footer": React.HTMLAttributes<HTMLElement>;
      "language-switcher": React.HTMLAttributes<HTMLElement>;
      "theme-switcher": React.HTMLAttributes<HTMLElement>;
    };
  }
}
