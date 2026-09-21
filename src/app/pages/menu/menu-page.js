import "/src/style.scss";

import '/src/assets/js/themeSwitch.js'

import {renderHeader} from '/src/components/header/header.js'
import {renderMenu} from '/src/components/menu/menu.js'
import {renderFooter} from '/src/components/footer/footer.js'

function boostrap() {

  const headerElement = renderHeader();

  const mainElement = document.createElement('main');
  mainElement.className = 'main';

  const menuElement = renderMenu();

  const footerElement = renderFooter();

  mainElement.append(menuElement);

  document.body.append(headerElement, mainElement, footerElement);
}

document.addEventListener('DOMContentLoaded', boostrap);