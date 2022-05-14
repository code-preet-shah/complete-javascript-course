console.log('***** Lets learn functions in Javascript! *****');

function f1(a) {
    console.log('1 parameteer');
}

//overwrites the above defination
//function declaration
function f1() {
    if (arguments[0] === undefined)
        console.log('No parameteer');
    else
        console.log('Function read: ' + arguments[0]);
}

//function expression
//In javascript, functions itself are just another values of type function
//f2(1); // Uncaught ReferenceError: can't access lexical declaration 'f2' before initialization - Read on hoisting
const f2 = function () {
    if (arguments[0] === undefined)
        console.log('No parameteer');
    else
        console.log('Function read: ' + arguments[0]);
}

f1(1, 2);
f2(1, 2);
console.log(`typeof f2: ${typeof f2}`); //function


console.log('\n*** Lets learn arrays and objects ***');
console.log('Arrays contain multi-type values, even another array, object or function! Even key value pairs, but you can only retrieve the value. like arr[id);');
const arr = [
    firstName = 'Preet Shah',
    id = 1,
    nickNames = ['P1', 'P2', 'P3'],
    myfunction = function (a) {
        console.log(`Function called. Received value: ${a}`);
    },
    myObj = {
        firstName: 'Preet'
    },
    10
];
console.log(arr);
arr[3](10); //That's how we call the function in an array
arr[myfunction(11)]; //Another way of calling the function in an array.
console.log(`Accessing object arr[4].firstName: ${arr[4].firstName}`);
console.log(`Accessing individual elemment arr[5]: ${arr[5]}`);

console.log('\nObjects contain key-value properties. Values can be of any type, even another object, array or function!');
const obj = {
    firstName: 'Preet Shah',
    id: 1,
    nickNames: ['P1', 'P2', 'P3'],
    another: {
        myAnother: 'Insider',
        myId: 'myId2'
    },
    myfunction: function (a) {
        console.log(`Function called. Received value: ${a} ${this.a} (this refers to global variable and not the function parameter)`);
    },
    a: 12
}
console.log(obj);
console.log(`Accessing object obj.firstName: ${obj.firstName}`);
console.log(`Accessing object obj['firstName']: ${obj['firstName']}`);
obj.myfunction(10); //That's how we call the function in an function
console.log(`${obj['nickNames'][0]} ${obj.nickNames[0]}`);
obj['myfunction'](10);


console.log('\n*** Lets learn for loop! ***');
console.log('Iterating through array arr:');

addiing(arr);

function addiing(a) {
    console.log(a.push(100));
}


for (let i = 0; i < arr.length; i++)
    console.log(`${arr[i]}, is a type of ${typeof arr[i]}`);

let rep = 1;
while (rep < 5) {
    console.log(`running while ${rep}`);
    rep++;
}

