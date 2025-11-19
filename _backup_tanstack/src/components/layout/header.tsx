import { SearchIcon } from "@/components/icons/search-icon";
import { ThemeSwitcher } from "@/components/theme-switcher";

export function Header() {
  return (
    <app-bar>
      <header className="header-content small-width">
        <a
          aria-label="Home"
          className="app-title"
          href="https://codewiki.google/"
        >
          <img
            alt="Code Wiki logo"
            className="logo"
            data-test-id="product-logo"
            height="24"
            src="/JA1YkbZh5pk.svg"
            width="24"
          />
        </a>
        <div className="header-search shine">
          <input
            autoComplete="off"
            className="header-search-input"
            data-i18n="header.searchPlaceholder"
            placeholder="Find open source repositories"
            tabIndex={-1}
            type="text"
          />
          <button
            className="header-search-button"
            disabled
            tabIndex={-1}
            type="button"
          >
            <SearchIcon />
          </button>
        </div>
        <div className="actions">
          <ThemeSwitcher />
        </div>
      </header>
    </app-bar>
  );
}

