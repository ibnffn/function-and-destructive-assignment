// * Paradigma pemorgraman dimana penulisan program didominasi oleh fungsi-fungsi
// * Semua fungsi-fungsi tersebut akan menerima input berupa argumen dan mengeluarkan
//   output berdasarkan input yang diberikan.
// * Input yang sama akan selalu mengeluarkan output yang sama.
// * Tidak ada side effect, misalnya perubahan nilai dari sebuah global variable.

// contoh bukan functional programming
// const number = [1, 2, 3, 4, 5];
// let totalSum = 0;
// function sum() {
//   for (let i = 0; i < number; i++) {
//     totalSum = totalSum + number[i];
//   }
// }
// sum();
// console.log(totalSum);

// contoh functional programming
// function sums(nums) {
//   const initial = 0;
//   const output = nums.reduce((prev, current) => {
//     console.log(prev);
//     return prev + current;
//   }, initial);
//   return output;
// }
// sums();

// const numbers = [1, 2, 3, 4, 5];
// const totalSums = sums(numbers);
// sums(numbers);

// FILTER (HOF) =
// syntaks =
// Array.filter() = (element,index) =>{/* ... */}

// contoh : 1
const student = [
  {
    name: "jhon",
    age: 15,
  },
  {
    name: "lennon",
    age: 20,
  },
];
const output = student.filter((students) => students.age > 12);
console.log(output);
// 0:{name: 'jhon', age: 15}
// 1:{name: 'lennon', age: 20}
// length: 2

const array1 = [
  {
    name: "ayam",
    jumlah: 20,
  },
  {
    name: "ikan",
    jumlah: 15,
  },
  {
    name: "telur",
    jumlah: 22,
  },
  {
    name: "bebek",
    jumlah: 30,
  },
];
const over17 = array1.filter((a) => a.jumlah > 21);
console.log(over17);
// 0: {name: 'telur', jumlah: 22}
// 1: {name: 'bebek', jumlah: 30}

// Map - Hof
// Syntaks =
// Array.map((elemnt, index) => {
//   /*...*/
// });

// * Mirip dengan filter map juga satu fungsi bawaan dari object Array yang merupakan   higher order function
// * Dapat digunakan untuk mengubah sebuah Array menjadi Array yang lain.
// * Menerima input berubah fungsi,yang:
// 	* Menerima argument berupa elemen dan indeks dari Array.
// 	* Mengembalikan nilai berupa elemen yang akan menjadi Array yang baru.

const students = [
  { name: "John", age: 15 },
  { name: "Ismail", age: 10 },
  { name: "Juan", age: 12 },
  { name: "Anjas", age: 16 },
];
const outputs = students.map(
  (student) => `${student.name} berusia ${student.age}`
);
console.log(outputs);
// result
// [
//    "John berusia 15",
//    "Ismail berusia 10",
//    "Juan berusia 12",
//    "Anjas berusia 16",
//  ];
//  length : 4

// Reduce(Hof)
// Syntaks =
// const fnCallback = (previous, currentValue, currentIndex);
// Array.reduce(fnCallback,initialValue);

const students1 = [
  { name: "John", age: 15 },
  { name: "Ismail", age: 10 },
  { name: "Juan", age: 12 },
  { name: "Anjas", age: 16 },
];
const sumAges = students.reduce((prev, current) => prev + current.age, 0);
const averageAge = sumAges / students.length;
console.log(averageAge);
// result
// 13.25

// Currying - lebih dari satu argumen
// * Teknik untuk mengubah fungsi yang menerima lebih dari satu argumen menjadi beberapa
//  fungsi yang menerima satu argumen f(x,y) menjadi f(x)(y)

const multiply = (a, b) => {
  console.log(a * b);
};
multiply(2, 2);
//result
// 4;

// Currying Multiply
const curriedMultiply = (a) => (b) => {
  console.log(a * b);
};
curriedMultiply(2)(2);
//result
// 4;

// tanpa currying
const generateURL = (protocol, hostname, page) => {
  // return `${protocol} ${hostname} ${page}`;
  console.log(protocol, hostname, page);
};
generateURL("http", "myskill.com", "/login");
generateURL("http", "myskill.com", "/belajar/1");
generateURL("http", "myskill.com", "/belajar/2");
generateURL("http", "myskill.com", "/belajar/3");
// result
// http myskill.com /login
// http myskill.com /belajar/1
// http myskill.com /belajar/2
// http myskill.com /belajar/3

// contoh dengan currying
const generateUrls = (protocols) => (hostnames) => (pagename) =>
  `${protocols}${hostnames}${pagename}`;

const httpMyskill = generateUrls("https://")("Myskill.id");
const loginMyskill = httpMyskill("/login");
const belajarSatu = httpMyskill("/belajar/1");
const belajarDua = httpMyskill("/belajar/3");
const belajarTiga = httpMyskill("belajar/2");
console.log(loginMyskill); // /login akan pindah ke generateUrls diatas maka result nya = https://Myskill.id/login
generateUrls();
// result
// https://Myskill.id/login

// Destructuring Assignment
const hobbies = ["Surfing", "Snorkeling"];
const [first, second, third] = hobbies;
console.log(first);
console.log(second);
console.log(third);
// result
// Surfing
// Snorkeling
// undefined

// Destructuring Assignment Array Default Value
// * Untuk mengindari hasil undefined ketika elemen yang diekstrak tidak ada di dalam array.
const [firsts, seconds = "Snorkeling"] = ["Surfing"];
console.log(firsts);
// result
// Surfing

// Destructuring Assignment Object
// * Tanpa destructuring ketika ingin mengakses properti dari sebuah Object,kita akan   menuliskan kode sebagai berikut:
const car = {
  name: "civic",
  manufacture: "Honda",
  topSpeed: "180kmph",
};
const names = car.name;
const manufactures = car.manufacture;
const topSpeeds = car.topSpeed;
console.log(names, manufactures, topSpeeds);
// result
// civic Honda 180kmph

// * Dibandingkan dengan assignment biasa,penulisan menggunakan destructuring   assignment kode lebih ringkas dan mudah dipahami.
const { name1, manufacture1, topSpeed1 } = {
  name1: "Civic",
  manufacture1: "Honda",
  topSpeed1: "180kmph",
};
console.log(name1, manufacture1, topSpeed1);
//Result
// Civic Honda 180kmph

// Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
}
console.log(Person.age);
// result - kecuali diberikan isi dari tiap variabel
// undefined

// contoh
const person1 = new Person("Budi", 20);
const person2 = new Person("Cici", 24);
console.log(person1);
//result
// Person
// {
// 	name:'Budi',
// 	age: 20
// }
// jika hanya name
// console.log(person1.age);
//result
// 20;

// * Kita juga dapat menambahkan variable pada instansi constructor function dari   luar function tersebut.Seperti contoh dibawah ini:
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person5 = new Person("Budi");
const person6 = new Person("Cici");

person5.age = 300;
console.log(person5.age);
console.log(person6.age);
//300
// undefined

// jika kita ingin mendefine
function Person2() {
  this.names = "permen";
  // this.ages = ages;
}
Person2.prototype.ages = 300;
const person7 = new Person2();
console.log(person7.ages);
// result;
// 300

// tanpa menggunakan this
function Person4() {
  const name12 = "permen";
  const status = "apel";
  return name12, status;
}
const person10 = Person4();
console.log(person10.name1);
// result
// undefined

// ES-6
// const Person = () => {
//   this.names1 = "Kojek";
// };

// const personOne = new Person();
// console.log(personOne.names1);

// const personTwo = Person();
// console.log(personTwo.name)
// TypeError: Cannot read properties of undefined (reading 'name')

// contoh lain ES6
const Fruit = (newFruit) => {
  this.names = "Apel";
  return {
    names: this.names,
  };
};
const nameFruit = Fruit();
console.log(nameFruit.names);
//result
// apel

// lihat person2
const x = new Person2("permen");
console.log(x.names);
//result
// permen;
