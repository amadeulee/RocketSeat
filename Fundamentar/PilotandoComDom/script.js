// const header = document.querySelector('header');

// header.setAttribute('id', 'header');

// const headerID = document.querySelector('#header');

// console.log(headerID.getAttribute('class'));

// header.removeAttribute('id');
// header.removeAttribute('class');

// const element = document.querySelector('body');
// element.style.backgroundColor = '#555';

// const div = document.createElement('div');
// div.innerText = 'ola mundo';
// const body = document.querySelector('body');
// body.append(div);

function printf() {
  console.log('Hello world');
}
document.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    console.log(e);
    printf();
  }
});

// const input = document.querySelector('input');
// input.onkeydown = e => {
//   console.log('Rodei');
// };
