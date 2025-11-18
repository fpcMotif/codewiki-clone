/// <reference types="react" />

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'sdlc-agents-root': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'landing-page': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'app-bar': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'app-home': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'app-split-section': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'app-footer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'language-switcher': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'theme-switcher': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }

    interface CSSProperties extends React.CSSProperties {
        [key: `--${string}`]: string | number;
    }
}

export { };
