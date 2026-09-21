import './category-coffee.scss';
import irishCoffeeImg from '/src/assets/img/coffee/coffee-1.jpg'
import kahluaCoffeeImg from '/src/assets/img/coffee/coffee-2.jpg'
import honeyRafImg from '/src/assets/img/coffee/coffee-3.jpg'
import iceCappuccinoImg from '/src/assets/img/coffee/coffee-4.jpg'

export function renderCoffee() {
  const coffeeWrapper = document.createElement('div');
  coffeeWrapper.className = 'coffee__wrapper';
  coffeeWrapper.innerHTML = `
    <div class="card">
      <img
        class="card__img"
        src="${irishCoffeeImg}"
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
        src="${kahluaCoffeeImg}"
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
        src="${honeyRafImg}"
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
        src="${iceCappuccinoImg}"
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
  `
  return coffeeWrapper;
}