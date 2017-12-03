import riot from 'riot';
import * as util from './lib/util';
import * as yuki540 from './lib/yuki540';
import preload_json from './config/preload';

// style
import '../scss/function.scss';
import '../scss/keyframes.scss';
import '../scss/mixin.scss';
import '../scss/variable.scss';
import '../scss/modules/base.scss';
import '../scss/modules/app.scss';
import '../scss/modules/pc/load-view.scss';
import '../scss/modules/sp/load-view.scss';
import '../scss/modules/pc/content.scss';
import '../scss/modules/sp/content.scss';
import '../scss/modules/pc/navigation-area.scss';
import '../scss/modules/sp/navigation-area.scss';
import '../scss/modules/pc/page-area.scss';
import '../scss/modules/sp/page-area.scss';
import '../scss/modules/pc/profile.scss';
import '../scss/modules/sp/profile.scss';
import '../scss/modules/pc/history.scss';
import '../scss/modules/sp/history.scss';

const device = util.isPC() ? 'pc' : 'sp';

// images preload
util.preload(preload_json[device], () => {
  yuki540.introAnimation();
}, (data) => {
  yuki540.setPer(data.per);
});

// devices
if(device === 'pc') {
  const width = window.innerWidth >= 1100 ? window.innerWidth : 1100;
  const main_illust = document.querySelectorAll('.main-illust-li div'); 
  main_illust.forEach((node) => {
    node.style.width = `${ width / 2 - 40 }px`;
  });
} else {
  const width = screen.width;
  const main_illust = document.querySelectorAll('.main-illust-li div');
  main_illust.forEach((node) => {
    node.style.width = `${ width }px`;
  });
}

const navigation_area = document.getElementById('navigation-area');
const nav_btn = document.querySelector('.nav-btn');
const nav_close_btn = document.querySelector('.nav-close-btn');
const nav_li = document.querySelectorAll('.nav-li');
const page_area = document.getElementById('page-area');
const page_close_btn = document.querySelector('.page-close-btn');

nav_btn.addEventListener('click', () => {
  navigation_area.setAttribute('data-state', 'active');
}, false);

nav_close_btn.addEventListener('click', () => {
  navigation_area.setAttribute('data-state', 'passive');
}, false);

nav_li.forEach((li) => {
  li.addEventListener('click', function(e) {
    e.preventDefault();
    const href = this.href.match(/#(.*)/)[1];
    
    page_area.style.display = 'block';
    page_area.setAttribute('data-href', href);
  }, false);
});

page_close_btn.addEventListener('click', () => {
  setTimeout(() => { page_area.style.display = 'none'; }, 500);
  page_area.setAttribute('data-href', '');
}, false);
