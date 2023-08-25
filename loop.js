//problem 1
let marks={
    harry:98,
    sadi:70,
    moeshed:60
}
for(let i=0;i<Object.keys(marks).length;i++){
    console.log(`The marks is `+Object.keys(marks)[i]+' are '+marks[Object.keys(marks)[i]]);
}


//problem 2

for(let key in marks){ //for in ........
    console.log(`The marks is `+key+' are '+marks[key]);
}
const prompt=require("prompt-sync")({sigint:true});

//problem 3

let currectNumber=10
let i=prompt(`Enter your number`)
while (i!=currectNumber) {
    i=prompt(`Enter your number`)
}
console.log(`Congratulation!Your number is currect number.`)

//problem 4

function mean(x,y,z,v,n) {
    let sum=(x+y+z+v+n)
    let m=sum/2
    console.log(`The mean of five number is ${m}.`)
}
mean(1,2,3,4,5);