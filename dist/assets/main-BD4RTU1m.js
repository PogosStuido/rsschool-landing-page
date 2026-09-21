import { n as renderHeader, t as renderFooter } from "./footer-CaY5Mfym.js";
//#region src/assets/img/coffee-slider/coffee-slider-1.png
var coffee_slider_1_default = "" + new URL("coffee-slider-1-BQqdf2em.png", import.meta.url).href;
//#endregion
//#region src/assets/img/coffee-slider/coffee-slider-2.png
var coffee_slider_2_default = "" + new URL("coffee-slider-2-DBCy0FiK.png", import.meta.url).href;
//#endregion
//#region src/assets/img/coffee-slider/coffee-slider-3.png
var coffee_slider_3_default = "" + new URL("coffee-slider-3-WbYig0Jn.png", import.meta.url).href;
//#endregion
//#region src/components/slider/slider.js
var arrowIcon = `
    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.5 6.5H13M7 12.5L13 6.5L7 0.5" stroke="var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`;
function renderSlider() {
	const slider = document.createElement("section");
	slider.className = "slider";
	slider.id = "slider";
	const container = document.createElement("div");
	container.className = "container";
	const titleH2 = document.createElement("h2");
	titleH2.className = "slider__title";
	titleH2.innerHTML = `
    Choose your <span>favorite</span> coffee
  `;
	const slideWrapper = document.createElement("div");
	slideWrapper.className = "slider__wrapper";
	const sliderViewport = document.createElement("div");
	sliderViewport.className = "slider__viewport";
	const sliderTrack = document.createElement("div");
	sliderTrack.className = "slider__track";
	sliderTrack.innerHTML = `
    <div class="slide">
      <img
        src="${coffee_slider_1_default}"
        alt="S’mores Frappuccino"
        width=""
        height=""
        loading="lazy"
      >
      <div class="slide__info">
          <h3 class="slide__info-title">S’mores Frappuccino</h3>
          <p class="slide__info-text">This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.</p>
          <h3 class="slide__info-price">$5.50</h3>
      </div>
    </div>
    <div class="slide">
      <img
        src="${coffee_slider_2_default}"
        alt="caramel-macchiato"
        width=""
        height=""
        loading="lazy"
      >
       <div class="slide__info">
          <h3 class="slide__info-title"></h3>
          <p class="slide__info-text"></p>
          <h3 class="slide__info-price"></h3>
      </div>
    </div>
    <div class="slide">
      <img
        src="${coffee_slider_3_default}"
        alt="ice-coffee"
        width=""
        height=""
        loading="lazy"
      >
       <div class="slide__info">
          <h3 class="slide__info-title"></h3>
          <p class="slide__info-text"></p>
          <h3 class="slide__info-price"></h3>
      </div>
    </div>
  `;
	const paddings = document.createElement("div");
	paddings.className = "slider__pagination";
	paddings.innerHTML = `
    <span class="slider__pagination-elem active"></span>
    <span class="slider__pagination-elem"></span>
    <span class="slider__pagination-elem"></span>  
  `;
	const buttonPrev = document.createElement("button");
	buttonPrev.className = "slider__button-prev";
	buttonPrev.innerHTML = arrowIcon;
	const buttonNext = document.createElement("button");
	buttonNext.className = "slider__button-next";
	buttonNext.innerHTML = arrowIcon;
	sliderViewport.append(sliderTrack, paddings);
	slideWrapper.append(buttonPrev, sliderViewport, buttonNext);
	container.append(titleH2, slideWrapper);
	slider.append(container);
	return slider;
}
//#endregion
//#region src/components/hero/hero.js
function renderHero() {
	const hero = document.createElement("section");
	hero.className = "hero";
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
          <a href="./menu">
          <button
            class="hero__button"
            type="button"
          >
            Menu
          </button>
          </a>
        </div>
      </div>
    </div>
  `;
	return hero;
}
//#endregion
//#region src/assets/img/about/about-1.jpg
var about_1_default = "" + new URL("about-1-DfXlmDp7.jpg", import.meta.url).href;
//#endregion
//#region src/assets/img/about/about-2.jpg
var about_2_default = "" + new URL("about-2-CP7h7OQT.jpg", import.meta.url).href;
//#endregion
//#region src/assets/img/about/about-3.jpg
var about_3_default = "" + new URL("about-3-BgVRTDqL.jpg", import.meta.url).href;
//#endregion
//#region src/assets/img/about/about-4.jpg
var about_4_default = "" + new URL("about-4-CvsXWmsT.jpg", import.meta.url).href;
//#endregion
//#region src/components/about/about.js
function renderAbout() {
	const about = document.createElement("section");
	about.className = "about";
	about.id = "about";
	about.innerHTML = `
  <div class="container">
      <h2 class="about__text">Resource is <span>the perfect and cozy
        place</span> where you
        can enjoy a variety of hot beverages, relax, catch up with friends, or
        get some work done.
      </h2>
      <div class="about__wrapper">
        <div class="about__wrapper-img-box">
          <img
            class="about__wrapper-img"
            src="${about_1_default}"
            alt="about-img-1"
            loading="lazy"
          >
        </div>
        <div class="about__wrapper-img-box about__wrapper-img-box_hide">
          <img
            class="about__wrapper-img"
            src="${about_2_default}"
            alt="about-img-2"
            loading="lazy"
          >
        </div>
        <div class="about__wrapper-img-box about__wrapper-img-box_hide">
          <img
            class="about__wrapper-img"
            src="${about_3_default}"
            alt="about-img-3"
            loading="lazy"
          >
        </div>
        <div class="about__wrapper-img-box">
          <img
            class="about__wrapper-img"
            src="${about_4_default}"
            alt="about-img-4"
            loading="lazy"
          >
        </div>
      </div>
    </div>
  `;
	return about;
}
//#endregion
//#region src/assets/img/mobile-screens.png
var mobile_screens_default = "" + new URL("mobile-screens-pevenitR.png", import.meta.url).href;
//#endregion
//#region src/components/mobile-app/mobile-app.js
function renderMobileApp() {
	const mobileApp = document.createElement("section");
	mobileApp.className = "mobile-app";
	mobileApp.id = "mobile-app";
	mobileApp.innerHTML = `
  <div class="container">
      <div class="mobile-app__wrapper">
        <div class="mobile-app__wrapper-info">
          <h2 class="mobile-app__title"><span>Download</span> our app <br>
            to start ordering
          </h2>
          <p class="mobile-app__text">Download the Resource app today and experience
            the comfort of ordering your favorite coffee from wherever you are
          </p>
          <div class="mobile-app__buttons">
            <a
              class="app-store__button"
              href="https://apps.apple.com/us/iphone/apps"
              target="_blank"
            >
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.7063 18.6307C26.6694 14.6324 30.0641 12.6872 30.2193 12.5966C28.2967 9.86366 25.3169 9.49026 24.2697 9.46048C21.767 9.20369 19.3393 10.9206 18.0644 10.9206C16.764 10.9206 14.8008 9.48529 12.6848 9.52747C9.96196 9.56841 7.41468 11.1055 6.01762 13.4923C3.13444 18.359 5.28474 25.5108 8.04705 29.4446C9.42884 31.3712 11.0435 33.5223 13.1569 33.4466C15.2245 33.3635 15.9968 32.1614 18.4919 32.1614C20.9641 32.1614 21.6893 33.4466 23.8447 33.3983C26.0637 33.3635 27.4608 31.463 28.7942 29.519C30.3911 27.3108 31.0323 25.1362 31.0578 25.0245C31.0056 25.0071 26.7483 23.4229 26.7063 18.6307Z" fill="#403F3D"/>
                <path d="M22.6347 6.87268C23.7468 5.51675 24.5076 3.67205 24.2964 1.80005C22.6869 1.86952 20.674 2.88554 19.5149 4.21169C18.4893 5.38029 17.5732 7.29571 17.8099 9.097C19.6179 9.2285 21.4743 8.20752 22.6347 6.87268Z" fill="#403F3D"/>
              </svg>

              <div class="button__text">
                <p>Available on the</p>
                <p>App Store</p>
              </div>
            </a>
            <a
              class="google-play__button"
              href="https://play.google.com/store/apps?hl=en"
              target="_blank"
          
            >
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.7558 3.20309C3.39335 3.57302 3.18359 4.14896 3.18359 4.89483V31.4995C3.18359 32.2454 3.39335 32.8213 3.7558 33.1913L3.84525 33.2725L19.1359 18.3701V18.0182L3.84525 3.11587L3.7558 3.20309Z" fill="#403F3D"/>
                <path d="M26.0776 23.34L20.9863 18.3701V18.0182L26.0837 13.0482L26.1979 13.1129L32.2345 16.4618C33.9573 17.4122 33.9573 18.9761 32.2345 19.9325L26.1979 23.2754L26.0776 23.34Z" fill="#403F3D"/>
                <path d="M25.2733 24.2008L20.0617 19.1196L4.68164 34.1167C5.25384 34.7031 6.18695 34.7738 7.24807 34.1873L25.2733 24.2008Z" fill="#403F3D"/>
                <path d="M25.2733 12.1876L7.24807 2.20103C6.18695 1.62058 5.25384 1.69125 4.68164 2.27772L20.0617 17.2688L25.2733 12.1876Z" fill="#403F3D"/>
              </svg>

              <div class="button__text">
                <p>Available on</p>
                <p>Google Play</p>
              </div>
            </a>
          </div>
        </div>
        <img class="mobile-app__img" src="${mobile_screens_default}" alt="mobile-app-img">
      </div>
    </div>
  `;
	return mobileApp;
}
//#endregion
//#region src/app/pages/home/index.js
function boostrap() {
	const headerElement = renderHeader();
	const mainElement = document.createElement("main");
	mainElement.className = "main";
	const heroElement = renderHero();
	const sliderElement = renderSlider();
	const aboutElement = renderAbout();
	const mobileAppElement = renderMobileApp();
	const footerElement = renderFooter();
	mainElement.append(heroElement, sliderElement, aboutElement, mobileAppElement);
	document.body.append(headerElement, mainElement, footerElement);
}
document.addEventListener("DOMContentLoaded", boostrap);
//#endregion

//# sourceMappingURL=main-BD4RTU1m.js.map