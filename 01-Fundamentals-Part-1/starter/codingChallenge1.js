/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: 
BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

console.log('\n***** Coding Challenge #1 *****');
/* Solution 1
let markWeight=78;
let markHeight=1.69;
let johnWeight=92;
let johnHeight=1.95;

let markHasHigherBMI = (markWeight / (markHeight ** 2)) > (johnWeight / (johnHeight ** 2));
console.log('Test Data 1: ' +markHasHigherBMI);

markWeight=95;
markHeight=1.88;
johnWeight=85;
johnHeight=1.76;

markHasHigherBMI = (markWeight / (markHeight ** 2)) > (johnWeight / (johnHeight ** 2));
console.log('Test Data 2: ' +markHasHigherBMI);

*/

// Solution 2 - Using function
isBMIHigher(78, 1.69, 92, 1.95, 1);
isBMIHigher(95, 1.88, 85, 1.76, 2);

function isBMIHigher(markWeight, markHeight, johnWeight, johnHeight, testCaseNumber) {
    const markHasHigherBMI = (markWeight / (markHeight ** 2)) > (johnWeight / (johnHeight ** 2));
    console.log('Test Data #' +testCaseNumber +': ' +markHasHigherBMI);
}
