/* header.js */

// header_top
function headerTop() {
  let menuName = [
    {
      name: '구매포털시스템',
      img: '../img/main/link_arrow02.png',
      alt: 'link_arrow',
      link: '#'
    },
    {
      name: '인재채용',
      img: '../img/main/link_arrow02.png',
      alt: 'link_arrow',
      link: '#'
    }
  ]

  let headerTopList = document.querySelector('header .header_top ul');
  let addMenu = menuName.map(val => {
    return `
      <li>
        <a href=${val.link}>
          <span>${val.name}</span>
          <img src=${val.img} alt=${val.alt}>
        </a>
      </li>
    `;
  }).join("");

  headerTopList.innerHTML = addMenu;
}

headerTop();

// header_container
function headerContainer() {
  // section 01
  function sec01() {
    let logo = [
      {
        img: '../img/main/logo-pc.png',
        alt: 'logo',
        className: 'web'
      },
      {
        img: '../img/main/logo_mo.png',
        alt: 'logo',
        className: 'mo'
      }
    ]
  
    let section01 = document.querySelector('header .header_container .header_section .header_sec01');
    let logoList = logo.map(val => {
      return `
        <img src=${val.img} alt=${val.alt} class=${val.className}>
      `;
    }).join("");
  
    section01.innerHTML = `
      <a href="/">
        ${logoList}
      </a>
    `;
  }

  sec01();

  // section 02
  function sec02() {
    let menu = [
      {
        title: '회사소개',
        subMenu: ['CEO 인사말', '경영이념', '사업분야', '히스토리']
      },
      {
        title: '제품소개',
        subMenu: ['아이스크림', '우유/치즈', '발효유', '커피', '주스', '음료', '스낵/디저트', '건강지향', '수출제품']
      },
      {
        title: '지속가능경영',
        subMenu: ['지속가능경영 체계', 'Eco-Friendly', 'Shared Value', 'Global Integrity', '윤리준법경영', '사회공헌', '보고서 및 정책']
      },
      {
        title: '투자정보',
        subMenu: ['재무정보', '주식정보', '전자공고', '공시정보', 'IR자료실']
      },
      {
        title: '뉴스룸',
        subMenu: ['새소식', '보도자료', '빙그레 스토리', '미디어<br>라이브러리']
      },
      {
        title: '고객센터',
        subMenu: ['고객상담', '제품공급문의', '사이버 신고센터', '안전신문고']
      }
    ]

    let header = document.querySelector('header');
    let headerContainer = document.querySelector('header .header_container');
    let headerSection = document.querySelector('header .header_container .header_section');
    let section02 = document.querySelector('header .header_container .header_section .header_sec02');
    
    let nav = document.createElement('nav');
    let ul = document.createElement('ul');
    
    nav.classList.add('gnb01');
    ul.classList.add('depth01');

    section02.appendChild(nav);
    nav.appendChild(ul);

    let menuList = menu.map(val => {

      let sub = val.subMenu;
      let subList = sub.map(val2 => {
        return `
          <li><a href="#">${val2}</a></li>
        `;
      }).join("");

      return `
        <li>
          <a href="#">${val.title}</a>
          <ul class="depth02">
            ${subList}
          </ul>
        </li>
      `;
    }).join("");

    ul.innerHTML = menuList;

    let mainMenu = document.querySelectorAll('header .header_container .header_section .header_sec02 .gnb01 .depth01 > li');

    function subMenuOpacity(op) {
      let subMenu = document.querySelectorAll('header .header_container .header_section .header_sec02 .gnb01 .depth01 > li > .depth02');

      subMenu.forEach(val => {
        val.style.opacity = `${op}`;
      })
    }

    mainMenu.forEach(val => {

      val.addEventListener('mouseenter', () => {
        header.style.backgroundColor = '#fff';
        header.style.borderRadius = '0 0 40px 40px';
        header.style.boxShadow = '0 1px 8px rgba(0, 0, 0, 0.1)';
        headerContainer.style.height = 'calc(120px + 420px)';
        headerSection.style.borderBottom = '1px solid #e7e7e7';
        subMenuOpacity(1);
      })

      val.addEventListener('mouseleave', () => {
        header.style.backgroundColor = 'transparent';
        header.style.borderRadius = '0';
        header.style.boxShadow = 'none';
        headerContainer.style.height = '120px';
        headerSection.style.borderBottom = '1px solid transparent';
        subMenuOpacity(0);
      })
    })
  }

  sec02();
}

headerContainer();
