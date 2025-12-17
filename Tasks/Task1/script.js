
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