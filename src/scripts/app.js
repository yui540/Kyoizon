import * as util    from './lib/util'
import preload_json from './config/preload.json'

const device = util.isPC() ? 'pc' : 'sp'
,     json   = preload_json[device]

resize()
util.preload(json, () => {
  loadFinish()
})

/* resize -------------------------------------------------------------------- */
window.addEventListener('resize', () => {
  resize()
})

function resize() {
  resizeLoadView()
  resizeMainVisual()
}

/**
 * メインヴィジュアルのリサイズ
 */
function resizeMainVisual() {
  const main_visual = document.querySelector('.main-visual')
  ,     width       = document.body.offsetWidth < 1100 ? 1100 : document.body.offsetWidth
  ,     height      = window.innerHeight < 650 ? 650 : window.innerHeight
  
  main_visual.style.width  = `${ width }px`
  main_visual.style.height = `${ height }px`
}

/**
 * ロード画面のリサイズ
 */
function resizeLoadView() {  
  const load_view = document.querySelectorAll('.load-view div')
  ,     width     = document.body.offsetWidth < 1100 ? 1100 : document.body.offsetWidth
  ,     height    = window.innerHeight < 650 ? 650 : window.innerHeight
  

  for(let i=0; i < load_view.length; i++) {
    load_view[i].style.width  = `${ width }px`
    load_view[i].style.height = `${ height }px`
  }
}

/**
 * ロードの終了
 */
function loadFinish() {
  document.getElementById('load-view').setAttribute('data-state', 'true')
  document.getElementById('header').setAttribute('data-state', 'true')
}
