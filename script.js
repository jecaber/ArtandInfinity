var $cont = document.querySelector('.cont');
var $elsArr = [].slice.call(document.querySelectorAll('.el'));
var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

setTimeout(function() {
  $cont.classList.remove('s--inactive');
}, 200);

$elsArr.forEach(function($el, index) {
  $el.addEventListener('click', function() {
    if (this.classList.contains('s--active')) return;
    $cont.classList.add('s--el-active');
    this.classList.add('s--active');

    if (index===2){
      alert('GET KRUNKED!!')
    }
  });
});

$closeBtnsArr.forEach(function($btn) {
  $btn.addEventListener('click', function(e) {
    e.stopPropagation();
    $cont.classList.remove('s--el-active');
    document.querySelector('.el.s--active').classList.remove('s--active');
  });
});

document.querySelectorAll('.el__index-overlay').forEach(btn => {
  btn.addEventListener('click', () => {
    const index = btn.dataset.index;
    document.querySelectorAll('.el').forEach(el => el.classList.remove('s--active'));
    btn.closest('.el').classList.add('s--active');

    document.querySelectorAll('.el__side-text').forEach(text => text.style.opacity = '0');
    const target = document.querySelector(`.el__side-text[data-index="${index}"]`);
    if (target) target.style.opacity = '1';
  });
});


const contactBtn = document.querySelector('.nav-btn a[href="./about.html"]');

contactBtn.addEventListener('click', function(e){
  e.preventDefault();
  alert('No darkness lasts forever!');
  alert('And even there, there are stars.');
  alert('Well said, Ursula K. Le Guin, well said.');

  setTimeout(() => {
    window.location.href = this.href;
  }, 100);
})

document.querySelectorAll('.el').forEach(el => {
  el.querySelector('.el__index-overlay').addEventListener('click', () => {
    document.querySelectorAll('.el').forEach(e => e.classList.remove('s--active'));
    el.classList.add('s--active');
  });

  // Close button logic
  el.querySelector('.el__close-btn').addEventListener('click', () => {
    el.classList.remove('s--active');
  });
});

document.querySelectorAll('.el').forEach(el => {
  el.addEventListener('click', () => {
    // Remove s--active from all
    document.querySelectorAll('.el').forEach(e => e.classList.remove('s--active'));
    // Add to clicked
    el.classList.add('s--active');
  });
});


//click to proceed prank
const btn = document.getElementById('prank-btn');
let clickCount = 0;
let state = 0; // 0: counting to 5, 1: first sike click, 2: final confirmation

btn.addEventListener('click', () => {
  if (state === 0) {
    clickCount++;
    moveButtonRandomly();
    if (clickCount === 5) {
      alert('SIKE!');
      alert('Now click it again.');
      state = 1;
      clickCount = 0;
    }
  } else if (state === 1) {
    moveButtonRandomly();
    setTimeout(() => {
      alert('SIKE AGAIN!');
      alert('Okay, click it again for real this time hehe.');
      state = 2;
    }, 200);
  } else if (state === 2) {
    moveButtonRandomly();
    setTimeout(() => {
      alert('Surprise!!');
      alert('This is a perfect example of an infinite loop.')
      alert('Try clicking the button again for 5 times.')
      state = 0;
      clickCount = 0;
    }, 200);
  }
});


function moveButtonRandomly() {
  const buttonWidth = btn.offsetWidth;
  const buttonHeight = btn.offsetHeight;
  const maxX = window.innerWidth - buttonWidth;
  const maxY = window.innerHeight - buttonHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  btn.style.position = 'absolute';
  btn.style.left = randomX + 'px';
  btn.style.top = randomY + 'px';
}
