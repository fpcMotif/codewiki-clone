import { v as head } from "../../chunks/index2.js";
import { t as themeStore } from "../../chunks/theme.svelte.js";
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children } = $$props;
    themeStore();
    head("12qhfyh", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Code Wiki</title>`);
      });
      $$renderer3.push(`<meta name="description" content="A new perspective on development for the intelligent agent era"/>`);
    });
    children($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
export {
  _layout as default
};
