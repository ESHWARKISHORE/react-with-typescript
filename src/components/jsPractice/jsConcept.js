function varFunction() {
    if (true) {
        var count = 10;  //function scope 
        let count2 = 11;  // block scope
        const count3 = 12;
        // count3 = 13;
        console.log(count);
        console.log(count2);
        console.log(count3);
    }
    console.log(count);
    // console.log(count2);
    // console.log(count3);
}
varFunction()

// -------------------------------------------------------------------------------------------------------

let arr = [1, 2, 3, 4, 5];

for (let val of arr) {
    console.log(val);
}

const person = {
    name: 'Eshwar',
    age: 26,
    note: 'Nothing to say'
}

for (let key in person) {
    console.log(person[key]);
}

//---------------------------------------------------------------------------------------------------------

arr.forEach((item) => {
    console.log(item);
})

Object.values(person).forEach((value) => {
    console.log(value);
})
Object.keys(person).forEach((value) => {
    console.log(value);
})

// ----------------------------------------------------------------------------------------------------------
//! Types of function in JS =>  1. Named Function 2. Anonymous Function 3. Function Expression 4. Arrow Function 5. IIFE 6. Callback Function 7. HOC 

//! 1. NAMED FUNCTION:-   This will have a name to the function 
function add(a, b) {
    return a + b;
}
console.log(add(1, 3));

//! 2. ANONYMOUS FUNCTION:-   This wont have any name to the function and its called anonymously 
console.log(function (a, b) {
    return a + b;
}(2, 5))

//! 3. FUNCTION EXPRESSION:-   This function is declared straight to the variable this can be both named as well as anonymous function
const functionExpressionAdd = function (a, b) {
    return a + b;
}
console.log(functionExpressionAdd(5, 6));

//! 4. ARROW FUNCTIONS:-  This compact alternative for the traditional function can we return in one line and don't need to have any return statement
const arrowFunctionAdd = (x, y) => x + y;
console.log(arrowFunctionAdd(7, 8));

//! 5. CALLBACK FUNCTION:-  This is a function that will pass a function as a argument to an other function
function cbAdd(x, y) {
    return x + y;
}
function cbSub(x, y) {
    return x - y;
};

function display(x, y, operation) {
    var result = operation(x, y);
    console.log(result);
}
display(10, 5, cbAdd);
display(10, 5, cbSub);

//! 6.HIGHER ORDER FUNCTION:-  Take one ore more function as a argument (Callback function) Or return a function as a result
function hof(func1) {
    func1()
}
hof(sayHello);
function sayHello() {
    console.log("Hello!")
}
//-------------------------------------------------------------------------------------------------------------
//! Uses of Call Back Function 

//! 1. ITERATION
const itiCBNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function logNumber(itiCBNumber) {
    console.log(itiCBNumber);
}
itiCBNumber.forEach(logNumber);

//! 2. EVENT HANDLING:- 
{/* <button id="myButton">Click Me !</button>*/ }  //? HTML Element for the event trigger 
// const buttonEventHandling = document.getElementById('myButton');

// button.addEventListener('click', function(){
//     alert("I am clicked !");
// })

// ------------------------------------------------------------------------------------------------------------
// ! ASYNCHRONOUS OPERATIONS:- This operation don't block the code and it will execute to the next code.

//! Uses in real time:-    1. setTimeout 2.Promises 3.Loading Data from an API 4. Uploading Files 5. Animations and transitions

console.log('Before setTimeout');

setTimeout(() => {
    console.log('Inside Set Time Out')
}, 2000);

console.log('After Set Time Out');

// Output:-
// ? Before setTimeout
// ? After Set Time Out
// ? Inside Set Time Out

// ---------------------------------------------------------------------------------------------------------------------
// ! PROMISES:- 
// ! 1. It is used to perform async operations
// ! 2. It will definitely return a value in a mere future after the call 
// ! 3. This has three states PENDING, RESOLVED, REJECTED

//! 1. API Calls 2. File Handling 3. Data Fetching 4. Animation effects 5. Event Handling 


const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 10);   //Generate random numbers
        if (randomNumber < 5) {
            resolve(`Success! Random Number:${randomNumber}`);
        }
        else {
            reject(`Error! Random Numbers:${randomNumber}`);
        }
    }, 1000)
})

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })

// Output
// ? Error! Random number: 9
// ? Success! Random number: 4

// ------------------------------------------------------------------------------------------------------------------


