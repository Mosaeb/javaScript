
// //Q1 solve............
// let a=`mosaeb`;
// let b=10
// console.log(a+b)

// //Q2 solve...........
// console.log(typeof (a+b))

const prompt=require("prompt-sync")({sigint:true});

// let age = prompt("Enter your age:")
// switch (age) {
//     case `age<0`:
//         console.log(`Invallid age`)
//         break;
//     case `age<10`:
//         console.log(`You are a kid`)
//         break;
//     case `age>15`:
//         console.log(`You are not enough age to drive.`)
//         break;
//     case `age>18`:
//         console.log(`Yes you can drive`)
//         break;            

//     default:
//         break;
// }

// let age1= prompt(`what is your age?`)

// if(age1>=10 && age1<=20){
//     console.log(`Yes! person age is lies betwwen 10 and 20 `)
// }
// else{
//     console.log(`No! person age is lies betwwen 10 and 20 `)
// }



// let num= prompt(`enter number`)
// num=Number.parseInt(num)
// if(num%2==0 && num%3==0){
//     console.log(`number is disiable by 2 and 3`)
// }
// else{
//     console.log(`number is not disiable by 2 and 3`)
// }



// let num1= prompt(`enter number`)
// num1=Number.parseInt(num1)
// if(num1%2==0||num1%3==0){
//     console.log(`number is disiable by either 2 and 3`)
// }
// else{
//     console.log(`number is not disiable by either 2 and 3`)
// }


let age2 = prompt(`Enter your age:`)
console.log((age2>18?`you can drive`:`you cannot drive`)) //ternary operator.....

