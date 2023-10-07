import { demos } from "./common/data.js";
import { demoContainer } from "./common/elements.js";

function demoCartElement(link, image, title, caption, status) {
  return`
    <a href="${link}">
        <div class="demo-cart fade-in-active">
            <img src="${image}" alt="" loading="lazy">
            <div class="detail">
                <h3>${title}</h3>
                <p>
                ${caption}
                </p>

                <span>status: ${status}</span>
            </div>
        </div>
    </a>
    `;
}

demos.forEach((demo) => {
    const {cover, description, link, title, status} = demo;
    demoContainer.innerHTML += demoCartElement(link, cover, title, description, status);
})