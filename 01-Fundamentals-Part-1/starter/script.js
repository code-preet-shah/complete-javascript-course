console.log('\n***** Template Strings/Literals *****');
const firstName = 'Preet';
const age = 26;
const job = 'Developer';

console.log("I'm " +firstName +", a " +age +" years old " +job);
console.log(`I'm ${firstName}, a ${age} years old ${job}`);

console.log('\n***** Type conversion *****');
console.log(Number('1991')+9); //Type conversion
console.log(Number('Preet')); //NaN
console.log(typeof NaN); //NaN is itself of type number. It is just not a valid number

console.log(Number('Preet')+9); //Adding number to NaN (non valid number)

console.log(String(23)); //number to string
console.log(typeof String(23)); //string


console.log('\n***** Type coersion *****');
console.log("'23' + 3: " +('23' + 3));
console.log("'23' - 3: " +('23' - 3));
console.log("'23' * 3: " +('23' * 3));
console.log("'23' / 3: " +('23' / 3));

console.log("'23' * '3': " +('23' * '3'));

console.log(2+3+4+'5');
console.log(`'10'-'4'-'3'-2+'5'=${'10'-'4'-'3'-2+'5'} as ${typeof ('10'-'4'-'3'-2+'5')}`);