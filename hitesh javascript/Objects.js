//singleton

//object literals

const mySym = Symbol("Key1");

const object = {
    name: "Naushad",
    Age: 23,
    [mySym]: "mykey1",
    isLogedIn: false,
    email: "dnaushadquadri@mail.com"
    
}

// console.log(object.name);
// console.log(object["name"]);
console.log(object[mySym]); //only way to access symbol datatype in the object

object.greeting = function(){
    console.log("Hello JS Object");
}

object.greeetingtwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(object.greeetingtwo());

const obj1 = {1:"a" ,2: "b"}
const obj2 = {3:"c" ,4: "d"}

//combining objects

const sumobj = Object.assign({},obj1,obj2);
console.log(sumobj);

const user = [
    {
        id:12,
        mail1:"dnaushadquadri@gmail.com"
    },
    {
        id:13,
        mail2 :"dnaushadquadri@gmail.com"
    },
    {
        id:14,
        mail3:"dnaushadquadri@gmail.com"
    }
]

// how to acces these multi-object along with individual prop such as "id"

console.log(user[1].mail1); 

// accesing all the object key-value whoch is array datatype

console.log(Object.keys(object));

//to check whether the property exist in the object

console.log(object.hasOwnProperty('isLoged'));


//Objects Destructuring

//used to easily get object details

const course = {
    coursename: "random",
    price: "999",
    courseInstructor: "randomitguy" 
}

// course.courseInstructor we can use destructor to use it convienintly

const {courseInstructor} = course
console.log(courseInstructor);