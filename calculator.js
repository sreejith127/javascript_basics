// function subtraction(num1,num2){
//     let result=num1-num2;
//     return (result)
// }

//defenition
function division(num1,num2){
    let answer=num1/num2;
    return(answer)
}

//call
let result = division(100,12)
console.log(result);

console.log(division(100,12))


// function exponentiation(num1,num2){
//     let output=num1**num2;
//     return(output)

// }
// console.log(200**32);

// function modulus(num1,num2){
//     let total=num1%num2;
//     return(total)
// }
// console.log(200%12);


// function increment(num1,num2){
//     let amount=num1+num2;
//     return(amount)
// }
// console.log(500200);

function calculator(num1,num2){
    let sum=num1+num2;
    let differance=num1-num2;
    let multiple=num1*num2;
    let division=num1/num2;
    console.log("sum",sum);
    console.log("differance",differance);
    console.log("multiple",multiple);
    console.log("division",division);
    return;
}

calculator(100,200)
calculator(300,200)
calculator(150,250)