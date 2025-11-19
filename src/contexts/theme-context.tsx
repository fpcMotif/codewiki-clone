import { type ParentComponent, createContext, createEffect, createSignal, useContext } from "solid-js";

type Theme = "light" | "dark";

interface ThemeContextType {
    theme: () => Theme;
    setTheme: (theme: Theme) => void;
    isDark: () => boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>();

export const ThemeProvider: ParentComponent = (props) => {
    const [theme, setTheme] = createSignal<Theme>(() => {
        // Check initial state from DOM synchronously
        if (typeof document !== "undefined") {
            return document.body.classList.contains("dark-theme") ? "dark" : "light";
        }
        return "light";
    });

    createEffect(() => {
        // Sync theme state with DOM class
        document.body.classList.toggle("dark-theme", theme() === "dark");
    });

    const isDark = () => theme() === "dark";

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme, isDark, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
