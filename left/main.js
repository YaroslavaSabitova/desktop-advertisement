function loader() {
  setTimeout(function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 1000);
  }, 1000);
}

var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  loop: true,
  autoHeight: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


function resize() {
  parent.postMessage(JSON.stringify({
    w_left: document.body.offsetWidth
  }), '*');
}

window.onresize = function (event) {
  resize();
};

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener('load', function () {
  loader();
  resize();
  
  gsap.set('.container', {autoAlpha: 1});
});


