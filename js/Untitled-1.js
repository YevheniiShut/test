class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = human;
    }
    hello() {
        console.log(`hello ${this.name}`)
    }
    exit() {
        console.log(`пользователь ${this.name} ушёл`)
    }
}
let ivan = new User('Ivan', 25);
let alex = new User('Alex', 20);
console.log(ivan);
console.log(alex);
ivan.hello();
alex.hello();