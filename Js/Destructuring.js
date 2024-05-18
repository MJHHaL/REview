//Destructuring




// let names = ["Mohammed", "Ali", "Fahad", "khalid"];

// // let [a, b, c, d] = names;

// [a, b, c, d] = ["lll"];
// console.log(a);

// let user = [{
//     TheName: "Mohammed",
//     age: 34,
//     title: "developer",
//     locations: "Ryiadh",
// }]

// const { TheName:name, title, locations:City } = user[0];

// console.log(name);
// console.log(title);
// console.log(City);




// let data = [
//     {
//         name: 'John Doe',
//         age: 30,
//         addresses: [
//             { street: '123 Main St', city: 'New York', country: 'USA' },
//             { street: '456 Elm St', city: 'Los Angeles', country: 'USA' }
//         ]
//     },
//     {
//         name: 'Jane Smith',
//         age: 25,
//         addresses: [
//             { street: '789 Oak St', city: 'Chicago', country: 'USA' },
//             { street: '101 Pine St', city: 'San Francisco', country: 'USA' }
//         ]
//     }
// ];


// for (let { name, age, addresses } of data) {
//     console.log(`Name: ${name}`);
//     console.log(`Age: ${age}`);
//     for (let { street, city, country } of addresses) {
//         console.log(`Address: ${street}, ${city}, ${country}`);
//     }
//     console.log('-----------------');
// }

// let chosen = 1;
// let myFriend = [
//     { title: "Mohammed", age: 39, available: true, skills: ["Html", "Css"] },
//     { title: "Ali", age: 30, available: false, skills: ["Html", "django"] },
//     { title: "Khalid", age: 24, available: true, skills: ["Html", "Larval"] },
// ];


// let { title, age, available, skills: [, a]} = myFriend[chosen - 1];


// if (available === true) {
//     available = "Available"
//     console.log(title);
//     console.log(age);
//     console.log(available);
//     console.log(a);
// } else {
//     available = "Not Available"
//     console.log(title);
//     console.log(age);
//     console.log(available);
//     console.log(a);

// }