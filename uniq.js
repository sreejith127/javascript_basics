
const num =[10,5,10,2,5];
const a = num.length;
console.log(num.length);
const uniq= [];
const notuniq=[];
for(let i=0; i < a; i++){
if (!uniq.includes(num[i])) {
  uniq.push(num[i]);
}  else{
  notuniq.push(num[i]);
}
}
console.log(uniq);
console.log(notuniq);

