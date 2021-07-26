// function
logSeparator('function');

sayHello('Bijan');

function sayHello(name) {
    console.log(`hello, ${name}!`);
}

// var
logSeparator('var');

console.log('country', country);
tryCatch(() => console.log('capital', capital));

var country = 'Iran';

// initialize without declaring
logSeparator('initialize without declaring');

tryCatch(() => console.log('sum:', a + b));

a = 2;
b = 3;

// let & const
logSeparator('let & const');

tryCatch(() => console.log('jack', jack));
tryCatch(() => console.log('kate', kate));

let jack = 'Jack';
const kate = 'Kate';
