// contoh
class Person1 {
  constructor() {
    this.name = "Kojek";
    this.age = 300;
  }
}

// jawab contoh
class Person {
  constructor(newName, newAge) {
    this.name = newName;
    this.age = newAge;
  }
}

const p1 = new Person("Jaja", 27);
document.getElementById("demo1").innerHTML = p1.age;
console.log(p1.age);
//result
// 27;

const p2 = new Person("Sule", 21);
document.getElementById("demo2").innerHTML = `Namanya adalah : ${p2.name}`;
document.getElementById("demo3").innerHTML = `Umurnya adalah: ${p2.age} tahun`;
console.log(p2.name);
console.log(p2.age);
//result
// sule;
// 21;
