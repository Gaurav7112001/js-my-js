// const tinderUser =new Object()//singlton object
const tinderUser={}

tinderUser.id ="abc"
tinderUser.name ="gaurav"
tinderUser.isLoggrdIn =false
// console.log(tinderUser);

const regularUser ={
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname:"gaurav",
            lastname:"kumar"
        }

    }


}
console.log(regularUser.fullname);



const obj1 ={
    1:"a",2:"b"
}
const obj2 ={
    3:"a",4:"b"
}
// const obj3 = {
//     obj1,obj2
// }
// const obj3 =Object.assign({},obj1,obj2)
const obj3 ={...obj1,...obj2}
// console.log(obj3);

const users =[
    {
        id: 1,
        email:"@mail.com "
    }
]
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));