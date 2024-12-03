let category = [
  {
    id: 1,
    img: 'https://kimsuminn.github.io/binggrae/img/product/ico_list.png',
    category: '전체'
  },
  {
    id: 2,
    img: 'https://kimsuminn.github.io/binggrae/img/category/ice-cream.png',
    category: '아이스크림'
  },
  {
    id: 3,
    img: 'https://kimsuminn.github.io/binggrae/img/category/milk.png',
    category: '우유/치즈'
  },
  {
    id: 4,
    img: 'https://kimsuminn.github.io/binggrae/img/category/yogurt.png',
    category: '발효유'
  },
  {
    id: 5,
    img: 'https://kimsuminn.github.io/binggrae/img/category/coffee.png',
    category: '커피'
  },
  {
    id: 6,
    img: 'https://kimsuminn.github.io/binggrae/img/category/juice.png',
    category: '주스'
  },
  {
    id: 7,
    img: 'https://kimsuminn.github.io/binggrae/img/category/drink.png',
    category: '음료'
  },
  {
    id: 8,
    img: 'https://kimsuminn.github.io/binggrae/img/category/snack.png',
    category: '스낵/디저트'
  },
  {
    id: 9,
    img: 'https://kimsuminn.github.io/binggrae/img/category/health.png',
    category: '건강지향'
  },
  {
    id: 10,
    img: 'https://kimsuminn.github.io/binggrae/img/category/export.png',
    category: '수출제품'
  },
]

function addCategory(category) {
  let menu = document.querySelector('section .product nav ul');
  let list = category.map(val => {
    return `
      <li class="swiper-slide">
        <a href="#">
          <img src=${val.img} alt=${val.id}>
          <p>${val.category}</p>
        </a>
      </li>
    `;
  }).join("");

  menu.innerHTML = list;

  let swiper = new Swiper(".category", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 10,
    spaceBetween: 16,
    breakpoints: {
      0: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      750: {
        slidesPerView: 6,
        spaceBetween: 16,
      },
      1400: {
        slidesPerView: 10,
        spaceBetween: 16,
      }
    }
  })
}

addCategory(category);