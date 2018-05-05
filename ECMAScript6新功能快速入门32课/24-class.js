'use strict';

class Chef {
  constructor(food) {
    this.food = food;
    this.dish = [];
  }

  get menu() {
    return this.dish;
  }

  set menu(dish) {
    this.dish = dish;
  }

  cook() {
    console.log(this.food);
  }

  static cook2(food) {
    console.log(this.food);
  }
}

let wangHao = new Chef('a');
wangHao.cook(); // a

let wangHao2 = new Chef();
console.log(wangHao2.menu = 'b'); // b
console.log(wangHao2.menu = 'c'); // c
console.log(wangHao2.menu); // ['b', 'c']

Chef.cook2('d'); // d


// extends
class Person {
  constructor(name, birthday) {
    this.name = name;
    this.birthday = birthday;
  }

  intro() {
    return `${this.name}, ${this.birthday}`;
  }
}

class Runner extends Person {
  constructor(name, birthday) {
    super(name, birthday);
  }
}

let LiMing = new Runner('LiMing', '1999-02-03');
console.log(LiMing.intro()); // LiMing, 1999-02-03