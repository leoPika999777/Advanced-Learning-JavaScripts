// 錯誤寫法 default const不能寫一起
// export default const f1 = (a) => a * a;

//拆開寫 先寫const 再 export default
const f1 = (a) => a * a;
export default f1;

export const f2=(b) => b * b * b;


export class Person {
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
const n=6;
const m=15;
//如果沒有匯出  他是全域變數  但只限定在這個檔案裡面
//在其他模組是看不到的  
//模組與模組之間要看到對方  必須要export 且用大括號包起來
export { n, m };
