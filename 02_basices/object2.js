function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return

    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("gaurav"))
// console.log(loginUserMessage())
function calculateCartPrice(val1,val2,...num1){
    return num1

}
console.log(calculateCartPrice(200,400,600))
const user={
    username: "gaurav",
    prices: 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price ${anyobject.prices}`);

}
console.log(handleObject(user))
handleObject({
    username:"gaurav",
    price:199
})
const myNewArray =[200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,300,400,500,600]));
