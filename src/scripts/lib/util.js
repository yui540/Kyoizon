/**
 * 画像のプリロード
 * @param images : 画像パスの配列
 * @param fn     : コールバック関数
 */
export const preload = (images, fn) => {
  let len  = images.length
  ,   load = 0

  images.forEach((image, key) => {
    const img = new Image()
    img.src = image
    img.onload = () => {
      load += 1
      if(load >= len) fn()
    }
  })
}

/**
 * スマートフォンかどうかの真偽
 * @return bool
 */
export const isSP = () => {
  const user_agent = navigator.userAgent.toLowerCase()
  ,     reg        = /(iphone|ipad|ipod|android|mobile)/

  return reg.test(user_agent)
}

/**
 * PCかどうかの真偽
 * return bool
 */
export const isPC = () => {
  return !isSP()
}
