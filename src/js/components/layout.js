import { footer } from "./footer.js";
import { header } from "./header.js";

const headerElemnt = document.querySelector(".header");
const footerElemnt = document.querySelector('footer');

export function layout (){
    headerElemnt.innerHTML = header;
    footerElemnt.innerHTML = footer;
}