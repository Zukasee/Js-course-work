

let taba = document.querySelectorAll('.skil');



let tabs_info = document.querySelectorAll('.video');
for (let i = 0; i < taba.length; i++) {
   taba[i].addEventListener('click', () => {
      for (let i = 0; i < taba.length; i++) {
         tabs_info[i].classList.remove('active');
      }
      tabs_info[i].classList.add('active');
   });
}

let scroll_up = document.querySelector('.one_refernce');

scroll_up.addEventListener('click', fun1);
function fun1() {
   window.scroll({
      top: 668,
      behavior: 'smooth',
   });
}

let scroll_up2 = document.querySelector('.two_refernce');
scroll_up2.onclick = scroll_up2.addEventListener('click', fun2);
function fun2() {
   window.scroll({
      top: 1400,
      behavior: 'smooth',
   });
}

let scroll_up3 = document.querySelector('.three_refernce');

scroll_up3.addEventListener('click', fun3);
function fun3() {
   window.scroll({
      top: 2170,
      behavior: 'smooth',
   });
}

