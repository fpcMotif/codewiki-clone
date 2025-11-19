import { SearchIcon } from "../icons/search-icon";
import { ThemeSwitcher } from "../theme-switcher";

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
          <language-switcher>
            <div className="language-switcher">
              <select
                aria-label="Language"
                className="language-select"
                data-i18n="languageSwitcher.label"
                onChange={(e) => {
                  const fn = (
                    window as { changeLanguage?: (lng: string) => void }
                  ).changeLanguage;
                  fn?.(e.target.value);
                }}
              >
                <option value="en">English</option>
                <option value="zh-CN">简体中文</option>
                <option value="zh-TW">繁體中文</option>
                <option value="ja">日本語</option>
                <option value="de">Deutsch</option>
                <option value="fr">Français</option>
                <option value="ko">한국어</option>
                <option value="ar">العربية</option>
              </select>
            </div>
          </language-switcher>
          <ThemeSwitcher />
        </div>
      </header>
    </app-bar>
  );
}
