//for of

// const arr =[1,2,3,4,5,6,7,8,9]
// for (const num of arr) {
//     console.log(num);
    
// }
// const greeting ="Hello world"
// for (const iterator of greeting) {
//     console.log(`each chae is ${iterator}`);
    
// }

// //map
// const map= new Map()
// map.set('IN',"india")
// map.set('USA',"united stare of ")
// console.log(map);

// for (const[ key,value] of map) {
//     console.log(key,':-',value);
// }

// const myObject={
//     js:'javascript',
//     cpp:'c++',
//     rb:"rubby",
//     swift:'swift  by apple'
// }
// for (const key in myObject) {
//    console.log(`${key}shortcut is for ${myObject[key]}`);
// }

// const progamming =["js",'rb','j','o']

// for (const key in progamming) {
//    console.log(progamming[key]);
// }


const coding=["js","c++","j","k"]

// coding.forEach(function(item){
//     console.log(item);
// })

// coding.forEach((item)=>{
//     console.log(item);
// })

// function printme(item){
//     console.log(item);
// }
// // coding.forEach(printme)
// coding.forEach(function(item){
//     console.log(item);
// })
const mycoding =[
    {
        languagename:"javascript",
        languagefilename:'js'
    },
    {
        languagename:"cpp",
        languagefilename:'c++'
    },
    {
        languagename:"python",
        languagefilename:'py'
    }
]
mycoding.forEach((item)=>{
    console.log(item.languagename);
})