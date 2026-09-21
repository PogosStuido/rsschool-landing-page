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
          src="./src/assets/img/about/about-1.jpg"
          alt="about-img-1"
          width=""
          height="590"
          loading="lazy"
        >
        <img
          class="about__wrapper-img_hide"
          src="./src/assets/img/about/about-2.jpg"
          alt="about-img-2"
          width=""
          height="430"
          loading="lazy"
        >
        <img
          class="about__wrapper-img_hide"
          src="./src/assets/img/about/about-3.jpg"
          alt="about-img-3"
          width=""
          height="430"
          loading="lazy"
        >
        <img
          class="about__wrapper-img"
          src="./src/assets/img/about/about-4.jpg"
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