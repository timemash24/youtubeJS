const moreBtn = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');
const actionBtns = document.querySelectorAll('.actions button i');

function handleActionBtn(event) {
  const btn = event.target;
  btn.classList.toggle('active');
}

moreBtn.addEventListener('click', () => {
  moreBtn.classList.toggle('clicked');
  title.classList.toggle('clamp');
});

actionBtns.forEach((btn, i) => {
  if (i <= 1) btn.addEventListener('click', handleActionBtn);
});
