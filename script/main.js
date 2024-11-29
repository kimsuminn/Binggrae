// main section 01
function searchItem() {
  let items = ['바나나맛우유', '더단백', '슈퍼콘', '요플레', '아카페라'];
  let itemList = document.querySelector('.front_container main .main_container .section_01 .item');

  let addItem = items.map(val => {
    return `
      <li><a href="#">#${val}</a></li>
    `;
  }).join("");

  itemList.innerHTML = addItem;
}

searchItem();

// section 02
function product() {
  let slide = document.querySelector('.front_container main .main_container .section_02 .slide_01 .swiper .swiper-wrapper .swiper-slide');
  console.log(slide);


  let swiper = new Swiper(".sbox", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
    grabCursor: true,
    slidesPerView: '6',
    spaceBetween: 30,
    breakpoints: {
      767: {
        // slidesPerView: '2',
      },
      1400: {
        // slidesPerView: '3',
      }
    }
  });


}

product();
