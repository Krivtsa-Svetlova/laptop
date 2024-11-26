const rectan = document.querySelector('.rectangle');
const img = document.querySelector('.img');
const text = document.querySelector('.text');

rectan.addEventListener('click', () => {
    rectan.classList.add('is--active');
})

img.addEventListener('mouseover', function() {
    img.classList.toggle('is--active');
})

function textClick() {
    text.classList.toggle('is--active');
}

text.addEventListener('click', textClick);