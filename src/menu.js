import "./style.scss";

import './assets/js/themeSwitch.js'

import {renderHeader} from './assets/js-modules/header.js'
import {renderFooter} from './assets/js-modules/footer.js'

function boostrap() {

  const headerElement = renderHeader();

  const mainElement = document.createElement('main');
  mainElement.className = 'main';


  const footerElement = renderFooter();

  mainElement.append();

  document.body.append(headerElement, mainElement, footerElement);
}

document.addEventListener('DOMContentLoaded', boostrap);