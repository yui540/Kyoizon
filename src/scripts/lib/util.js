/**
 * 画像のプリロード
 * @param images   : 画像パスの配列
 * @param fn       : コールバック関数
 * @param progress : 読み込み状況取得用コールバック関数
 */
export const preload = (images, fn, progress) => {
  const len = images.length;
  
  let load = 0;
  images.forEach((image, key) => {
    const img = new Image();
    img.src = image;
    img.onload = () => {
      load += 1;
      progress({
        size: len,
        load: load,
        per: load / len
      });

      if(load >= len) fn();
    };
  });
}

/**
 * スマートフォンかどうかの真偽
 * @return bool
 */
export const isSP = () => {
  const user_agent = navigator.userAgent.toLowerCase();
  const reg = /(iphone|ipad|ipod|android|mobile)/;

  return reg.test(user_agent);
}

/**
 * PCかどうかの真偽
 * return bool
 */
export const isPC = () => {
  return !isSP();
}

/**
 * ブラウザの判定
 * @return browser
 */
export const getBrowser = () => {
  const user_agent = navigator.userAgent.toLowerCase();

  if(user_agent.indexOf('msie') !== -1 || user_agent.indexOf('trident') !== -1)
    return 'ie';
  else if(user_agent.indexOf('edge') !== -1)
    return 'edge';
  else if(user_agent.indexOf('chrome') !== -1)
    return 'chrome';
  else if(user_agent.indexOf('safari') !== -1)
    return 'safari';
  else if(user_agent.indexOf('firefox') !== -1)
    return 'firefox';
  else if(user_agent.indexOf('opera') !== -1)
    return 'opera';
  else
    return 'other';
}

/**
 * 全画面サイズに設定
 */
export const setFullSize = (selector) => {
  const device = isPC() ? 'pc' : 'sp';
  const width = device === 'pc' ? window.innerWidth : screen.width;
  const height = device === 'pc' ? window.innerHeight : screen.height;
  const node_list = document.querySelectorAll(selector);

  node_list.forEach((node, key) => {
    node.style.width = `${ width }px`;
    node.style.height = `${ height }px`;
  });
}
