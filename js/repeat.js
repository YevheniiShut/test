// to string

// 1)
console.log(typeof(String(null)));

// 2)
console.log(typeof("ww" + false));
console.log('https://instagram.com/' + 5);

// to number

// 1)
console.log(typeof(number('5')));
// 2)
console.log(typeof(5 + +'5'));
// 3)
console.log(typeof(parseInt('15px', 10)));

let ans = +prompt("hello?", '');

// 0, '', null, undefined, NaN ------------false vse ostalnoe true v logi4iskom kontekste

let switcher =  null;

// 1)

if (switcher) {
    console.log("world heloo");
}

switcher = 1;

if (switcher) {
    console.log("world heloo");
}

// 2) 
console.log(typeof(Boolean('5')));
// 3)
console.log(typeof(!!'5'));