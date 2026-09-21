import "./style.scss";

import './assets/js/themeSwitch.js'

import {renderHeader} from './assets/js-modules/header.js'
import {renderHero} from './assets/js-modules/hero.js'
import {renderAbout} from './assets/js-modules/about.js'
import {renderMobileApp} from './assets/js-modules/mobile-app.js'
import {renderFooter} from './assets/js-modules/footer.js'

function boostrap() {

  const headerElement = renderHeader();

  const mainElement = document.createElement('main');
  mainElement.className = 'main';

  const heroElement = renderHero();

  const aboutElement = renderAbout();

  const mobileAppElement = renderMobileApp();

  const footerElement = renderFooter();

  mainElement.append(heroElement, aboutElement, mobileAppElement);

  document.body.append(headerElement, mainElement, footerElement);
}

document.addEventListener('DOMContentLoaded', boostrap);

