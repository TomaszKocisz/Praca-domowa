// 1) Create an iffe that returns an object with fields: function setValue(), function showValue() and function reverseValue(). 
// Calling functions either logs the value or reverse it in an object. 
// If value was not provided yet or is empty showValue function is to return information about that. 
// Value can be type string or number. reverseValue():  If number do (*(-1)), if string reverse it.  Closure pattern.
// let firstTask = (function() {
//   let x;

// return {
//         setValue: function(newVal) {
//           if (typeof newVal == "number" || typeof newVal == "string") {
//             x = newVal;
//           }; 
//           return x;
//         },
//         showValue: function() {
//           if (x == null || x == undefined) {
//             console.log("value is not provided yet or is empty");
//             return undefined;
//           }
    
//           return x;
//         },
//         reverseValue: function() {
//           switch (typeof x) {
//             case "number":
//               x *= -1;
//               break;
//             case "string":
//               x = x.split("").reverse().join("");
//               break;
//             default:
//               console.log("x type should be number or string");
//           }
    
//           return x;
//         }
//       };
//     })();

// console.log(firstTask.setValue("start"));    
// console.log(firstTask.showValue())
// console.log(firstTask.reverseValue());

// 2) Create four function definitions. One for every basic math operations and taking two input parameters. 
// Create one more function. This function is to return calculation object. This object is to have parameters object
//  field that holds two operation parameters inside (x and y) and a function field that points to a function with 
// math operation (defined at the beginning). A function setOperation() that sets the field from previous sentence and a 
// calculate() function that makes calculation and returns its value. 

// let calculationObject = {
//     x: undefined,
//     y: undefined,
//     mathOperation: function(){
//         return operationField(this.x, this.y);
//     }
// }

// const add = (a,b) => { return a + b };
// const sub = (a,b) => { return a - b };
// const mult = (a,b) => { return a * b };
// const div = (a,b) => { return a / b };

// let operationField;

// const setOperation = (operator) => {
//     switch (operator) {
//         case '+':
//             operationField = add;
//             break;
//         case '-':
//             operationField = sub;
//             break;
//         case '*':
//             operationField = mult;
//             break;
//         case '/':
//             operationField = div;
//             break;
//         default:
//             console.log('Operator is not valid. Choose "+", "-", "*" or "/" to calculate value.');
//             break;            
//     }
// }



// let myValue1 = { x: 15, y: 30 }
// let myValue2 = { x: 21, y: 74 }
// setOperation("+");
// console.log(calculationObject.mathOperation.call(myValue1));
// console.log(calculationObject.mathOperation.call(myValue2))
;
// 3) Create an array (by hand) of objects and call sum() function in context of each one of them. 
// Sum function is to come from this object  BaseObject = { X,y, sum: function (){ return this.x+this.y}} 

// Example array: [{x:2,y:3},{x:-1,x:6,{x:0,x:8},…..]
// let myArray = [
//     { x: 2, y: 3 },
//     { x: -1, y: 6 },
//     { x: 0, y: 8 },
//     { x: 2, y: -10 }
//   ];
  

// let baseObject = {
//   X: 0,
//   y: 0,
//   sum: function() {
//     return this.x + this.y;
//   }
// };


// for (let i = 0; i < myArray.length; i++) {
//   let sumFunction = baseObject.sum.bind(myArray[i]);
//   console.log(sumFunction());
// }

// 4) Given an array of objects, for each object call operation() function in context of next object. 
// If object is last, got back to start of the array for operation function. In loop;

// const myArray = [
//     {
//         x: 1,
//         y: 'object one value',
//         operation() {
//             return 'object one prafix: ' + this.x + ", " + this.y
//         }
//     },
//     {
//         x: 2,
//         y: 'object two value',
//         operation() {
//             return 'object two prafix: ' + this.x + ", " + this.y
//         }
//     },
//     {
//         x: 3,
//         y: 'object three value',
//         operation() {
//             return 'object three prafix: ' + this.x + ", " + this.y
//         }
//     },
// ]

// for (let i = 0; i < myArray.length; i++) {
//     if (i < myArray.length-1) {
//         console.log(myArray[i].operation.call(myArray[i + 1]));
//     } else {
//         console.log(myArray[i].operation.call(myArray[0]));
//     }
// }

// 5) Scale riddle. With 8 balls  EXAM [1,1,1,1,2,1,1,1]. One of the items will be change to two. 
// Indexes are t be chosen at random. Use compressions only two times. 
 
