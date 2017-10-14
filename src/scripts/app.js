import * as util    from './lib/util'
import preload_json from './config/preload.json'

const device = util.isPC() ? 'pc' : 'sp'
,     json   = preload_json[device].concat(preload_json['common'])

const menu_btn   = document.querySelector('.sp-menu')
,     close_btn  = document.querySelector('.close')
,     global_nav = document.querySelector('.global-nav')

resize()
util.preload(json, () => {
  setTimeout(() => { loadFinish() }, 500)
}, (data) => {
  const per = data.progress * 100
  document.querySelector('.bar').style.width = `${ per }%`
})

/* resize -------------------------------------------------------------------- */
window.addEventListener('resize', () => {
  resize()
})

/* sp menu show -------------------------------------------------------------- */
menu_btn.addEventListener('click', () => {
  global_nav.setAttribute('data-state', true)
  close_btn.setAttribute('data-state', true)
}, false)

/* sp menu hidden ------------------------------------------------------------ */
close_btn.addEventListener('click', () => {
  global_nav.setAttribute('data-state', false)
  close_btn.setAttribute('data-state', false)
}, false)

/**
 * 各パーツのリサイズ
 */
function resize() {
  resizeLoadView()
  resizeMainVisual()
}

/**
 * メインヴィジュアルのリサイズ
 */
function resizeMainVisual() {
  const main_visual = document.querySelector('.main-visual')
  ,     size        = getSize()

  main_visual.style.width  = `${ size.width }px`
  main_visual.style.height = `${ size.height }px`
}

/**
 * ロード画面のリサイズ
 */
function resizeLoadView() {  
  const load_view = document.querySelectorAll('.load-view div')
  ,     size      = getSize()

  for(let i=0; i < load_view.length; i++) {
    load_view[i].style.width  = `${ size.width }px`
    load_view[i].style.height = `${ size.height }px`
  }
}

/**
 * ロードの終了
 */
function loadFinish() {
  document.getElementById('load-view').setAttribute('data-state', 'true')
  document.getElementById('header').setAttribute('data-state', 'true')
}

/**
 * 画面サイズの取得
 * @return size { width, height }
 */
function getSize() {
  let width  = document.body.offsetWidth
  ,   height = window.innerHeight
  if(util.isPC() && width < 1100) width  = 1100
  if(util.isPC() && height < 650) height = 650

  return { width, height }
}
