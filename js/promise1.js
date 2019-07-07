let drink = 0;

function shoot(arrow) {
    console.log('vistrel..');
    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            Math.random() > .5 ? resolve ({}) : reject('ne popal');
        }, 3000);
    });

    return promise;

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

shoot({})
        .then(mark => console.log('popal, krasava'))
        .then(win)
        .catch(loose)