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
