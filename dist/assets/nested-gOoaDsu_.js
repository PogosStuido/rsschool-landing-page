import { n as renderHeader, t as renderFooter } from "./footer-Ch6Okxtt.js";
//#region src/components/menu/menu.js
function renderMenu() {
	const menuElement = document.createElement("section");
	menuElement.className = "menu";
	menuElement.innerHTML = `
      <div class="container">
      <h1 class="menu__title">Behind each of our cups hides an <span>amazing surprise</span>
      </h1>
      <div class="menu__category">
        <div class="menu__category__item coffee">Coffee</div>
        <div class="menu__category__item tea">Tea</div>
        <div class="menu__category__item dessert">Dessert</div>
      </div>
    </div>
  `;
	return menuElement;
}
//#endregion
//#region src/app/pages/menu/menu.js
function boostrap() {
	const headerElement = renderHeader();
	const mainElement = document.createElement("main");
	mainElement.className = "main";
	const menuElement = renderMenu();
	const footerElement = renderFooter();
	mainElement.append(menuElement);
	document.body.append(headerElement, mainElement, footerElement);
}
document.addEventListener("DOMContentLoaded", boostrap);
//#endregion

//# sourceMappingURL=nested-gOoaDsu_.js.map