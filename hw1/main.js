let var1 = 'hello';
let var2 = 'owu';
let var3 = 'com';
let var4 = 'ua';
let var5 = 1;
let var6 = 10;
let var7 = -999;
let var8 = 123;
let var9 = 3.14;
let var10 = 2.7;
let var11 = 16;
let var12 = true;
let var13 = false;

console.log(var1, var2, var3, var4);
console.log(var5, var6, var7, var8, var9, var10, var11);
console.log(var12, var13);

const firstName = 'Sergii';
const middleName = 'Volodymyrovich';
const lastName = 'Stepanenko';
// let person = firstName + ' ' + middleName + ' ' + lastName;
let person = `${firstName} ${middleName} ${lastName}`;
console.log(person);

let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

let userName = prompt('enter your name:');
let userMiddleName = prompt('enter your middle name:');
let userLastName = prompt('enter your last name:');
console.log(`Wellcome, ${userName} ${userMiddleName} ${userLastName}!`);
