import i18next from "@/i18n";
import { createSignal, onCleanup, onMount } from "solid-js";

export function useTranslation() {
    const [trigger, setTrigger] = createSignal(0);
    const [isReady, setIsReady] = createSignal(false);

    onMount(() => {
        // Check if i18next is already initialized
        if (i18next.isInitialized) {
            setIsReady(true);
        }
    });

    const handleLanguageChanged = () => {
        setTrigger((prev) => prev + 1);
    };

    const handleInitialized = () => {
        setIsReady(true);
        setTrigger((prev) => prev + 1);
    };

    i18next.on("languageChanged", handleLanguageChanged);
    i18next.on("loaded", handleLanguageChanged);
    i18next.on("initialized", handleInitialized);

    onCleanup(() => {
        i18next.off("languageChanged", handleLanguageChanged);
        i18next.off("loaded", handleLanguageChanged);
        i18next.off("initialized", handleInitialized);
    });

    const t = (key: string, options?: any): string => {
        trigger(); // Track dependency
        
        // Return the key if not ready, i18next will handle this
        if (!isReady() && !i18next.isInitialized) {
            return key;
        }
        
        return i18next.t(key, options) as string;
    };

    return { t, isReady };
}
