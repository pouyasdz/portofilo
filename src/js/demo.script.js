import { demos } from "./common/data.js";
import { demoContainer } from "./common/elements.js";

function demoCartElement(id, image, title, caption, status) {
  return`
    <a href="#${id}">
        <div class="demo-cart">
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
    const {cover, description, id, title, status} = demo;
    demoContainer.innerHTML += demoCartElement(id, cover, title, description, status);
})