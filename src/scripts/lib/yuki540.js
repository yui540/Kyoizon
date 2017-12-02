const load_view = document.getElementById('load-view');
const title = document.querySelectorAll('.title div');
const progress = document.querySelector('.progress');
const content = document.getElementById('content');

export const loadAnimation = (per) => {
  if(per >= 0.25)
    title[0].setAttribute('data-state', 'active');
  if(per >= 0.5)
    title[1].setAttribute('data-state', 'active');
  if(per >= 0.75)
    title[2].setAttribute('data-state', 'active');
  if(per >= 1)
    title[3].setAttribute('data-state', 'active');

  progress.style.width = `${ per * 100 }%`
};

export const loadFinishe = () => {
  load_view.setAttribute('data-start', 'active');
  setTimeout(() => { load_view.setAttribute('data-stage-1', 'active'); }, 1800);
  setTimeout(() => { load_view.setAttribute('data-stage-2', 'active'); }, 2500);
  setTimeout(() => { load_view.setAttribute('data-stage-3', 'active'); }, 3400);
  setTimeout(() => { load_view.setAttribute('data-fin', 'active');     }, 4300);
  setTimeout(() => { content.setAttribute('data-state', 'active');     }, 7700);
};

export const setPer = (per) => {
  let per_ele = document.querySelector('.per');
  per_ele.innerHTML = `${ Math.floor(per * 100) }%`;
};

export const introAnimation = () => {
  let per = 0;
  let timer = setInterval(() => {
    per += 0.25;
    if(per >= 1.25) {
      clearInterval(timer);
      loadFinishe();
      return;
    }
    loadAnimation(per);
  }, 500);
};
