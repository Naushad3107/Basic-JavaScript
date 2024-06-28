const name = "Naushad";
const age = "23";

console.log(`my name is ${name} and age is ${age}`);

const alter = new String("Naushad");

const newstring = alter.substring(0,4);
console.log(newstring);

const url = "https:/naushad.com/my%20name";
console.log(url.replace("%20" , "-"));

const nu = 123.456;
console.log(nu.toPrecision(4));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));