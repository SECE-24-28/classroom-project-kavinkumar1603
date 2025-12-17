
/**Named Funtion */
function add(a,b)
{
    return a+b;
}
console.log(add(5,10));

/**Unnamed Funtion */
var add = function(a,b)
{
    return a+b;
}
console.log(add(15,25));

/**Arrow Function ES6 : ECMA script 6 */

var sub = (a,b) => { /**var sub = (a,b) => a-b */ /**javascript will implicitly take the curly braces  */
    return a-b;
}
console.log(sub(59,12));

/**If we have only one parameter*/
var add = a => a+30;

console.log(add(7));


for(let i=1;i<=10;i++)
{
    if(i%2==0)
        console.log(i);
}

let j=1;
while(j<=20)
{
    console.log(j);
    j+=2;
}

var arr=[1,2,"kavin",true,5.6,"s"]
console.log("Length of the array :" , arr.length);

for(let i=0;i<arr.length;i++)
{
    console.log("Value at index ",i , "is ", arr[i]);
}
console.log(arr);

console.log("After Push Operation");
arr.push("mern")
console.log(arr);

console.log("After Pop Operation");
arr.pop();
console.log(arr);

console.log("After Shift Operation")
arr.shift();
console.log(arr);

console.log("After Unshift Operation")
arr.unshift("hello");
console.log(arr);

/**For Each*/
console.log("Using For Each Loop")

arr.forEach((ele) => {
    console.log("For Each Loop  :",ele)
});

/**Funtions */
function func(arg , a , b)
{   
    console.log("Inside func a ",a)
    arg(b)
}
function func1(arg)
{
    console.log("Inside func1 b",arg)
}           
func(func1 , 10 , 20)

function multiply(a)
{
    return function(b)
    {
        return a*b;
    }
}
const multiplyBy5 = multiply(5);
const result = multiplyBy5(10);

console.log(result);; 

const arr1 = [1, 2, 3, 4, 5];
const newArr = []
arr1.forEach((ele) => {
    let res = 2 * ele;
    newArr.push(res);
})
console.log("New Array :" , newArr);

/**Map is used to transform array elements
  map will return a array with equal number of elements in the original array
 */
const res = arr1.map((ele) =>{
    return ele * 2;
})
console.log("Using Map New Array :" , res);

/**Map  */
const re = arr1.filter((ele) => {
    return ele % 2 == 0;
})
console.log("Using Filter New Array :" , re);


const arr2 = [10,'A',true,20,null,'B',undefined,30,'C'];

const num = arr2.filter((ele) =>{
    return ele
    // return true;
})

console.log("Numbers in arr2 :" , num);

const fn= "Kavin kumar";
const ln= "C";

const fullname = `Name of the Student is ${fn} ${ln}`;
console.log(fullname)

console.log("Length : ", fn.length)

console.log("Upper Case :" , fn.toUpperCase())

console.log("Lower Case :" , fn.toLowerCase())

console.log("Substring :" , fn.substring(0,5))

console.log("Replace :" , fn.replace("kumar" , "C"))

/**Count of Words */
var count
const countWords = (fn) =>
{
    return fn.split(' ').length;
}
console.log(countWords("kavin kumar CSE"))


let person = {
    name : "Kavin Kumar",
    age:20,
    class : "CSE"
}

// console.log(person.name)
console.log(person['name'])

/**Object Declaration */

const student = {name:"Kavin", age:20, class:"CSE"};

/**To print all keys of the object */
console.log(Object.values(student))

/**To print the keys with the value */
let marks = [
    {name:"Kavin" , age:20 , grade:9},
    {name:"Arun" , age:21 , grade:8},
    {name:"Bala" , age:19 , grade:7}
]
// for(let key in marks)
// {
//     console.log(`${key} => ${marks[key]}`)
// }
Object.keys(marks).forEach((key)=>{
    console.log (`${marks.name}  is  ${marks.age} years old` )
})

/**To print grade > 8 */

Object.keys(marks).forEach((ele) => {
    return ele.grade > 8 
})
console.log(`student with grade > 8 : ${marks.name}`)

const stud = marks.filter((ele) => {
    return ele.grade > 8
})
console.log(stud)

const res1 = marks.filter((mark) => mark.grade > 8);
console.log(res1)

const name = res1.map((student) => student.age);
console.log(name)
console.log("Students with grade > 8 : " , `${name.join(', ')}` );