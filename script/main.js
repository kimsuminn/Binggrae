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
  let slide = document.querySelector('.front_container main .main_container .section_02 .slide_01 .swiper .swiper-wrapper');
  let slide_item = [
    {
      img: 'https://kimsuminn.github.io/binggrae/img/category/ice-cream.png',
      item: '아이스크림'
    },
    {
      img: 'https://kimsuminn.github.io/binggrae/img/category/milk.png',
      item: '우유/치즈'
    },
    {
      img: 'https://kimsuminn.github.io/binggrae/img/category/yogurt.png',
      item: '발효유'
    },
    {
      img: 'https://kimsuminn.github.io/binggrae/img/category/coffee.png',
      item: '커피'
    },
    {
      img: 'https://kimsuminn.github.io/binggrae/img/category/juice.png',
      item: '주스'
    },
    {
      img: 'https://kimsuminn.github.io/binggrae/img/category/drink.png',
      item: '음료'
    },
    {
      img: 'https://kimsuminn.github.io/binggrae/img/category/snack.png',
      item: '스낵/디저트'
    },
    {
      img: 'https://kimsuminn.github.io/binggrae/img/category/health.png',
      item: '건강지향'
    },
    {
      img: 'https://kimsuminn.github.io/binggrae/img/category/export.png',
      item: '수출제품'
    }
  ]

  let slideAdd = slide_item.map(val => {
    return `
      <div class="swiper-slide">
        <a href="#">
          <figure><img src=${val.img} alt=${val.item}></figure>
          <span>${val.item}</span>
        </a>
      </div>
    `;
  }).join("");

  slide.innerHTML = slideAdd;


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
      769: {
        // slidesPerView: '2',
      },
      1400: {
        // slidesPerView: '3',
      }
    }
  });


}

product();
