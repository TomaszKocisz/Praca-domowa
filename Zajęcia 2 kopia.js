// ARRAY: [1,6,23,8,4,8,3,7]

// 1. Create a function that returns the sum of all elements
//     passed in array as parameter. Function (array)=>number
// let arr = [1, 6, 23, 8, 4, 8, 3, 7];

// const sum = function (array) {
//     let newSum = 0;
//     array.forEach(element => {
//         newSum += element;
//     });
//     console.log(newSum);
// }

// sum(arr);
//2. Create a function that returns sum of first and last elements
     //of given array.

//     const arr = [1,6,23,8,4,8,3,7];
//    function sum(){
//        return arr[0] + arr[arr.length-1]
//    };
//    console.log(sum());
    

// 3. Create a function that takes a number and return factorial of
//      that number.
// let number = 3;

// function factorial(n) {
//   if (n > 0) {
//     return n * factorial(n - 1);
//   } else {
//     return 1;
//   }
// }

// console.log(factorial(number))

// 4. Create a function that returns given array in reverse order.
//  // no build in functions  
// let items = [1, 6, 23, 8, 4, 8, 3, 7];

// function reverseOrder(items) {
//   let result = [];
//   for (let i = items.length - 1; i >= 0; i--) {
//     result.push(items[i]);
//   }
//   return result;
// }
// console.log(reverseOrder(items));

// 5. Create a function that based on given array returns new array
//      in pattern [a,b,c,d,e,f] -> [a+b, c+d, e+f]  
//        [1,3,4,1,0,3] => [4,5,3] function(array)=>array

// let array = [1, 6, 23, 8, 4, 8, 3, 7];
// let newArray = []

// const addTwo = function (array) {
//     for (let i = 0; i < array.length; i += 2) {
//         newArray.push(array[i] + array[i + 1])
//     }
//     console.log(newArray)
// }
// addTwo(array);

// 6. For time of this example remove last element from the given array.
//      Create a function that based on given array return new array in
//       pattern [a,b,c,d,e] -> [a+b, c+d, e+e]

// let array = [1, 6, 23, 8, 4, 8, 3, 7];
// let lastNumberOfArr = array.pop();

// let newArr = [];

// const sumOfTwoItemsInArray = function (array) {
//     for (let i = 0; i < array.length; i += 2) {
//         if (i < array.length - 1) {
//             newArr.push(array[i] + array[i + 1])
//         } else {
//             newArr.push(array[i] + array[i])
//         }
//     }
//     console.log(newArr)
// }
// sumOfTwoItemsInArray(array);

// 7. Create a function the return one random element from given array.
//      // use random function 

// function randomItem(items)
// {
  
// return items[Math.floor(Math.random()*items.length)];
     
// }

// var items = [1,6,23,8,4,8,3,7];
// console.log(randomItem(items));



// 8. Create a function that takes two parameters: array and number off
//      attempts. Based on number of attempts choose a random number from
//       table that many times and return lowest one.
  
// const arr = [1,6,23,8,4,8,3,7];
// const minRandom = function(obj, times){
//     const newArr = [];
//     for(let i = 0; i<times; i++){
//         newArr.push(obj[Math.floor(Math.random() * obj.length)]);
//     }
//     let min = newArr[0];
//     for(let i=1; i<newArr.length; i++){
//         if(min>newArr[i]){
//             min = newArr[i];
//         }
//     }
//     console.log(newArr);
//     return min;
// }
// console.log(minRandom(arr,3));


// 9. Create a function that takes given array. Then takes a random element,
//      removes it from the array and pushes it to result arrays. 
//      This takes place as long as there are elements in source array. 
// let arr = [1, 6, 23, 8, 4, 8, 3, 7];
// let newArr = [];

// const remRanElem = function (array) {
//     while (arr.length > 0) {
//         let randomIndex = Math.floor(Math.random() * array.length);
//         let spliced = arr.splice(randomIndex, 1);
//         newArr.push(spliced[0]);
//     }
//     console.log(arr);
//     console.log(newArr);
// }

// remRanElem(arr);

// 10.Create a function that on given array will perform operation of 
//     adding or subtracting elements. Operation is to be chosen at random.
//      And return a result.[a,b,c,d] =>(((a+-b)+-c)+-d)
// let arr = [1, 6, 23, 8, 4, 8, 3, 7];
// let operatorsArray = [0,1]

// console.log(arr.reduce(callback));
// function callback(previousValue, currentValue){
//     let operatorSign = operatorsArray[Math.floor(Math.random()*operatorsArray.length)];
//     if(operatorSign == 0){
//         return previousValue+currentValue;
//     }
//     else{
// return previousValue-currentValue;
// }
// }

// 11.Create a function that will return the current day name in Polish. 

// const days = [ "Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];

// function daysInPolish() {

//   return days[new Date().getDay()];
// }
// console.log(daysInPolish());


// 12.Create a function that tells us how many days till Friday 

// let date = new Date();
// let days = date.getDay();
// switch(days){
//     case 0: 
//     console.log("5");
//     break;
//     case 1: 
//     console.log("4");
//     break;
//     case 2: 
//     console.log("3");
//     break;
//     case 3: 
//     console.log("2");
//     break;
//     case 4: 
//     console.log("1");
//     break;
//     case 5: 
//     console.log("0");
//     break;
//     case 6: 
//     console.log("6");
//     break;
// }


// 13.Create a function that take two numbers and return the object 
//     with 4 fields. Result on 4 basic arithmetic operations. 
// let x = 1;
// let y = 2;

// function newObject(x, y) {
//   return { 
//     add: x + y, 
//     sub: x - y, 
//     mul: x * y, 
//     div: x / y };
// }

// console.log(newObject(x, y));