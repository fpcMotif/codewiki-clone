import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Theme = 'light' | 'dark';

interface ThemeStore {
    current: Theme;
    isDark: boolean;
    toggle: () => void;
    set: (theme: Theme) => void;
}

function createThemeStore() {
    // Initialize from DOM or default to light
    const initialTheme: Theme = browser && document.body.classList.contains('dark-theme')
        ? 'dark'
        : 'light';

    const { subscribe, set, update } = writable<Theme>(initialTheme);

    return {
        subscribe,
        toggle: () => {
            update(current => {
                const newTheme = current === 'dark' ? 'light' : 'dark';
                if (browser) {
                    document.body.classList.toggle('dark-theme', newTheme === 'dark');
                }
                return newTheme;
            });
        },
        set: (theme: Theme) => {
            set(theme);
            if (browser) {
                document.body.classList.toggle('dark-theme', theme === 'dark');
            }
        }
    };
}

export function themeStore(): ThemeStore {
    const store = createThemeStore();
    let current = $state<Theme>('light');

    store.subscribe(value => {
        current = value;
    });

    return {
        get current() { return current; },
        get isDark() { return current === 'dark'; },
        toggle: store.toggle,
        set: store.set
    };
}
