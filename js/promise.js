let drink = 0;

function shoot(arrow, headshot, fail) {
    console.log('vistrel..');

    setTimeout(function() {
        Math.random() > .5 ? headshot ({}) : fail('ne popal');
    }, 3000)
};

function win() {
    console.log('you won');
    (drink ==1) ? buyBeer() : giveMoney();
}

function buyBeer() {
    console.log('vam pivas');
}

function giveMoney() {
    console.log('tebe zaplatili');
}

function loose() {
    console.log('you lost');
}

shoot({},
        function(mark) {
            console.log('popal, krasava');
            win(mark, buyBeer, giveMoney);
        },
        function(miss) {
            console.error(miss);
            loose();
        }
    )