import './menu.scss';

import {renderCoffee} from '/src/components/menu/category-coffee/category-coffee.js'

export function renderMenu() {
  const menuElement = document.createElement('section');
  menuElement.className = 'menu';

  const container = document.createElement('div');
  container.className = 'container';

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