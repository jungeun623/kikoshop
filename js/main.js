window.addEventListener("load",function(){
// 상단의 마이페이지 리스트 기능

// 로고

// swiper 배너================
// 배너 스와이퍼 기능
const swBanner = new Swiper(".sw-banner", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    760: {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: ".sw-banner-pg ",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

// 상품영역

// 브랜드 소개 배너

//멤버십

// 하단

})