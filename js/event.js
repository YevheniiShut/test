let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');

// btn[0].onclick = function() {
//     alert('yo motherfucker');
// };

// btn[0].onclick = function() {
//     alert('yo motherfucker1');
// };

btn[0].addEventListener('click', function(event) {
    // console.log(e);
    // let target = e.target;
    // target.style.display = 'none';
    console.log('event: ' + event.type + 'on element: ' + event.target);
});

// btn[0].addEventListener('mouseenter', function() {
//     alert('dont mouse me mothefucker');
// });

wrap.addEventListener('click', function() {
    console.log('event: ' + event.type + 'on element: ' + event.target);
});

link.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('event: ' + event.type + 'on element: ' + event.target);
});

btn.forEach(function(item) {
    item.addEventListener('mouseleave', function() {
        console.log("bye");
    });
});