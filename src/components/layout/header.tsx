import { SearchIcon } from "@/components/icons/search-icon";
import { ThemeSwitcher } from "@/components/theme-switcher";

export function Header() {
    return (
        <app-bar>
            <header class="header-content small-width">
                <a
                    aria-label="Home"
                    class="app-title"
                    href="https://codewiki.google/"
                >
                    <img
                        alt="Code Wiki logo"
                        class="logo"
                        data-test-id="product-logo"
                        height="24"
                        src="/JA1YkbZh5pk.svg"
                        width="24"
                    />
                </a>
                <div class="header-search shine">
                    <input
                        autocomplete="off"
                        class="header-search-input"
                        data-i18n="header.searchPlaceholder"
                        placeholder="Find open source repositories"
                        tabIndex={-1}
                        type="text"
                    />
                    <button
                        class="header-search-button"
                        disabled
                        tabIndex={-1}
                        type="button"
                    >
                        <SearchIcon />
                    </button>
                </div>
                <div class="actions">
                    <ThemeSwitcher />
                </div>
            </header>
        </app-bar>
    );
}
