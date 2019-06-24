const colorBtn = document.querySelector('.colorBtn');
const bodyBg = document.querySelector('body');

const colors = ['yellow', 'red', 'purple', 'green', 'blue', '#3b5998']

colorBtn.addEventListener('click', changeColor);

function changeColor(){
  let random = Math.floor(Math.random() * colors.length)
  bodyBg.style.backgroundColor = colors[random];
}
