const myArr =[1,2,33,4,5,6,78]
// const hero =["shaktiman","ironman",'8']


// const myArr2 =new Array(1,2,3,4,5)
// console.log(myArr.length);
// console.log(myArr[0]);


//array method
// myArr.push(9)
// myArr.push(7)
// // myArr.pop()
// myArr.unshift(0)
// myArr.shift()


// console.log(myArr.includes(9))
// console.log(myArr.indexOf(4))
// const newArr =myArr.join()
// console.log(myArr);
// console.log(newArr);

// console.log("A",myArr)

// // const myn1 =myArr.slice(1,3)
// console.log(myn1);
// console.log("B",myArr);

// const myn2 =myArr.splice(1,3)
// console.log("c",myArr);
// console.log(myn2);


// console.log(myArr)


const marvel_heros = ["thor","ironman","spiderman"]
const dc = ["superman","flash","batman"]

// marvel_heros.push(dc)
// console.log(marvel_heros)
// const all =marvel_heros.concat(dc)
// console.log(all);
const all_new_heros =[...marvel_heros,...dc]
console.log(all_new_heros)

const another =[1,2,3,4,5,[4,5,6],4,[,7,8,9,[5,6]]]
const real =another.flat(Infinity)
console.log(real);
console.log(Array.isArray("gaurav"))
console.log(Array.from("gaurav"))