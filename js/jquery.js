$(document).ready(function() {
    $('.list-item:first').hover(function() {
        $(this).toggleClass('active');
    });

    $('.list-item:eq(2)').on('click', function() {
        $('.image:even').fadeToggle('slow');
    });

    $('.list-item:eq(4)').on('click', function() {
        $('.image:odd').animate(
            {
                oppacity: 'toggle',
                height: 'toggle'
            }, 3000
        );
    });
});



// document.querySelectorAll('.list-item').forEach();
// .classList
// .addEventListener
// $.ajax - fetch
// Animations
