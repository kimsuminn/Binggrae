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
  function slide01() {
    let slide_01 = document.querySelector('main .main_container .section_02 .sec02_slider_01 .swiper-wrapper')
    let slide_item_01 = [
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
  
    let slideAdd_01 = slide_item_01.map((val, idx) => {
      return `
        <li class="swiper-slide">
          <a>
            <figure><img src=${val.img} alt=${idx + 1}></figure>
            <span>${val.item}</span>
          </a>
        </li>
      `;
    }).join("");
  
    slide_01.innerHTML = slideAdd_01;
  
    let slideHover = slide_01.querySelectorAll('.swiper-slide');
    slideHover.forEach((val, idx) => {
      let spanTag = val.querySelector('a span');
      
      val.addEventListener('mouseenter', () => {
        spanTag.style.backgroundColor = '#E5352A';
        spanTag.style.color = '#fff';
        spanTag.textContent = 'VIEW MORE';
      })
  
      val.addEventListener('mouseleave', () => {
        spanTag.style.backgroundColor = '#F9F9F9';
        spanTag.style.color = 'inherit';
        spanTag.textContent = `${slide_item_01[idx].item}`;
      })
    })
  
    let swiper_1 = new Swiper(".swiper_01", {
      cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      slidesPerView: 6,
      spaceBetween: 16,
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 10,
          slidesPerGroup: 2,
        },
        500: {
          slidesPerView: 3,
          spaceBetween: 10,
          slidesPerGroup: 3,
        },
        770: {
          slidesPerView: 6,
          spaceBetween: 16,
        },
      }
    });
  }

  slide01();

  function slide02() {
    let slide_02 = document.querySelector('main .main_container .section_02 .sec02_slider_02 .swiper-wrapper')
    let slide_item_02 = [
      {
        img: 'https://kimsuminn.github.io/binggrae/img/main/sec02_logo01.png',
        mimg: 'https://kimsuminn.github.io/binggrae/img/main/m_sec02_logo01.png',
        text: '빙그레 건강 tft의<br>단백질 전문 브랜드'
      },
      {
        img: 'https://kimsuminn.github.io/binggrae/img/main/sec02_logo02.png',
        mimg: 'https://kimsuminn.github.io/binggrae/img/main/m_sec02_logo02.png',
        text: '부담없는 캐주얼한 커피'
      },
      {
        img: 'https://kimsuminn.github.io/binggrae/img/main/sec02_logo03.png',
        mimg: 'https://kimsuminn.github.io/binggrae/img/main/m_sec02_logo03.png',
        text: '39년 전통의<br>대한민국 Heritage'
      },
      {
        img: 'https://kimsuminn.github.io/binggrae/img/main/sec02_logo04.png',
        mimg: 'https://kimsuminn.github.io/binggrae/img/main/m_sec02_logo04.png',
        text: '대한민국을 대표하는<br>No.1 가공우유'
      },
      {
        img: 'https://kimsuminn.github.io/binggrae/img/main/sec02_logo05.png',
        mimg: 'https://kimsuminn.github.io/binggrae/img/main/m_sec02_logo05.png',
        text: '진한맛의 감동<br>프리미엄 아이스크림'
      },
      {
        img: 'https://kimsuminn.github.io/binggrae/img/main/sec02_logo06.png',
        mimg: 'https://kimsuminn.github.io/binggrae/img/main/m_sec02_logo06.png',
        text: '남자를 위한 건강플랜,<br>마노플랜'
      },
      {
        img: 'https://kimsuminn.github.io/binggrae/img/main/sec02_logo07.png',
        mimg: 'https://kimsuminn.github.io/binggrae/img/main/m_sec02_logo07.png',
        text: '맛과 건강의 완벽한 조화,<br>비바시티'
      },
    ]
  
    let slideAdd_02 = slide_item_02.map((val, idx) => {
      return `
        <li class="swiper-slide">
          <img src=${val.img} alt=${idx + 1} class="title">
          <div class="hover">
            <div class="content">
              <img src=${val.img} alt=${idx + 1}>
              <span></span>
              <p>${val.text}</p>
            </div>
            <button type="button">구입하기</button>
          </div>
        </li>
      `;
    }).join("");
  
    slide_02.innerHTML = slideAdd_02;

    function imgChange() {
      let li = slide_02.querySelectorAll('.swiper-slide');

      if (innerWidth <= 1024) {
        li.forEach((val, idx) => {
          let img = val.querySelector('.title');
          img.src = slide_item_02[idx].mimg;
        })
      } else {
        li.forEach((val, idx) => {
          let img = val.querySelector('.title');
          img.src = slide_item_02[idx].img;
        })
      }
    }

    imgChange();

    let swiper_2 = new Swiper(".swiper_02", {
      cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 10,
          slidesPerGroup: 2,
        },
        500: {
          slidesPerView: 3,
          spaceBetween: 10,
          slidesPerGroup: 3,
        },
        770: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 16,
        },
        1300: {
          slidesPerView: 6,
          spaceBetween: 16,
        },
      }
    });
  }

  slide02();
}

product();
