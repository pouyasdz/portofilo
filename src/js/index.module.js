import { scrollAnimation } from "./common/functions.js";
import { layout } from "./components/layout.js";

layout()

window.addEventListener("scroll", ()=> scrollAnimation(".reval", "animation-active"));
window.addEventListener("scroll", ()=> scrollAnimation(".demo-cart", "fade-in-active"));