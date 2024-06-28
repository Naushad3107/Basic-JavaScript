const mydate = new Date();
console.log(mydate);
console.log(mydate.toLocaleString());

console.log(mydate.toString());

console.log(mydate.toDateString());


// ==================timestamp=====================

const timestamp = Date.now();
console.log(timestamp); // raw timestamp data
console.log(mydate.getTime());

console.log(Math.floor(timestamp/1000));