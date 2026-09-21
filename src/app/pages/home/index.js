import "/src/style.scss";

import '/src/assets/js/themeSwitch.js'

import {renderHeader} from '/src/components/header/header.js'
import {renderSlider} from '/src/components/slider/slider.js'
import {renderHero} from '/src/components/hero/hero.js'
import {renderAbout} from '/src/components/about/about.js'
import {renderMobileApp} from '/src/components/mobile-app/mobile-app.js'
import {renderFooter} from '/src/components/footer/footer.js'

function boostrap() {

  const headerElement = renderHeader();

  const mainElement = document.createElement('main');
  mainElement.className = 'main';

  const heroElement = renderHero();

  const sliderElement = renderSlider();

  const aboutElement = renderAbout();

  const mobileAppElement = renderMobileApp();

  const footerElement = renderFooter();

  mainElement.append(heroElement, sliderElement, aboutElement, mobileAppElement);

  document.body.append(headerElement, mainElement, footerElement);
}

document.addEventListener('DOMContentLoaded', boostrap);

