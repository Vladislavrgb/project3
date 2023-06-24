const image = ['image1','image2','image3'];
let i = 0;

const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

const arrow1 = document.querySelector('.alipse-one');
const arrow2 = document.querySelector('.alipse-two');
const arrow3 = document.querySelector('.alipse-three');

const link1 = document.querySelector('.link1');
const link2 = document.querySelector('.link2');
const link3 = document.querySelector('.link3');
const block = document.querySelector('.image');

arrowRight.addEventListener('click', () => {
  if (i == 0){
    image2();
    i = 1;
  } else if(i == 1){
    image3();
    i = 2;
  } else if(i == 2){
    image1();
    i = 0;} 
})
arrowLeft.addEventListener('click', () => {
  if (i == 0){
    image3();
    i = 2;
  } else if(i == 2){
    image2();
    i = 1;
  } else if(i == 1){
    image1();
    i = 0;
  } 
}
)

function image1() {
  block.innerHTML = `<img src="/image/${image[0]}.jpg">`;
  link1.style.color = '#E3B873';
  link1.style.textDecoration = 'underline';
  link2.style.color = 'rgba(255, 255, 255, 0.3)';
  link2.style.textDecoration = 'none';
  link3.style.color = 'rgba(255, 255, 255, 0.3)';
  link3.style.textDecoration = 'none';
  arrow1.style.backgroundColor = 'white';
  arrow2.style.backgroundColor = 'grey';
  arrow3.style.backgroundColor = 'grey';
}
function image2() {  
  block.innerHTML = `<img src="/image/${image[1]}.jpg">`;
  link2.style.color = '#E3B873';
  link2.style.textDecoration = 'underline';
  link1.style.color = 'rgba(255, 255, 255, 0.3)';
  link1.style.textDecoration = 'none';
  link3.style.color = 'rgba(255, 255, 255, 0.3)';
  link3.style.textDecoration = 'none';
  arrow1.style.backgroundColor = 'grey';
  arrow2.style.backgroundColor = 'white';
  arrow3.style.backgroundColor = 'grey';
}
function image3() {
  block.innerHTML = `<img src="/image/${image[2]}.jpg">`;
  link3.style.color = '#E3B873';
  link3.style.textDecoration = 'underline';
  link2.style.color = 'rgba(255, 255, 255, 0.3)';
  link2.style.textDecoration = 'none';
  link1.style.color = 'rgba(255, 255, 255, 0.3)';
  link1.style.textDecoration = 'none';
  arrow1.style.backgroundColor = 'grey';
  arrow2.style.backgroundColor = 'grey';
  arrow3.style.backgroundColor = 'white';
}

link1.addEventListener ('click', () => {
  image1();
})
link2.addEventListener ('click', () => {
  image2();
})
link3.addEventListener ('click', () => {
  image3();
})

arrow1.addEventListener ('click', () => {
  image1();
})
arrow2.addEventListener ('click', () => {
  image2();
})
arrow3.addEventListener ('click', () => {
  image3();
})