// const headingele = document.getElementById("heading");
// console.log(headingele);
// headingele.innerHTML = "Kavinkumar";
// headingele.style.color = "brown";

// const btnele = document.getElementById("btn");

// btnele.style.backgroundColor = "blue";
// btnele.style.color = "white";

// const containerele = document.getElementsByClassName('container');
// console.log(containerele[0]);

// const event = document.getElementById("btn")
// event.addEventListener('click' ,() => {
//     headingele.innerHTML = "Button Clicked Heading Changed !";
// })

// const inputEl = document.getElementById("name");
// const submit = document.getElementById("submitBtn");
// const errorEl = document.getElementById("error");
// const passwordEl = document.getElementById("password");
// const passwordErrorEl = document.getElementById("password-error");

// submit.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log(inputEl.value);

//     if (inputEl.value.length < 3) {
//         errorEl.innerHTML = "Name must have 3 letters";
//     } else {
//         errorEl.innerHTML = "";
//     }
// });

// passwordEl.addEventListener("input", () => {
//     if (passwordEl.value == inputEl.value) {
//         passwordErrorEl.innerHTML = "Password must be at least 6 characters";
//     } else {
//         passwordErrorEl.innerHTML = "";
//     }
// });

const arr1=[1,2,3,4,5];
const arr2 = [...arr1];

arr1.push(6);

console.log(arr1);
console.log(arr2);

/**Object */

const obj = {
    a : 10,
    b : 20,
    c : 30
}
const obj2 = {...obj};
obj.d=40;
console.log(obj);
console.log(obj2);