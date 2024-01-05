// if (15<18){
//     console.log("good day");
// }else{
//     console.log("good evening");
// }

let mark = 95;

if (mark >= 90) {
  console.log("A");
} else if (mark >= 80 && mark < 90) {
  console.log("B")
}else if (mark>=70 && mark <80 ){
console.log("C");
}else if(mark>=60 && mark <70){
    console.log("D");
}else{
    console.log("faile");
}

let day = new Date().getDay()


switch (day){
    case 0:
        console.log("sunday");
        break;
     case 1:
        console.log("monday");
        break;
     case 2:
        console.log("tuesday");
        break;
     case 3:
        console.log("wendsday");
        break;
     case 4:
        console.log("thursday");
        break;
     case 5:
        console.log("friday");
        break;
     case 6:
        console.log("saturday");                  
}
