import './menu.scss';

export function renderMenu() {
  const menuElement = document.createElement('section');
  menuElement.className = 'menu';
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