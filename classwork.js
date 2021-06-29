"use strict"
// let run=function (a,b){
//     console.log(a*b);
// };

// let sum=function (a,b){
//     console.log(a+b);
// };

// let divide=function (a,b){
//     console.log(a/b);
// };

// let difference=function (a,b){
//     console.log(a-b);
// };

// sum(13,13);
// divide(13,13);
// let kele=true;
// if('kele'){
//     console.log('true')
// }
// mydata= 'manchester united','manchester city','chelsea';
// let anarray=mydata.split(',');
// anarray.length;
// else('kele'){
//     console.log('no')
// // }
// let som=['son','son']

// som.push('non');
// som.pop(2);
// let click=+1;
// let sum=function (a,1){
//     console.log(a+1);
// };

// let x=false;
// // const y=7;
// // const z=5;
// if(x==='1') {
//     console.log('y is greater than x','less than or equal to z');
// }
// else{
//     console.log('not what we want');
// }
    // for(let i=0; i>=0; i++){
    // console.log(i);
    // }

    // const man='mortal';
    // const socrate= man;
    // console.log(socrate)
    // const not='is not a mortal'
    // // console.log(`'socrate is' ${socrate}`)
    // if(socrate===man){
    //     console.log(`'therefore socrate is a ${man}'`)
    // }
    // else{
    //     console.log(`'therefore socrate ${not}'`)
    // // }    
    // let man='socrate';
    // let mortal=['socrate','ala','eke'];
    // for(let i=0; i<mortal.length; i++){
    //     if(mortal[i]==='socrate'){
    //         console.log('socrate is a mortal');
    //     }
    // }
    // let sum = function(){
    //     let x=1;
    //     let y=2;
    //     return x+y;
    // }
    // console.log(sum);
    // console.log(sum());
    // function sum(){
    //     let x=1;
    //     let y=2;
    //     return x+y;
    // }
    // let kel =sum();
    // console.log(kel)
    // (function(){
    //     let x = 1;
    //     let y = 2;
    //     console.log(x+y);
    // })();
        

//  function sumTwoNumbers(num1,num2){
//      return num1 + num2;
//  }

//  function multiplyTwoNum(num1,num2){
//     return num1 * num2; 
// }

// function divideTwoNum(num1,num2){
//     return num1 / num2; 
// }

// function subtractTwoNum(num1,num2){
//     return num1 - num2; 
// }

// console.log(sumTwoNumbers(3,4));
// console.log(multiplyTwoNum(3,4));
// console.log(divideTwoNum(3,4));
// console.log(subtractTwoNum(3,4));

// function a(x1,x2,x3,x4){
//     return (x1*x4)-(x2*x3);
// }
// console.log(a(2,2,2,2));
// let a=[1,2,3,4];
// let b=[1,2,3,4];
// let ab=[];
// function all1(a,b){
//     let mat1 = (a[0]*b[0])+(a[1]*b[2]);
//     let mat2 = (a[0]*b[1])+(a[1]*b[3]);
//     let mat3 = (a[2]*b[0])+(a[3]*b[2]);
//     let mat4 = (a[2]*b[1])+(a[3]*b[3]);
//     ab.push(mat1,mat2,mat3,mat4)
//     return ab 
//     }
//     console.log(all1([1,2,3,4],[1,2,3,4]));

// function all2 (){v
   
// }
// ab.push(all2())


// function all3 (){
  
// }
// ab.push (all3())

// function all4 (){
    
// }
// ab.push (all4())


// function determinant(ab){
//     return (all1()*all4())-(all2()*all3())
// }
// console.log(determinant());

// return (a[0]*b[1]+a[1]*b[3])

// return a[2]*b[0]+a[3]+b[2] 

// return a[2]*b[1]+a[3]*b[3] 

// addition calculator classwork
let button=document.getElementById('calc');
let add=document.getElementById('add');
let multiply=document.getElementById('multiply');
let divide=document.getElementById('divide');
let subtract=document.getElementById('subtract');
let a = document.getElementById('input1');
let b = document.getElementById('input2');
// let all=[add,multiply,divide,subtract];
// for(let i=0; i<all.length; i++){
 
function sum(){
    let  p= +a.value , q = +b.value;
    document.getElementById('ans').innerHTML=p+q;
}

function product(){
    let p = +a.value , q =+b.value;
    document.getElementById('ans').innerHTML=p*q;
}

function di(){
    let p = +a.value , q = +b.value;
    document.getElementById('ans').innerHTML=p/q;
}

function difference(){
    let p = +a.value , q = +b.value;
    document.getElementById('ans').innerHTML=p-q;
}

multiply.addEventListener('click',product);

divide.addEventListener('click',di);

subtract.addEventListener('click',difference);

add.addEventListener('click',sum);


// let a = 5;
// let b= 7;
// function add(){
//    let a=12;
//    let b=17;
//     return a+b
// }
// console.log (a);
// console.log(add());
// console.log(a);
