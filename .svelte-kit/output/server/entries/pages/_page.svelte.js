import "clsx";
import { w as attributes, x as stringify, y as attr, z as ensure_array_like, F as clsx } from "../../chunks/index2.js";
import { t as themeStore } from "../../chunks/theme.svelte.js";
import "i18next";
import "i18next-browser-languagedetector";
import "i18next-http-backend";
import { m as escape_html } from "../../chunks/context.js";
function SearchIcon($$renderer, $$props) {
  let { class: className = "", $$slots, $$events, ...rest } = $$props;
  $$renderer.push(`<svg${attributes(
    {
      "aria-hidden": "true",
      class: `h-6 w-6 ${stringify(className ?? "")}`,
      ...rest,
      fill: "currentColor",
      viewBox: "0 0 24 24"
    },
    void 0,
    void 0,
    void 0,
    3
  )}><title>Search</title><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>`);
}
function createI18n() {
  let currentLang = "en";
  let isInitialized = false;
  return {
    get language() {
      return currentLang;
    },
    get isInitialized() {
      return isInitialized;
    },
    t: (key, options) => {
      return key;
    },
    changeLanguage: (lng) => {
    }
  };
}
const i18n = createI18n();
function ThemeSwitcher($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const theme = themeStore();
    $$renderer2.push(`<div class="theme-switcher"><button${attr("aria-label", i18n.t("header.themeToggleLabel"))}${attr("title", i18n.t("header.themeToggleLabel"))} class="theme-button" tabindex="-1" type="button">`);
    if (theme.isDark) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<svg aria-hidden="true" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z"></path></svg>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<svg aria-hidden="true" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path></svg>`);
    }
    $$renderer2.push(`<!--]--></button></div>`);
  });
}
function Header($$renderer) {
  $$renderer.push(`<app-bar><header class="header-content small-width"><a aria-label="Home" class="app-title" href="https://codewiki.google/"><img alt="Code Wiki logo" class="logo" data-test-id="product-logo" height="24" src="/JA1YkbZh5pk.svg" width="24"/></a> <div class="header-search shine"><input autocomplete="off" class="header-search-input" data-i18n="header.searchPlaceholder" placeholder="Find open source repositories" tabindex="-1" type="text"/> <button class="header-search-button" disabled tabindex="-1" type="button">`);
  SearchIcon($$renderer, {});
  $$renderer.push(`<!----></button></div> <div class="actions">`);
  ThemeSwitcher($$renderer);
  $$renderer.push(`<!----></div></header></app-bar>`);
}
function GoogleForDevelopersLogo($$renderer, $$props) {
  let { class: className = "", $$slots, $$events, ...rest } = $$props;
  $$renderer.push(`<svg${attributes(
    {
      "aria-hidden": "true",
      class: `h-6 w-6 ${stringify(className ?? "")}`,
      ...rest,
      viewBox: "0 0 123 18",
      width: "123",
      xmlns: "http://www.w3.org/2000/svg"
    },
    void 0,
    void 0,
    void 0,
    3
  )}><title>for Developers</title><path d="M119.244 14.0502C118.24 14.0502 117.388 13.8008 116.689 13.302C115.99 12.8032 115.501 12.1859 115.221 11.4502L116.651 10.8329C116.905 11.419 117.261 11.8679 117.719 12.1797C118.189 12.4914 118.698 12.6473 119.244 12.6473C119.854 12.6473 120.356 12.5164 120.75 12.2545C121.157 11.9926 121.36 11.6746 121.36 11.3005C121.36 10.9389 121.208 10.6396 120.903 10.4027C120.611 10.1657 120.102 9.95997 119.378 9.78539L118.081 9.4674C117.369 9.30529 116.759 9.01224 116.251 8.58826C115.755 8.16427 115.507 7.60312 115.507 6.90479C115.507 6.33116 115.672 5.83859 116.003 5.42708C116.346 5.01556 116.797 4.70381 117.357 4.49182C117.916 4.27982 118.526 4.17383 119.187 4.17383C120 4.17383 120.738 4.36088 121.399 4.73498C122.072 5.09662 122.549 5.61413 122.829 6.28752L121.399 6.88608C121.195 6.43716 120.884 6.1067 120.464 5.89471C120.058 5.68272 119.6 5.57672 119.092 5.57672C118.596 5.57672 118.145 5.69519 117.738 5.93212C117.344 6.16905 117.147 6.47457 117.147 6.84867C117.147 7.1729 117.274 7.42854 117.528 7.61559C117.795 7.80264 118.215 7.97099 118.787 8.12063L120.197 8.45732C121.138 8.69425 121.837 9.04965 122.295 9.52352C122.765 9.98491 123 10.5398 123 11.1883C123 11.7245 122.841 12.2108 122.524 12.6473C122.206 13.0837 121.761 13.4267 121.189 13.6761C120.617 13.9255 119.969 14.0502 119.244 14.0502Z" fill="currentColor"></path><path d="M109.297 4.47296H110.842V5.98808H110.918C111.096 5.47681 111.458 5.05282 112.005 4.71613C112.564 4.36696 113.117 4.19238 113.664 4.19238C114.058 4.19238 114.426 4.2485 114.769 4.36073V6.08161C114.426 5.89456 113.981 5.80103 113.435 5.80103C112.99 5.80103 112.57 5.93197 112.176 6.19384C111.795 6.44324 111.49 6.77994 111.261 7.20392C111.032 7.62791 110.918 8.0893 110.918 8.58811V13.7507H109.297V4.47296Z" fill="currentColor"></path><path d="M103.029 14.0502C102.114 14.0502 101.294 13.8382 100.569 13.4142C99.8574 12.9902 99.2981 12.4041 98.8914 11.6559C98.4846 10.9077 98.2812 10.0597 98.2812 9.112C98.2812 8.21415 98.4719 7.39112 98.8532 6.64292C99.2346 5.88224 99.7748 5.28367 100.474 4.84722C101.186 4.39829 101.999 4.17383 102.914 4.17383C103.829 4.17383 104.63 4.37959 105.317 4.7911C106.016 5.19015 106.55 5.75754 106.918 6.49327C107.287 7.22901 107.471 8.07698 107.471 9.03718C107.471 9.21177 107.458 9.33647 107.433 9.41129H99.9209C99.9464 10.1096 100.118 10.7019 100.436 11.1883C100.753 11.6621 101.148 12.0175 101.618 12.2545C102.101 12.4914 102.597 12.6099 103.105 12.6099C104.3 12.6099 105.221 12.0363 105.87 10.889L107.3 11.5624C106.893 12.3106 106.327 12.9154 105.603 13.3768C104.891 13.8257 104.033 14.0502 103.029 14.0502ZM105.755 8.08322C105.73 7.70911 105.622 7.33501 105.431 6.96091C105.24 6.5868 104.929 6.26881 104.497 6.00694C104.077 5.74507 103.537 5.61413 102.876 5.61413C102.164 5.61413 101.548 5.83859 101.027 6.28752C100.506 6.73644 100.175 7.33501 100.035 8.08322H105.755Z" fill="currentColor"></path><path d="M87.5669 4.47311H89.1113V5.83859H89.1875C89.4926 5.36473 89.9311 4.97192 90.5031 4.66016C91.0751 4.33594 91.736 4.17383 92.486 4.17383C93.2995 4.17383 94.0494 4.39206 94.7358 4.82851C95.4222 5.2525 95.9687 5.83859 96.3755 6.5868C96.7822 7.33501 96.9856 8.17674 96.9856 9.112C96.9856 10.0473 96.7822 10.889 96.3755 11.6372C95.9687 12.3854 95.4222 12.9777 94.7358 13.4142C94.0494 13.8382 93.2995 14.0502 92.486 14.0502C91.736 14.0502 91.0687 13.8943 90.484 13.5826C89.912 13.2583 89.4799 12.853 89.1875 12.3667H89.1113L89.1875 13.6574V17.7912H87.5669V4.47311ZM92.2381 12.6099C92.7974 12.6099 93.3122 12.4665 93.7825 12.1797C94.2655 11.8928 94.6468 11.4876 94.9264 10.9638C95.2188 10.4276 95.365 9.81033 95.365 9.112C95.365 8.41368 95.2188 7.80264 94.9264 7.27889C94.6468 6.74268 94.2655 6.33116 93.7825 6.04435C93.3122 5.75754 92.7974 5.61413 92.2381 5.61413C91.6788 5.61413 91.1577 5.75754 90.6747 6.04435C90.2044 6.31869 89.8231 6.72397 89.5307 7.26019C89.2511 7.78394 89.1113 8.40121 89.1113 9.112C89.1113 9.81033 89.2511 10.4276 89.5307 10.9638C89.8231 11.5 90.2044 11.9116 90.6747 12.1984C91.1577 12.4727 91.6788 12.6099 92.2381 12.6099Z" fill="currentColor"></path><path d="M81.0415 14.0502C80.1136 14.0502 79.2811 13.8382 78.5439 13.4142C77.8066 12.9777 77.2283 12.3854 76.8088 11.6372C76.4021 10.8765 76.1987 10.0348 76.1987 9.112C76.1987 8.18921 76.4021 7.35371 76.8088 6.60551C77.2283 5.84483 77.8066 5.2525 78.5439 4.82851C79.2811 4.39206 80.1136 4.17383 81.0415 4.17383C81.9694 4.17383 82.802 4.39206 83.5392 4.82851C84.2891 5.2525 84.8675 5.84483 85.2742 6.60551C85.6937 7.35371 85.9034 8.18921 85.9034 9.112C85.9034 10.0348 85.6937 10.8765 85.2742 11.6372C84.8675 12.3854 84.2891 12.9777 83.5392 13.4142C82.802 13.8382 81.9694 14.0502 81.0415 14.0502ZM81.0415 12.6099C81.6135 12.6099 82.1474 12.4665 82.6431 12.1797C83.1388 11.8928 83.5328 11.4876 83.8252 10.9638C84.1303 10.4276 84.2828 9.81033 84.2828 9.112C84.2828 8.41368 84.1303 7.80264 83.8252 7.27889C83.5328 6.74268 83.1388 6.33116 82.6431 6.04435C82.1474 5.75754 81.6135 5.61413 81.0415 5.61413C80.4823 5.61413 79.9548 5.75754 79.459 6.04435C78.9633 6.33116 78.5629 6.74268 78.2579 7.27889C77.9655 7.80264 77.8194 8.41368 77.8194 9.112C77.8194 9.81033 77.9655 10.4276 78.2579 10.9638C78.5629 11.4876 78.9633 11.8928 79.459 12.1797C79.9548 12.4665 80.4823 12.6099 81.0415 12.6099Z" fill="currentColor"></path><path d="M72.8408 0.357422H74.4614V13.7504H72.8408V0.357422Z" fill="currentColor"></path><path d="M66.5717 14.0502C65.6565 14.0502 64.8367 13.8382 64.1122 13.4142C63.4004 12.9902 62.8411 12.4041 62.4343 11.6559C62.0276 10.9077 61.8242 10.0597 61.8242 9.112C61.8242 8.21415 62.0149 7.39112 62.3962 6.64292C62.7775 5.88224 63.3177 5.28367 64.0168 4.84722C64.7286 4.39829 65.5421 4.17383 66.4573 4.17383C67.3725 4.17383 68.1732 4.37959 68.8596 4.7911C69.5587 5.19015 70.0926 5.75754 70.4612 6.49327C70.8298 7.22901 71.0141 8.07698 71.0141 9.03718C71.0141 9.21177 71.0014 9.33647 70.976 9.41129H63.4639C63.4893 10.1096 63.6609 10.7019 63.9787 11.1883C64.2965 11.6621 64.6905 12.0175 65.1608 12.2545C65.6438 12.4914 66.1395 12.6099 66.648 12.6099C67.8428 12.6099 68.7643 12.0363 69.4125 10.889L70.8425 11.5624C70.4358 12.3106 69.8701 12.9154 69.1456 13.3768C68.4338 13.8257 67.5758 14.0502 66.5717 14.0502ZM69.2981 8.08322C69.2727 7.70911 69.1647 7.33501 68.974 6.96091C68.7834 6.5868 68.4719 6.26881 68.0398 6.00694C67.6203 5.74507 67.0801 5.61413 66.4192 5.61413C65.7074 5.61413 65.0909 5.83859 64.5697 6.28752C64.0486 6.73644 63.7181 7.33501 63.5783 8.08322H69.2981Z" fill="currentColor"></path><path d="M51.9995 4.47266H53.7536L56.6517 11.8799H56.6898L59.626 4.47266H61.3419L57.4715 13.7504H55.8318L51.9995 4.47266Z" fill="currentColor"></path><path d="M45.5275 13.7504H43.9069V0.357422H45.5275V13.7504Z" fill="currentColor"></path><path d="M38.9328 14.0502C38.0176 14.0502 37.1978 13.8382 36.4733 13.4142C35.7615 12.9902 35.2022 12.4041 34.7954 11.6559C34.3887 10.9077 34.1853 10.0597 34.1853 9.112C34.1853 8.21415 34.376 7.39112 34.7573 6.64292C35.1386 5.88224 35.6788 5.28367 36.3779 4.84722C37.0897 4.39829 37.9032 4.17383 38.8184 4.17383C39.7336 4.17383 40.5343 4.37959 41.2207 4.7911C41.9198 5.19015 42.4537 5.75754 42.8223 6.49327C43.1909 7.22901 43.3752 8.07698 43.3752 9.03718C43.3752 9.21177 43.3625 9.33647 43.3371 9.41129H35.825C35.8504 10.1096 36.022 10.7019 36.3398 11.1883C36.6576 11.6621 37.0516 12.0175 37.5219 12.2545C38.0049 12.4914 38.5006 12.6099 39.0091 12.6099C40.2039 12.6099 41.1254 12.0363 41.7736 10.889L43.2036 11.5624C42.7969 12.3106 42.2312 12.9154 41.5067 13.3768C40.7949 13.8257 39.9369 14.0502 38.9328 14.0502ZM41.6592 8.08322C41.6338 7.70911 41.5258 7.33501 41.3351 6.96091C41.1445 6.5868 40.833 6.26881 40.4009 6.00694C39.9814 5.74507 39.4412 5.61413 38.7803 5.61413C38.0685 5.61413 37.452 5.83859 36.9308 6.28752C36.4097 6.73644 36.0792 7.33501 35.9394 8.08322H41.6592Z" fill="currentColor"></path><path d="M28.9185 4.47311H30.4629V5.83859H30.5391C30.8442 5.36473 31.2827 4.97192 31.8547 4.66016C32.4267 4.33594 33.0876 4.17383 33.8376 4.17383C34.6511 4.17383 35.401 4.39206 36.0874 4.82851C36.7738 5.2525 37.3203 5.83859 37.7271 6.5868C38.1338 7.33501 38.3372 8.17674 38.3372 9.112C38.3372 10.0473 38.1338 10.889 37.7271 11.6372C37.3203 12.3854 36.7738 12.9777 36.0874 13.4142C35.401 13.8382 34.6511 14.0502 33.8376 14.0502C33.0876 14.0502 32.4203 13.8943 31.8356 13.5826C31.2636 13.2583 30.8315 12.853 30.5391 12.3667H30.4629L30.5391 13.6574V17.7912H28.9185V4.47311ZM33.5897 12.6099C34.149 12.6099 34.6638 12.4665 35.1341 12.1797C35.6171 11.8928 35.9984 11.4876 36.278 10.9638C36.5704 10.4276 36.7166 9.81033 36.7166 9.112C36.7166 8.41368 36.5704 7.80264 36.278 7.27889C35.9984 6.74268 35.6171 6.33116 35.1341 6.04435C34.6638 5.75754 34.149 5.61413 33.5897 5.61413C33.0304 5.61413 32.5093 5.75754 32.0263 6.04435C31.556 6.31869 31.1747 6.72397 30.8823 7.26019C30.6027 7.78394 30.4629 8.40121 30.4629 9.112C30.4629 9.81033 30.6027 10.4276 30.8823 10.9638C31.1747 11.5 31.556 11.9116 32.0263 12.1984C32.5093 12.4727 33.0304 12.6099 33.5897 12.6099Z" fill="currentColor"></path><path d="M22.3931 14.0502C21.4652 14.0502 20.6327 13.8382 19.8955 13.4142C19.1582 12.9777 18.5799 12.3854 18.1604 11.6372C17.7537 10.8765 17.5503 10.0348 17.5503 9.112C17.5503 8.18921 17.7537 7.35371 18.1604 6.60551C18.5799 5.84483 19.1582 5.2525 19.8955 4.82851C20.6327 4.39206 21.4652 4.17383 22.3931 4.17383C23.321 4.17383 24.1536 4.39206 24.8908 4.82851C25.6407 5.2525 26.2191 5.84483 26.6258 6.60551C27.0453 7.35371 27.255 8.18921 27.255 9.112C27.255 10.0348 27.0453 10.8765 26.6258 11.6372C26.2191 12.3854 25.6407 12.9777 24.8908 13.4142C24.1536 13.8382 23.321 14.0502 22.3931 14.0502ZM22.3931 12.6099C22.9651 12.6099 23.499 12.4665 23.9947 12.1797C24.4904 11.8928 24.8844 11.4876 25.1768 10.9638C25.4819 10.4276 25.6344 9.81033 25.6344 9.112C25.6344 8.41368 25.4819 7.80264 25.1768 7.27889C24.8844 6.74268 24.4904 6.33116 23.9947 6.04435C23.499 5.75754 22.9651 5.61413 22.3931 5.61413C21.8339 5.61413 21.3064 5.75754 20.8106 6.04435C20.3149 6.33116 19.9145 6.74268 19.6095 7.27889C19.3171 7.80264 19.171 8.41368 19.171 9.112C19.171 9.81033 19.3171 10.4276 19.6095 10.9638C19.9145 11.4876 20.3149 11.8928 20.8106 12.1797C21.3064 12.4665 21.8339 12.6099 22.3931 12.6099Z" fill="currentColor"></path><path d="M14.1924 0.357422H15.813V13.7504H14.1924V0.357422Z" fill="currentColor"></path></svg>`);
}
function GoogleLogo($$renderer, $$props) {
  let { class: className = "", $$slots, $$events, ...rest } = $$props;
  $$renderer.push(`<svg${attributes(
    {
      "aria-hidden": "true",
      class: `h-6 w-6 ${stringify(className ?? "")}`,
      ...rest,
      viewBox: "0 0 65 22",
      width: "65",
      xmlns: "http://www.w3.org/2000/svg"
    },
    void 0,
    void 0,
    void 0,
    3
  )}><title>Google</title><path d="M27.3262 10.9769C27.3262 13.9481 24.9677 16.1374 22.0732 16.1374C19.1788 16.1374 16.8203 13.9481 16.8203 10.9769C16.8203 7.98485 19.1788 5.81641 22.0732 5.81641C24.9677 5.81641 27.3262 7.98485 27.3262 10.9769ZM25.0267 10.9769C25.0267 9.12026 23.6598 7.8499 22.0732 7.8499C20.4867 7.8499 19.1198 9.12026 19.1198 10.9769C19.1198 12.815 20.4867 14.1039 22.0732 14.1039C23.6598 14.1039 25.0267 12.8127 25.0267 10.9769Z" fill="currentColor"></path><path d="M38.6621 10.9769C38.6621 13.9481 36.3036 16.1374 33.4092 16.1374C30.5148 16.1374 28.1562 13.9481 28.1562 10.9769C28.1562 7.98717 30.5148 5.81641 33.4092 5.81641C36.3036 5.81641 38.6621 7.98485 38.6621 10.9769ZM36.3626 10.9769C36.3626 9.12026 34.9957 7.8499 33.4092 7.8499C31.8227 7.8499 30.4557 9.12026 30.4557 10.9769C30.4557 12.815 31.8227 14.1039 33.4092 14.1039C34.9957 14.1039 36.3626 12.8127 36.3626 10.9769Z" fill="currentColor"></path><path d="M49.5228 6.12818V15.3929C49.5228 19.204 47.2422 20.7605 44.5461 20.7605C42.0081 20.7605 40.4807 19.0876 39.9046 17.7196L41.9066 16.8983C42.2631 17.7382 43.1366 18.7293 44.5437 18.7293C46.2695 18.7293 47.339 17.68 47.339 15.7047V14.9625H47.2587C46.7441 15.5884 45.7525 16.1351 44.5012 16.1351C41.883 16.1351 39.4844 13.8876 39.4844 10.9955C39.4844 8.08257 41.883 5.8164 44.5012 5.8164C45.7501 5.8164 46.7417 6.36317 47.2587 6.97043H47.339V6.1305H49.5228V6.12818ZM47.5019 10.9955C47.5019 9.17842 46.2719 7.8499 44.7066 7.8499C43.1201 7.8499 41.7909 9.17842 41.7909 10.9955C41.7909 12.794 43.1201 14.104 44.7066 14.104C46.2719 14.104 47.5019 12.794 47.5019 10.9955Z" fill="currentColor"></path><path d="M53.1178 0.697266V15.8205H50.875V0.697266H53.1178Z" fill="currentColor"></path><path d="M61.8603 12.6758L63.6451 13.8484C63.069 14.6883 61.6809 16.1355 59.2822 16.1355C56.3075 16.1355 54.0859 13.8693 54.0859 10.975C54.0859 7.90612 56.3264 5.8144 59.0249 5.8144C61.7422 5.8144 63.0714 7.94567 63.5058 9.09736L63.7443 9.68368L56.7443 12.5408C57.2802 13.5762 58.1136 14.1043 59.2822 14.1043C60.4532 14.1043 61.2653 13.5366 61.8603 12.6758ZM56.3665 10.8191L61.0458 8.90425C60.7885 8.25977 60.0141 7.81072 59.1028 7.81072C57.9342 7.81072 56.3075 8.82747 56.3665 10.8191Z" fill="currentColor"></path><path d="M8.33246 9.63275V7.44337H15.8188C15.892 7.82494 15.9297 8.27631 15.9297 8.7649C15.9297 10.4075 15.4741 12.4387 14.0056 13.8859C12.5773 15.3517 10.7523 16.1334 8.33482 16.1334C3.85389 16.1334 0.0859375 12.5364 0.0859375 8.12042C0.0859375 3.70443 3.85389 0.10742 8.33482 0.10742C10.8137 0.10742 12.5797 1.066 13.9065 2.31542L12.3389 3.86032C11.3874 2.98084 10.0984 2.2968 8.33246 2.2968C5.06029 2.2968 2.50111 4.89568 2.50111 8.12042C2.50111 11.3452 5.06029 13.944 8.33246 13.944C10.4549 13.944 11.6636 13.1041 12.438 12.341C13.066 11.7221 13.4792 10.838 13.6421 9.63042L8.33246 9.63275Z" fill="currentColor"></path></svg>`);
}
function Footer($$renderer) {
  $$renderer.push(`<app-footer><footer class="footer-content centered"><div aria-label="Google for developers logo" class="google-for-dev" role="img">`);
  GoogleLogo($$renderer, {});
  $$renderer.push(`<!----> `);
  GoogleForDevelopersLogo($$renderer, {});
  $$renderer.push(`<!----></div> <div class="footer-links"><a data-i18n="footer.privacy" href="https://policies.google.com/privacy" rel="noopener noreferrer" target="_blank">Privacy Policy</a> <a data-i18n="footer.terms" href="https://policies.google.com/terms" rel="noopener noreferrer" target="_blank">Terms</a> <a data-i18n="footer.developers" href="https://developers.google.com/site-terms" rel="noopener noreferrer" target="_blank">Developers</a> <a data-i18n="footer.support" href="https://support.google.com" rel="noopener noreferrer" target="_blank">Support</a> <a data-i18n="footer.developerSite" href="https://developers.google.com/" rel="noopener noreferrer" target="_blank">Developer Site</a> <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank">Google</a></div> <div class="footer-locale"></div></footer></app-footer>`);
}
function HeroSection($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<section class="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-(--hero-gap) pt-(--hero-padding-top) pb-0 text-center"><h1 class="hero-title text-center text-on-surface">Code Wiki</h1> <p class="hero-subtitle-gradient mb-[30px] max-w-[600px] text-(--hero-subtitle-size) leading-[1.4] tracking-[-0.01em]" style="text-wrap: balance">${escape_html(i18n.t("hero.subtitle") || "A new perspective on development for the intelligent agent era. Gemini-generated documentation, always up to date.")}</p> <div class="search-border-gradient search-glow shine relative flex w-full max-w-[700px] overflow-hidden rounded-[99px] p-px transition-[background-color] duration-200 focus-within:bg-accent"><input autocomplete="off" class="glassmorphism-search z-2 flex-1 rounded-[99px] border-0 px-[50px] py-[32px] pr-[82px] text-[21px] text-on-surface tracking-[-0.02em] transition-[background-color] duration-200 placeholder:text-neutral"${attr("placeholder", i18n.t("hero.searchPlaceholder") || "Find open source repositories")} style="font-family: var(--font-text)" tabindex="-1" type="text"/> <button class="absolute top-0 right-[38px] bottom-0 z-2 my-auto flex h-fit cursor-pointer items-center justify-center border-0 bg-transparent p-[12px] text-on-surface transition-colors duration-200 disabled:pointer-events-none" disabled tabindex="-1" type="button">`);
    SearchIcon($$renderer2, {});
    $$renderer2.push(`<!----></button></div></section>`);
  });
}
function StarIcon($$renderer, $$props) {
  let { class: className = "", $$slots, $$events, ...rest } = $$props;
  $$renderer.push(`<svg${attributes(
    {
      "aria-hidden": "true",
      class: `h-6 w-6 ${stringify(className ?? "")}`,
      ...rest,
      fill: "currentColor",
      viewBox: "0 0 24 24"
    },
    void 0,
    void 0,
    void 0,
    3
  )}><title>Star</title><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>`);
}
function FeaturedRepos($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const REPOSITORIES = [
      {
        name: "gemini-cli",
        url: "https://codewiki.google/github.com/google-gemini/gemini-cli",
        description: "An open-source AI agent that brings Gemini's powerful capabilities directly to your terminal.",
        descriptionKey: "featured.geminiCli.description",
        stars: "81.5k"
      },
      {
        name: "go",
        url: "https://codewiki.google/github.com/golang/go",
        description: "Go programming language",
        descriptionKey: "featured.go.description",
        stars: "130.7k"
      },
      {
        name: "flutter",
        url: "https://codewiki.google/github.com/flutter/flutter",
        description: "Flutter makes it simple to build beautiful, fast mobile and cross-platform apps",
        descriptionKey: "featured.flutter.description",
        stars: "173.7k"
      },
      {
        name: "kubernetes",
        url: "https://codewiki.google/github.com/kubernetes/kubernetes",
        description: "Production-grade container scheduling and management",
        descriptionKey: "featured.kubernetes.description",
        stars: "118.4k"
      },
      {
        name: "react",
        url: "https://codewiki.google/github.com/facebook/react",
        description: "A library for building user interfaces for web and native",
        descriptionKey: "featured.react.description",
        stars: "240.3k"
      },
      {
        name: "python-sdk",
        url: "https://codewiki.google/github.com/modelcontextprotocol/python-sdk",
        description: "Official Python SDK for Model Context Protocol servers and clients",
        descriptionKey: "featured.pythonSdk.description",
        stars: "19.8k"
      }
    ];
    $$renderer2.push(`<section class="featured-section"><h2>${escape_html(i18n.t("featured.title") || "Featured Repositories")}</h2> <div class="repositories-grid"><!--[-->`);
    const each_array = ensure_array_like(REPOSITORIES);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let repo = each_array[$$index];
      $$renderer2.push(`<a class="repo-card shine"${attr("href", repo.url)}><div class="repo-content"><div class="repo-header"><h3>${escape_html(repo.name)}</h3></div> <p class="repo-description"><span>${escape_html(i18n.t(repo.descriptionKey) || repo.description)}</span></p> <span class="star-count">`);
      StarIcon($$renderer2, {});
      $$renderer2.push(`<!----> ${escape_html(repo.stars)}</span></div></a>`);
    }
    $$renderer2.push(`<!--]--></div></section>`);
  });
}
function GeminiIcon($$renderer, $$props) {
  let { class: className = "", $$slots, $$events, ...rest } = $$props;
  $$renderer.push(`<svg${attributes(
    {
      "aria-hidden": "true",
      class: `h-6 w-6 ${stringify(className ?? "")}`,
      ...rest,
      fill: "none",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    },
    void 0,
    void 0,
    void 0,
    3
  )}><defs><linearGradient id="gemini-gradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#4285F4"></stop><stop offset="50%" stop-color="#9B72CB"></stop><stop offset="100%" stop-color="#D96570"></stop></linearGradient></defs></svg>`);
}
function FeaturesSection($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<section class="sticky-section"><div class="sticky-section-content"><div class="split-sections"><section class="split-section"><h2>${escape_html(i18n.t("privateRepo.title") || "Try with your own private repositories")} <span class="tag shine"><span class="tag-content">${escape_html(i18n.t("privateRepo.comingSoon") || "Coming Soon")}</span></span></h2> <p>${escape_html(i18n.t("privateRepo.description") || "Stop documenting. Start understanding. Connect your repositories to get fully interactive Code Wikis that sync perfectly with every change. No more outdated documentation. Ever.")}</p> <a class="cta-card shine invert-theme" href="https://developers.google.com/profile/badges/community/sdlcagents/gca-agents" rel="noopener" target="_blank"><div class="cta-content"><h3 class="cta-title">`);
    GeminiIcon($$renderer2, {});
    $$renderer2.push(`<!----> <span>${escape_html(i18n.t("privateRepo.notifyMe") || "Notify me when available")}</span></h3></div></a></section> <section class="split-section"><h2>${escape_html(i18n.t("appReading.title") || "Read your application for the first time")}</h2> <p>${escape_html(i18n.t("appReading.subtitle") || "Code documentation that works for you, not the other way around.")}</p> <ul class="icon-grid"><li style="--icon: 'grid_view'"><span>${escape_html(i18n.t("appReading.understandCode.title") || "Understand your code section by section")}</span> <p><span>${escape_html(i18n.t("appReading.understandCode.description") || "Focus on the code you care about. Select a section and dive deep into how it works.")}</span></p></li> <li style="--icon: 'bolt'"><span>${escape_html(i18n.t("appReading.autoGenerated.title") || "Automatically generated")}</span> <p><span>${escape_html(i18n.t("appReading.autoGenerated.description") || "Our AI agents automatically generate and maintain rich, interactive knowledge bases from your code.")}</span></p></li> <li style="--icon: 'rotate_left'"><span>${escape_html(i18n.t("appReading.alwaysUpToDate.title") || "Always up to date")}</span> <p>${escape_html(i18n.t("appReading.alwaysUpToDate.description") || "Every time a pull request is merged, relevant documentation is automatically updated.")}</p></li> <li style="--icon: 'code'"><span>${escape_html(i18n.t("appReading.linkBack.title") || "Link back to your code")}</span> <p><span>${escape_html(i18n.t("appReading.linkBack.description") || "Jump instantly from architecture overview to the exact service, or from function description to the definition in your repository.")}</span></p></li></ul></section> <section class="split-section"><h2>${escape_html(i18n.t("talkCodebase.title") || "Talk to your codebase")}</h2> <p>${escape_html(i18n.t("talkCodebase.description") || "Ask questions about architecture, find function definitions, and understand complex logic in natural language. Like having an engineer on call 24/7.")}</p> <ul class="icon-list"><li style="--icon: 'chat_bubble_outline'">${escape_html(i18n.t("talkCodebase.chat") || "Chat with your codebase")}</li> <li style="--icon: 'search'">${escape_html(i18n.t("talkCodebase.find") || "Find what you need instantly")}</li> <li style="--icon: 'speed'">${escape_html(i18n.t("talkCodebase.quality") || "Low latency, high quality")}</li></ul></section></div> <div class="sticky-visual"><div class="cube"></div> <div class="scroll-animation-container"><div class="layer" data-layer-index="0"></div> <div class="layer" data-layer-index="1"></div> <div class="layer" data-layer-index="2"></div></div></div></div></section>`);
  });
}
function Cube($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<div class="h-full w-full"></div>`);
  });
}
function ActionIcon($$renderer, $$props) {
  let { class: className = "", $$slots, $$events, ...rest } = $$props;
  $$renderer.push(`<svg${attributes(
    {
      fill: "none",
      height: "57",
      viewBox: "0 0 57 57",
      width: "57",
      xmlns: "http://www.w3.org/2000/svg",
      class: clsx(className ?? ""),
      ...rest
    },
    void 0,
    void 0,
    void 0,
    3
  )}><defs><linearGradient id="action-gradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#4285F4"></stop><stop offset="50%" stop-color="#9B72CB"></stop><stop offset="100%" stop-color="#D96570"></stop></linearGradient></defs></svg>`);
}
function ArrowIcon($$renderer, $$props) {
  let { class: className = "", $$slots, $$events, ...rest } = $$props;
  $$renderer.push(`<svg${attributes(
    {
      "aria-hidden": "true",
      class: `h-6 w-6 ${stringify(className ?? "")}`,
      ...rest,
      fill: "currentColor",
      viewBox: "0 0 24 24"
    },
    void 0,
    void 0,
    void 0,
    3
  )}><title>Arrow</title><path d="M9 5l7 7-7 7"></path></svg>`);
}
function BrowserSection($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<section class="browser-section"><div class="browser-section-content"><h2>${escape_html(i18n.t("browserSection.title") || "Add the missing dimension to your software")}</h2> <div class="desktop-graphic"><div class="screen shine"><div class="screen-content"><a class="browser-section-cta" href="https://codewiki.google/github.com/google-gemini/gemini-cli" rel="noopener" target="_blank"><div class="browser-section-cta-content">`);
    ActionIcon($$renderer2, {});
    $$renderer2.push(`<!----> <p>${escape_html(i18n.t("browserSection.cta") || "See Code Wiki in action")}</p> `);
    ArrowIcon($$renderer2, {});
    $$renderer2.push(`<!----></div></a> `);
    Cube($$renderer2);
    $$renderer2.push(`<!----> <div class="browser-bar"><div class="browser-dots"><div class="dot"></div> <div class="dot"></div> <div class="dot"></div></div> <div class="address-bar"></div></div></div></div> <div class="base"></div></div></div></section>`);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<sdlc-agents-root><landing-page>`);
    Header($$renderer2);
    $$renderer2.push(`<!----> <app-home><div class="home-container">`);
    HeroSection($$renderer2);
    $$renderer2.push(`<!----> <section class="sticky-hero-cube-section"></section> `);
    FeaturedRepos($$renderer2);
    $$renderer2.push(`<!----> `);
    FeaturesSection($$renderer2);
    $$renderer2.push(`<!----> `);
    BrowserSection($$renderer2);
    $$renderer2.push(`<!----></div></app-home></landing-page> `);
    Footer($$renderer2);
    $$renderer2.push(`<!----></sdlc-agents-root>`);
  });
}
export {
  _page as default
};
