function hello () {
    console.log("hello world!");
}

hello();

function hi() {
    console.log("hello world!");
}

hi();

let arr = [1, 15, 3, 30, 42],
    i = arr.sort(compareNum);

function compareNum(a, b) {
    return a-b;
}

console.log(arr);