function renderHeader() {
  const headerHTML = `
    <header class="header">
      <div class="container">
        <div class="header__wrapper">
          <div class="logo">
            <a href="./">
              <img src="./icons/Resource.svg" alt="logo" width="100" height="60" loading="lazy">
            </a>
          </div>
          <nav class="header__nav">
            <ul role="list">
              <li class="header__nav__elem"><a href="">Favorite coffee</a></li>
              <li class="header__nav__elem"><a href="">About</a></li>
              <li class="header__nav__elem"><a href="">Mobile app</a></li>
              <li class="header__nav__elem"><a href="">Contact us</a></li>
            </ul>
          </nav>
          <div class="burger"></div>
          <div class="header__menu">
            <a href="./menu" class="header__menu__wrapper">
              <p class="header__menu__text">Menu</p>
              <img class="header__menu__icon" src="./icons/coffee-cup.svg" alt="coffee-cup" width="20" height="20" loading="lazy">
            </a>
          </div>
        </div>
      </div>
    </header>
  `;

  const headerContainer = document.getElementById('header-container');
  if (headerContainer) {
    headerContainer.outerHTML = headerHTML;
  }
}

document.addEventListener('DOMContentLoaded', renderHeader);