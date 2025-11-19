import {
    createContext,
    useContext,
    createSignal,
    createEffect,
    onMount,
    type ParentComponent,
} from "solid-js";
import { isServer } from "solid-js/web";

type Theme = "light" | "dark";

type ThemeContextValue = {
    theme: () => Theme;
    isDark: () => boolean;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue>();

export const ThemeProvider: ParentComponent = (props) => {
    const [theme, setTheme] = createSignal<Theme>("light");

    onMount(() => {
        if (!isServer) {
            const isDark = document.body.classList.contains("dark-theme");
            setTheme(isDark ? "dark" : "light");
        }
    });

    createEffect(() => {
        if (!isServer) {
            document.body.classList.toggle("dark-theme", theme() === "dark");
        }
    });

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeContext.Provider
            value={{ theme, isDark: () => theme() === "dark", toggleTheme }}
        >
            {props.children}
        </ThemeContext.Provider>
    );
};

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
