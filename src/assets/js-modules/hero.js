import '../../assets/scss/sections/menu.scss';

export function renderHero() {
  const hero = document.createElement('section');
  hero.className = 'hero';
  hero.innerHTML = `
    <div class="container">
      <div class="hero__background-image">
        <div class="hero__wrapper">
          <h1 class="hero__header">
            <span class="hero__header_accent">Enjoy</span>
            premium
            coffee at our
            charming cafe
          </h1>
          <p class="hero__info">With its inviting atmosphere and delicious
            coffee
            options, the
            Coffee House Resource is a popular destination for coffee lovers and
            those seeking a warm and inviting space to enjoy their favorite
            beverage.
          </p>
          <button
            class="hero__button"
            type="button"
          >
            Menu
          </button>
        </div>
      </div>
    </div>
  `
  return hero;
}