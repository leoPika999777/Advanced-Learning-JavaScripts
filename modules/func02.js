export const f1 = (a) => a * a;

export const n = 12;

console.log({n}); // 會執行一次

export default class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getInfo() {
    return `${this.name}: ${this.age}`;
  }
  toString() {
    return JSON.stringify(this);
  }
}
