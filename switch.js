// // switch (key) {
// //     case value:
        
// //         break;

// //     default:
// //         break;
// // }
// const month =3

// switch (month) {
//     case 1:
//         console.log("january");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("march");
//         break;
//     case 4:
//         console.log("april");
//         break;

//     default:
//         break;
// }
const userEmail ="gaurav@.mail"
if(userEmail){
    console.log("got user email");
}else{
    console.log("don't have user email");
}
const emptyObj ={}

if (Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}

//nullish coalescing operator(??): null undefned
let val1;
// val1 =5??10
// val1 =null??10
// val1 =undefined??15


console.log(val1);

//terniary operator

condition ? true:false