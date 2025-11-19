import "clsx";
import { w as writable } from "./index.js";
function createThemeStore() {
  const initialTheme = "light";
  const { subscribe, set, update } = writable(initialTheme);
  return {
    subscribe,
    toggle: () => {
      update((current) => {
        const newTheme = current === "dark" ? "light" : "dark";
        return newTheme;
      });
    },
    set: (theme) => {
      set(theme);
    }
  };
}
function themeStore() {
  const store = createThemeStore();
  let current = "light";
  store.subscribe((value) => {
    current = value;
  });
  return {
    get current() {
      return current;
    },
    get isDark() {
      return current === "dark";
    },
    toggle: store.toggle,
    set: store.set
  };
}
export {
  themeStore as t
};
