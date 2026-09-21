import './about.scss';
import aboutImg1 from '../../assets/img/about/about-1.jpg';
import aboutImg2 from '../../assets/img/about/about-2.jpg';
import aboutImg3 from '../../assets/img/about/about-3.jpg';
import aboutImg4 from '../../assets/img/about/about-4.jpg';

export function renderAbout() {
  const about = document.createElement('section');
  about.className = 'about';

  about.innerHTML = `
  <div class="container">
      <h2 class="about__text">Resource is <span>the perfect and cozy
        place</span> where you
        can enjoy a variety of hot beverages, relax, catch up with friends, or
        get some work done.
      </h2>
      <div class="about__wrapper">
        <img
          class="about__wrapper-img"
          src="${aboutImg1}"
          alt="about-img-1"
          width=""
          height="590"
          loading="lazy"
        >
        <img
          class="about__wrapper-img_hide"
          src="${aboutImg2}"
          alt="about-img-2"
          width=""
          height="430"
          loading="lazy"
        >
        <img
          class="about__wrapper-img_hide"
          src="${aboutImg3}"
          alt="about-img-3"
          width=""
          height="430"
          loading="lazy"
        >
        <img
          class="about__wrapper-img"
          src="${aboutImg4}"
          alt="about-img-4"
          width=""
          height="590"
          loading="lazy"
        >
      </div>
    </div>
  `
  return about;
}