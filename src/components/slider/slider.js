import './slider.scss';
import sliderImg1 from '../../assets/img/coffee-slider/coffee-slider-1.png'
import sliderImg2 from '../../assets/img/coffee-slider/coffee-slider-2.png'
import sliderImg3 from '../../assets/img/coffee-slider/coffee-slider-3.png'

const arrowIcon = `
    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.5 6.5H13M7 12.5L13 6.5L7 0.5" stroke="var(--text-primary)" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`

export function renderSlider() {
  const slider = document.createElement('section');
  slider.className = 'slider';
  slider.id = 'slider';

  const container = document.createElement('div');
  container.className = 'container';

  const titleH2 = document.createElement('h2');
  titleH2.className = 'slider__title';
  titleH2.innerHTML = `
    Choose your <span>favorite</span> coffee
  `;

  const slideWrapper = document.createElement('div');
  slideWrapper.className = 'slider__wrapper'

  const sliderViewport = document.createElement('div');
  sliderViewport.className = 'slider__viewport';

  const sliderTrack = document.createElement('div');
  sliderTrack.className = 'slider__track';

  sliderTrack.innerHTML = `
    <div class="slide">
      <img
        src="${sliderImg1}"
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
        src="${sliderImg2}"
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
        src="${sliderImg3}"
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
  `
  const paddings = document.createElement('div');
  paddings.className = 'slider__pagination'
  paddings.innerHTML = `
    <span class="slider__pagination-elem active"></span>
    <span class="slider__pagination-elem"></span>
    <span class="slider__pagination-elem"></span>  
  `
  const buttonPrev = document.createElement('button');
  buttonPrev.className = 'slider__button-prev';
  buttonPrev.innerHTML = arrowIcon;

  const buttonNext = document.createElement('button');
  buttonNext.className = 'slider__button-next';
  buttonNext.innerHTML = arrowIcon;

  sliderViewport.append(sliderTrack, paddings);

  slideWrapper.append(buttonPrev, sliderViewport, buttonNext)

  container.append(titleH2, slideWrapper);

  slider.append(container);

  return slider;
}