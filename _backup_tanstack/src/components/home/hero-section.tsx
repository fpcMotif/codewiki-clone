import { SearchIcon } from "@/components/icons/search-icon";

export function HeroSection() {
  return (
    <section className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-(--hero-gap) pt-(--hero-padding-top) pb-0 text-center">
      <h1 className="hero-title text-center text-on-surface">Code Wiki</h1>
      <p
        className="hero-subtitle-gradient mb-[30px] max-w-[600px] text-(--hero-subtitle-size) leading-[1.4] tracking-[-0.01em]"
        data-i18n="hero.subtitle"
        style={{ textWrap: "balance" }}
      >
        A new perspective on development for the intelligent agent era.
        Gemini-generated documentation, always up to date.
      </p>
      <div className="search-border-gradient search-glow shine relative flex w-full max-w-[700px] overflow-hidden rounded-[99px] p-px transition-[background-color] duration-200 focus-within:bg-accent">
        <input
          autoComplete="off"
          className="glassmorphism-search z-2 flex-1 rounded-[99px] border-0 px-[50px] py-[32px] pr-[82px] text-[21px] text-on-surface tracking-[-0.02em] transition-[background-color] duration-200 placeholder:text-neutral"
          data-i18n="hero.searchPlaceholder"
          placeholder="Find open source repositories"
          style={{ fontFamily: "var(--font-text)" }}
          tabIndex={-1}
          type="text"
        />
        <button
          className="absolute top-0 right-[38px] bottom-0 z-2 my-auto flex h-fit cursor-pointer items-center justify-center border-0 bg-transparent p-[12px] text-on-surface transition-colors duration-200 disabled:pointer-events-none"
          disabled
          tabIndex={-1}
          type="button"
        >
          <SearchIcon />
        </button>
      </div>
    </section>
  );
}
