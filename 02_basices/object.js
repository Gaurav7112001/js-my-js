//singleton


//object literals

//Object.create

const mysym =Symbol("key")


const jsUser ={
    name: "gaurav",
    "full name" :"gaurav kumar singh",
   [ mysym]:"mykey1",
    age: 13,
    location: "patna",
    email: "golugauravkumarsingh@gmail.com",
    isloggeIn: false,
    lastlodinday : ["monday","saturday"]

}
// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(typeof jsUser[mysym])
// console.log(jsUser["full name"])
// Object.freeze(jsUser)


jsUser.greeting =function(){
    console.log("hello js user");
}
jsUser.greeting2 =function(){
    console.log(`hello js user,${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());
 