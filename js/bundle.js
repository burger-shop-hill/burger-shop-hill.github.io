(()=>{"use strict";const e=function(){const e=document.querySelector(".burgers__list");(async function(e){let t=await fetch(e);if(!t.ok)throw new Error(`url: ${e}, status: ${t.status}`);return await t.json()})("../data.json").then((t=>function(t){t.burgers.map((({img:t,name:r,pieces:n,gram:s,price:a,id:i})=>{const c=document.createElement("li");c.classList.add("burgers__item","wow","animate__animated","animate__fadeInUp"),c.setAttribute("data-burger",i),c.innerHTML=`\n            <div class="burgers__photo">\n                <img src=${t} alt="burger">\n            </div>\n            <h3 class="burgers__name">${r}</h3>\n            <span class="burgers__pieces">${n} шт.</span>\n            <div class="burgers__description">\n                <div class="burgers__quantity">\n                    <div class="burgers__minus btn__current" data-action="minus"></div>\n                    <p data-current class="burgers__current">1</p>\n                    <div class="burgers__plus btn__current" data-action="plus"></div>\n                </div>\n                <div class="burgers__specification">\n                    <p class="burgers__gram">${s}г.</p>\n                    <p class="burgers__price">${a}₽</p>\n                </div>\n            </div>\n            <button data-cart class="burgers__add">\n                Добавить в корзину\n            </button>\n            `,e.appendChild(c)}))}(t))).catch((()=>console.log("error")))},t=function(){const e=document.querySelectorAll(".basket__item"),t=document.querySelector(".basket__empty"),r=document.querySelector(".basket form"),n=document.querySelector(".basket__result__price");0===e.length?(t.style.display="block",r.style.display="none",n.innerText="0₽"):(t.style.display="none",r.style.display="block")},r=function(){const e=document.querySelectorAll(".basket__item"),t=document.querySelector(".basket__result__price");let r=0;console.log(1),e.forEach((e=>{const t=e.querySelector("[data-current]").innerText,n=e.querySelector(".basket__price").innerText;r=parseInt(t)*parseInt(n)+r})),t.innerText=r+"₽"};document.addEventListener("DOMContentLoaded",(function(){e(),t(),window.addEventListener("click",(function(e){let n;"plus"!==e.target.dataset.action&&"minus"!==e.target.dataset.action||(n=e.target.closest(".burgers__quantity").querySelector("[data-current]")),"plus"===e.target.dataset.action&&(n.innerText=++n.innerText,r()),"minus"===e.target.dataset.action&&(+n.innerText>1?(n.innerText=--n.innerText,r()):(function(e){const t=e.closest(".basket__item");t&&t.remove()}(e.target),t()))})),window.addEventListener("click",(function(e){if(e.target.hasAttribute("data-cart")){const n=document.querySelector(".basket__list"),s=e.target.closest(".burgers__item"),a={id:s.getAttribute("data-burger"),img:s.querySelector(".burgers__photo img").getAttribute("src"),title:s.querySelector(".burgers__name").innerText,current:s.querySelector("[data-current]").innerText,gram:s.querySelector(".burgers__gram").innerText,pieces:s.querySelector(".burgers__pieces").innerText,price:s.querySelector(".burgers__price").innerText},i=n.querySelector(`[data-basket="${a.id}"]`);if(i){const e=i.querySelector("[data-current]");e.innerText=+e.innerText+ +a.current}else{const e=`\n                <li class="basket__item" data-basket=${a.id}>\n                <div class="basket__photo">\n                    <img src=${a.img} alt=${a.title}>\n                </div>\n                <div class="basket__description">\n                    <h2 class="basket__name">${a.title}</h2>\n                    <span class="basket__pieces">${a.pieces}/</span>\n                    <span class="basket__gram">${a.gram}</span>\n                    <div class="basket__specification">\n                        <div class="burgers__quantity">\n                            <div class="burgers__minus btn__current" data-action="minus"></div>\n                            <p data-current class="burgers__current">${a.current}</p>\n                            <div class="burgers__plus btn__current" data-action="plus"></div>\n                        </div>\n                        <p class="basket__price">${a.price}</p>\n                    </div>\n                </div>\n            </li>`;n.insertAdjacentHTML("beforeend",e)}s.querySelector("[data-current]").innerText="1",t(),r()}}))}))})();
//# sourceMappingURL=bundle.js.map