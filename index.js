/*function checkPassword(){
    const inp1 = document.getElementsByClassName("first")
    const inp2 = document.getElementsByClassName("second")
    const result = document.querySelector("#para")

    if(inp1[0].value.length==0){
        result.innerHTML += "input 1 is empty"
    }
    if(inp2[0].value.length==0){
        result.innerHTML += "input 2 is empty"
    }
    if(inp1[0].value !==inp2[0].value){
        result.innerHTML += "password does not match"
    }

    //inp1 [0].value ="Welcome";
}*/
/*var day;
switch(new Date().getDay()){
    case 0 :
        day = "sunday"
        break;
    case 1 :
        day = "monday"
         break; 
    case 2 :
        day = "tuesday"
        break;  
    case 3 :
        day = "wednesday"
        break;   
    case 4 :
        day = "thursday"
        break;  
    case 4 :
        day = "friday"
        break;  
    default:
        day = "saturday"
// }*/

//const output = document.getElementById("day").innerHTML = "today is " + day;

//let number = [1,2,3,4,5];
//let sum = number[0] + number[1] + number[2];
//const output = document.getElementById("day").innerHTML = "It is " + sum;

//let i = 0, sum = 0 
//for(i ; i<5 ; i++) {
//    sum += sum + number[i]
//}
/*while(i<5){
    sum = sum + number[i];

    i++
}
console.log(sum);*/
//console.log('Output')
/*const output = document.getElementById('day')
function sumArray(arr){
    let len = arr.length;
    let i;
    let sum = 0;

    for (i=0; i<len; ){
        sum += arr[i];
        i++;
    }
    return sum;
}
let arg = [10];
output.textContent = `${sumArray(arg)}`;*/

/*function sumNumber (arg){
    let i = 0;
    let sum = 0;
    for(i=0;i<=arg;i++){
        sum+= i;
    }
    return sum;
}
day.textContent = `${sumNumber(10)}`*/

/*function sumNumber (arg1, arg2){
    let i = 0;
    let sum = 0;
    if(arg1<arg2){
        return 0;
    }
    for(i=arg2; i<=arg1; i++)
    if(i%arg2 ==0){
        sum++
    }
    
    return sum;
}
day.textContent = `${sumNumber(20 ,4)}`*/
// let objArray = [
//     {id: 1,name:'john'},
//     {id:2,name:'done'},
//      {id:3,name:'ng'}
//     ]


// let fr =[1,2,3,4,5];
/*let answer = objArray.every(

function checkCondition(a,b){
    
    return (a.id*6) > 16;
})
console.log(answer)*/
//let result = objArray.indexOf({id:1,name:"john"})
//console.log(result)
/*let result = false;
let a =[5]
let b=[5]

if(b==a){
    result=true;
}
console.log(result)*/
// let re =['q','w','w','e']
// let result= re.lastIndexOf('w')
// console.log(result)

// let arr=[1,2]
// let result = arr.reduce(addArrary,0)

// function addArrary(a,b){
//     return a-b
// }
// console.log(result)

// let = arr = [1,2]
// let result = arr.reduce(addArray,0)
// function addArray(a,b){
//     return a-b
// }
// console(result)
// let strArray = ["house","home","hoes","hose","host","hostel"]
// let asd = "Everybody is a scholar in my class when it's raining";
// let result = asd.substr(0,11) 
// let result = asd.substring(0,10)
// let result = asd.repeat(2);
// let result= asd.match(/\w/g)
// let result = strArray.filter(element =>
//     element.toUpperCase().includes("hos".toUpperCase()) )
// let str = "Akin"
// let result = str.toLowerCase().localeCompare("akin")
// let result = strArray[0].includes("ho")
// let str = "akin";
// let str2 = "peace"
// let cc = "ngozi is a boy,Mt is a girl"
// let result= cc.endsWith("boy",14)
// let result = str.concat(str2)
// let result = str.charAt("2");
// console.log(result)