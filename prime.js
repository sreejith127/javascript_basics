function check(num) {
for (let i=2; i<num;i++){
 let reminder =num%i  
 if (num%i===0) {
return false;

 }
}
return true;
}
let num =14;

let result = check(num)
console.log(result);
if (result) {
    console.log("prime");

}
else
    console.log("no funtion");
console.log("prime");




    
       
