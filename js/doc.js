let box = document.querySelector('.box'),
    btn = document.querySelector('button');

let width = box.scrollWidth,
    height = box.scrollHeight;

console.log(width);
console.log(height);
console.log(box.getBoundingClientRect());

console.log(document.documentElement.clientWidth);

btn.addEventListener('click', function() {
    // box.style.height = box.scrollHeight + 'px';
    box.scrollTop = 0;
});

scrollBy(0, 200);
scrollTo(0, 200);