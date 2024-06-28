const marvel = ['iroman','hulk','thor'];
const dc = ['superman','flash','shazam'];

// const all_heroes = marvel.concat(dc);
// console.log(all_heroes);

const all_new_heroes = [...dc,...marvel]; // breaking into individual elements
console.log(all_new_heroes);

const arr_depth = [1,2,3,4,[5,6],7,8,[9,0]];
const flat_arr_depth = arr_depth.flat(Infinity); //removes the sub aray and return arr as one

console.log(flat_arr_depth);