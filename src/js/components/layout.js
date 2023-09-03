import { header } from "./header.js";

const headerElemnt = document.querySelector(".header");

export function layout (){
    headerElemnt.innerHTML = header;
}