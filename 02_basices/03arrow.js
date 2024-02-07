const user={
    username:"gaurav",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username} ,welcome to website`);
        console.log(this);
    }

}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
// console.log(this);


// function cahi(){
//     let username="gaurav"
//     console.log(this);
// }
// cahi()

// const chai =function(){
//     let username ="gaurav"
//     console.log(this.username);

// // }
// const chai =()=>{
//     let username ="gaurav"
//     console.log(this);

// }
// chai()
// const addtwo=(num1,num2)=>{
//     return num1+num2

// }

// const addtwo=(num1,num2)=> num1+num2
const addtwo=(num1,num2)=> (num1+num2)
    
console.log(addtwo(3,4));


const myArray =[2,3,4,5,6,7]

myArray.for each
