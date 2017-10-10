resizeLoadView()

/* resize -------------------------------------------------------------------- */
window.addEventListener('resize', () => {
  resizeLoadView()
})

function resizeLoadView() {  
  const load_view = document.querySelectorAll('.load-view div')
  for(let i=0; i < load_view.length; i++) {
    load_view[i].style.width  = `${ document.body.offsetWidth }px`
    load_view[i].style.height = `${ window.innerHeight }px`
  }
}
