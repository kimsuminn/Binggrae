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

let productItem = [
  {
    id: 1,
    name: '요플레 제로',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_001.png',
    count: 2,
    menu: '발효유',
    menu_code: 4
  },
  {
    id: 2,
    name: '캐치티니핑 요구르트',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_002.png',
    count: 2,
    menu: '발효유',
    menu_code: 4
  },
  {
    id: 3,
    name: '바나나맛우유',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_003.png',
    count: 5,
    menu: '우유/치즈',
    menu_code: 3
  },
  {
    id: 4,
    name: '요플레 오리지널',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_004.png',
    count: 10,
    menu: '발효유',
    menu_code: 4
  },
  {
    id: 5,
    name: '메로나',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_005.png',
    count: 4,
    menu: '아이스크림',
    menu_code: 2
  },
  {
    id: 6,
    name: '요플레 닥터캡슐',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_006.png',
    count: 4,
    menu: '발효유',
    menu_code: 4
  },
  {
    id: 7,
    name: '투게더',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_007.png',
    count: 5,
    menu: '아이스크림',
    menu_code: 2
  },
  {
    id: 8,
    name: '끌레도르',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_008.png',
    count: 27,
    menu: '아이스크림',
    menu_code: 2
  },
  {
    id: 9,
    name: '붕어싸만코',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_009.png',
    count: 4,
    menu: '아이스크림',
    menu_code: 2
  },
  {
    id: 10,
    name: '슈퍼콘',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_010.png',
    count: 3,
    menu: '아이스크림',
    menu_code: 2
  },
  {
    id: 11,
    name: '오틀리',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_011.png',
    count: 5,
    menu: '음료',
    menu_code: 7
  },
  {
    id: 12,
    name: '아카페라 올데이',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_012.png',
    count: 3,
    menu: '커피',
    menu_code: 5
  },
  {
    id: 13,
    name: '아카페라 사이즈업 벤티',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_013.png',
    count: 2,
    menu: '커피',
    menu_code: 5
  },
  {
    id: 14,
    name: '식물성 비유',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_014.png',
    count: 1,
    menu: '음료',
    menu_code: 7
  },
  {
    id: 15,
    name: '요플레 그릭',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_015.png',
    count: 3,
    menu: '발효유',
    menu_code: 4
  },
  {
    id: 16,
    name: '아카페라 CUP',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_016.png',
    count: 2,
    menu: '커피',
    menu_code: 5
  },
]

function product() {
  let itemBox = document.querySelector('.itemBox');
  let itemList = productItem.map(val => {
    return `
      <li>
        <a href="#">
          <div class="img">
            <img src=${val.img} alt=${val.id}>
            <div class="deco">
              <div class="deco_1">
                <p>${val.name}</p>
              </div>
              <div class="deco_2">
                <p>${val.count}개 제품</p>
              </div>
            </div>
            <button type="button">더보기</button>
          </div>
          <p>${val.name}</p>
        </a>
      </li>
    `;
  }).join("");

  itemBox.innerHTML = itemList;
}

product();