import React            from 'react'
import * as util        from './lib/util'
import $                from 'jquery'
import ProductBox       from './components/product-box.jsx'
import AchievementBox   from './components/achievement-box.jsx'
import ActivityBox      from './components/activity-box.jsx'
import { render }       from 'react-dom'
import preload_json     from './config/preload.json'
import product_json     from './config/product.json'
import achievement_json from './config/achievement.json'
import activity_json    from './config/activity.json'

const device = util.isPC() ? 'pc' : 'sp'
,     json   = preload_json[device].concat(preload_json['common'])

const menu_btn   = document.querySelector('.sp-menu')
,     close_btn  = document.querySelector('.close')
,     global_nav = document.querySelector('.global-nav')
,     nav_li     = document.querySelectorAll('.nav-li')

// リサイズ
resize()

// 画像のプリロード
util.preload(json, () => {
  setTimeout(() => { loadFinish() }, 500)
}, (data) => {
  const per = data.progress * 100
  document.querySelector('.bar').style.width = `${ per }%`
})

// product
render(
  <ProductBox
    json={ product_json }
  />,
  document.getElementById('product-box')
)

// achievement
render(
  <AchievementBox
    json={ achievement_json }
  />,
  document.getElementById('achievement-box')
)

// activity
render(
  <ActivityBox
    json={ activity_json }
  />,
  document.getElementById('activity-box')
)

/* resize -------------------------------------------------------------------- */
window.addEventListener('resize', () => {
  resize()
})

/* sp-menu show -------------------------------------------------------------- */
menu_btn.addEventListener('click', () => {
  global_nav.setAttribute('data-state', true)
  close_btn.setAttribute('data-state', true)
}, false)

/* sp-menu hidden ------------------------------------------------------------ */
close_btn.addEventListener('click', () => {
  global_nav.setAttribute('data-state', false)
  close_btn.setAttribute('data-state', false)
}, false)

/* nav-li click -------------------------------------------------------------- */
for(let i=0; i < nav_li.length; i++) {
  nav_li[i].number
  nav_li[i].addEventListener('click', function() {
    let href = this.getAttribute('data-val')
    ,   y    = document.querySelector(href).offsetTop

    global_nav.setAttribute('data-state', false)
    close_btn.setAttribute('data-state', false)
    $("html, body").animate({ scrollTop: y })
  }, false)
}






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
