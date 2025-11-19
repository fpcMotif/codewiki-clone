import i18next from '../i18n';
import { browser } from '$app/environment';

function createI18n() {
    let currentLang = $state('en');
    let isInitialized = $state(false);
    // We use a version counter to trigger reactivity when translations change/load
    let version = $state(0);

    if (browser) {
        i18next.on('languageChanged', (lng) => {
            currentLang = lng;
            version += 1;
        });

        i18next.on('loaded', () => {
            version += 1;
        });

        i18next.on('initialized', () => {
            isInitialized = true;
            version += 1;
        });

        if (i18next.isInitialized) {
            isInitialized = true;
            currentLang = i18next.language;
        }
    }

    return {
        get language() {
            return currentLang;
        },
        get isInitialized() {
            return isInitialized;
        },
        t: (key: string, options?: any): string => {
            // Read version to subscribe to changes
            const _ = version;
            if (!browser || !isInitialized) return key;
            return i18next.t(key, options) as string;
        },
        changeLanguage: (lng: string) => {
            if (browser) {
                i18next.changeLanguage(lng);
            }
        }
    };
}

export const i18n = createI18n();
