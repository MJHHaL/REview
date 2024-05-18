// Set


// let data = [1, 1, 1, 2, 2, 4];

// console.log(data);

// let myData = new Set(data);

// console.log(myData.size);


// let myObj = {};
// let myMap = new Map();

// console.log(myObj);
// console.log(myMap);

// let myObject = { a: 1, b: 2, c: 3 };

// for (let [key, value] in myObject) {
//     console.log(key, value);
// }

// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];

// console.log(Math.max(...n2) * [...n1, ...n2].length);

// let myData = new Map();

// myData.set('ad', 10);
// myData.set('bd', 30);
// myData.set('cd', 20);

// let ArrayData = Array.from(myData.keys());

// // for (let i = 0; i < ArrayData.length; i++) {
// //    console.log(ArrayData[i]);

// // }


// let [a, b, c] = ArrayData;
// console.log(a);




class A {


    #p;
    constructor(name, age , p) {
        this.name = name;
        this.age = age;
        this.#p = p;
    }
}

class B extends A {

    constructor(name, age , loc) {
        super(name, age );

        this.loc = loc;
        
    }
}

let re = new A("Mohammed", 20);
let red = new B("Ali", 39);

console.log(re.name);
console.log(re.age);
console.log(red.name);
console.log(red.age);