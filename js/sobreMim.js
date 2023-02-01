document.addEventListener('DOMContentLoaded', function () {
    let stream = document.querySelector('.gallery__stream');
    let items = document.querySelectorAll('.gallery__item');
    let prev = document.querySelector('.gallery__prev');
    let next = document.querySelector('.gallery__next');


    prev.addEventListener('click', function () {
        stream.insertBefore(items[items.length - 1], items[0]);
        items = document.querySelectorAll('.gallery__item');
    });

    next.addEventListener('click', function () {
        stream.appendChild(items[0]);
        items = document.querySelectorAll('.gallery__item');
    });
});
const linguagens = ['javascript', 'html', 'css'];
const total = linguagens.push('sql', 'phton');
console.log(linguagens);
console.log(total);