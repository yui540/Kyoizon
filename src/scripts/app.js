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

const device = util.isPC() ? 'pc' : 'sp';

// images preload
util.preload(preload_json[device], () => {
  yuki540.introAnimation();
}, (data) => {
  yuki540.setPer(data.per);
});

// devices
if(device === 'pc') {
  
} else {
  
}
