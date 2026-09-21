import { n as renderHeader, t as renderFooter } from "./footer-Ch6Okxtt.js";
//#region src/assets/img/coffee/coffee-1.jpg
var coffee_1_default = "" + new URL("coffee-1-BYBVVpO2.jpg", import.meta.url).href;
//#endregion
//#region src/assets/img/coffee/coffee-2.jpg
var coffee_2_default = "" + new URL("coffee-2-7Ma7in_A.jpg", import.meta.url).href;
//#endregion
//#region src/assets/img/coffee/coffee-3.jpg
var coffee_3_default = "" + new URL("coffee-3-B__ofkt2.jpg", import.meta.url).href;
//#endregion
//#region src/assets/img/coffee/coffee-4.jpg
var coffee_4_default = "" + new URL("coffee-4-CyP3SpNa.jpg", import.meta.url).href;
//#endregion
//#region src/components/menu/category-coffee/category-coffee.js
function renderCoffee() {
	const coffeeWrapper = document.createElement("div");
	coffeeWrapper.className = "coffee__wrapper";
	coffeeWrapper.innerHTML = `
    <div class="card">
      <img
        class="card__img"
        src="${coffee_1_default}"
        alt=""
        width=""
        height=""
        loading="lazy"
      >
      <div class="card__info">
        <h3 class="card__info-title">Irish coffee</h3>
        <p class="card__info-text">Fragrant black coffee with Jameson Irish whiskey and whipped milk</p>
        <h3 class="card__info-price">$7.00</h3>
      </div>
    </div>
        <div class="card">
      <img
        class="card__img"
        src="${coffee_2_default}"
        alt=""
        width=""
        height=""
        loading="lazy"
      >
      <div class="card__info">
        <h3 class="card__info-title">Kahlua coffee</h3>
        <p class="card__info-text">Classic coffee with milk and Kahlua liqueur under a cap of frothed milk</p>
        <h3 class="card__info-price">$7.00</h3>
      </div>
    </div>
        <div class="card">
      <img
        class="card__img"
        src="${coffee_3_default}"
        alt=""
        width=""
        height=""
        loading="lazy"
      >
      <div class="card__info">
        <h3 class="card__info-title">Honey raf</h3>
        <p class="card__info-text">Espresso with frothed milk, cream and aromatic honey</p>
        <h3 class="card__info-price">$5.50</h3>
      </div>
    </div>
        <div class="card">
      <img
        class="card__img"
        src="${coffee_4_default}"
        alt=""
        width=""
        height=""
        loading="lazy"
      >
      <div class="card__info">
        <h3 class="card__info-title">Ice cappuccino</h3>
        <p class="card__info-text">Cappuccino with soft thick foam in summer version with ice</p>
        <h3 class="card__info-price">$5.00</h3>
      </div>
    </div>
  `;
	return coffeeWrapper;
}
//#endregion
//#region src/components/menu/menu.js
function renderMenu() {
	const menuElement = document.createElement("section");
	menuElement.className = "menu";
	const container = document.createElement("div");
	container.className = "container";
	container.innerHTML = `
    <h1 class="menu__title">
      Behind each of our cups hides an <span>amazing surprise</span>
    </h1>
    <div class="menu__category">
      <div class="menu__category__item coffee active">Coffee</div>
      <div class="menu__category__item tea">Tea</div>
      <div class="menu__category__item dessert">Dessert</div>
    </div>
  `;
	const categoryCoffee = renderCoffee();
	container.append(categoryCoffee);
	menuElement.append(container);
	return menuElement;
}
//#endregion
//#region src/app/pages/menu/menu-page.js
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

//# sourceMappingURL=nested-kh-figg2.js.map