//#region \0vite/modulepreload-polyfill.js
(function polyfill() {
	const relList = document.createElement("link").relList;
	if (relList && relList.supports && relList.supports("modulepreload")) return;
	for (const link of document.querySelectorAll("link[rel=\"modulepreload\"]")) processPreload(link);
	new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type !== "childList") continue;
			for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
		}
	}).observe(document, {
		childList: true,
		subtree: true
	});
	function getFetchOpts(link) {
		const fetchOpts = {};
		if (link.integrity) fetchOpts.integrity = link.integrity;
		if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
		if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
		else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
		else fetchOpts.credentials = "same-origin";
		return fetchOpts;
	}
	function processPreload(link) {
		if (link.ep) return;
		link.ep = true;
		const fetchOpts = getFetchOpts(link);
		fetch(link.href, fetchOpts);
	}
})();
//#endregion
//#region src/assets/js-modules/header.js
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
	const headerContainer = document.getElementById("header-container");
	if (headerContainer) headerContainer.outerHTML = headerHTML;
}
document.addEventListener("DOMContentLoaded", renderHeader);
//#endregion

//# sourceMappingURL=src-DvnvVW9G.js.map