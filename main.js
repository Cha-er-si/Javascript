// alert('Hello World!');
// console.log('Hello World!');
// console.error("An Error");
// console.warn('A warning');

/* Variables and How to set them */
// var (not recommended), let, const
// let can reassign values

// let age = 30;
// // const age = 30;
// age = 31;

// console.log(age);

/*
Data Types
String, Numbers, Boolean, null, undefined, Symbol
*/

// const name = "John";
// const age = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof rating);
// console.log(typeof isCool);
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);

/* Concatenation */
// const name = "John";
// const age = 30;

// console.log('My name is ' + name + ' and I am ' + age);

/* Template String */
// console.log(`My name is ${name} and I am ${age}`);
// const hello = `My name is ${name} and I am ${age}`;
// console.log(hello);

/* String properties and methods */

// const s = 'Hello World!';

// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(0, 5));
// console.log(s.substring(0, 5).toUpperCase());
// console.log(s.split(''));

// const t = 'technology, computers, it, code';
// console.log(t.split(', '));

/* 
Arrays
- variables that hold multiple values
*/

// const numbers = new Array(1,2,3,4,5);
// console.log(numbers);

// const fruits = ['apples', 'oranges', 'pears'];

// fruits[3] = 'grapes';

// console.log(fruits);
// console.log(fruits[1]);

// fruits.push('mangoes');
// fruits.unshift('strawberries');
// fruits.pop();
// console.log(fruits);
// console.log(Array.isArray(fruits));
// console.log(fruits.indexOf('oranges'));
// const name:string;

/* Objects */
// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sport'],
//     address: {
//         street: '50 main st',
//         city: 'Boston',
//         state: 'MA'
//     }
// }
// console.log(person);
// console.log(person.firstName);
// console.log(person.firstName, person.lastName);
// console.log(person.hobbies[1]);
// console.log(person.address.city);
// const { firstName, lastName, address: { city } } = person;

// console.log(firstName);
// console.log(city);

// person.email = 'john@gmail.com';
// console.log(person);

// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with the boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Appointment at dentist',
//         isCompleted: false
//     }
// ];

// console.log(todos);
// console.log(todos[1].text);

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

/* Loops */
// For Loop
// for(let i = 0; i <= 10; i++){
//     console.log(`For Loop Number: ${i}`);
// }

// While Loop
// let i = 0;
// while(i < 10){
//     console.log(`While Loop Number: ${i}`);
//     i++;
// }

// Loop through an array
// for(let i = 0; i <= todos.length; i++){
//     console.log(todos[i].text);
// }

// for(let todo of todos){
//     console.log(todo.text);
// }

// forEach
// todos.forEach(function(todo) {
//     console.log(todo.text);
// });

// map
// const todoText = todos.map(function(todo) {
//     return todo.text;
// });
// console.log(todoText);

// filter
// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// });
// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// }).map(function(todo) {
//     return todo.text;
// });
// console.log(todoCompleted);

/* Conditional Statements */
// if else
// const x = 20;
// const y = 10;

// if(x > 5 && y > 10) {
//     console.log('x greater than 5 or y is greater than 10');
// }
// else if(x > 10){
//     console.log('x is greater than 10');
// }
// else {
//     console.log('x is less than 10');
// }
// Iternary Operator
// const x = 11;
// const color = x > 10 ? 'red' : 'blue';
// console.log(color);

// Switch
// const x = 9;
// const color = x > 10 ? 'red' : 'blue';
// const color = 'yellow';
// switch(color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is not red or blue');
//         break;
// }

/* Functions */
// function addNums(num1 = 1, num2 = 1){
//     return num1 + num2;
// }

// console.log(addNums(5 ,5));

// const addNums = (num1 = 1, num2 = 1) => {
//     return num1 + num2;
// }
// console.log(addNums(5 ,5));

// const addNums = (num1 = 1, num2 = 1) => console.log(num1 + num2);

// addNums(5 ,5);

// const addNums = (num1 = 1, num2 = 1) => num1 + num2;
// console.log(addNums());

/* Constructer Function */
// Function
// function Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     // this.dob = dob;
//     this.dob = new Date(dob);
// }

// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }
// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }

// Class
// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }

//     getBirthYear() {
//         return this.dob.getFullYear();
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// Instantiate an object
// const person1 = new Person('John', 'Doe', '4-3-1980');
// const person2 = new Person('Mary', 'Smith', '3-5-1990');
// console.log(person1);
// console.log(person2);
// console.log(person2.dob.getFullYear());
// console.log(person1.getBirthYear());
// console.log(person1.getFullName());

/* DOM */

// Selectors
// - Single Element
// const form = document.getElementById('my-form');
// console.log(document.querySelector('.container'));
// console.log(form);

// - Multiple Element
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));
// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));

// const ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>HELLO</h1>';

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

// const btn = document.querySelector('.btn');
// btn.addEventListener('mouseout', (e) => {
//     e.preventDefault();
//     // console.log(e.target.className);
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>HELLO</h1>';
// });

/* Form */

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    }
    else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        // Clear the fields
        nameInput.value = '';
        emailInput.value = '';
    }

    console.log(nameInput.value);
}