const mynum=[1,2,3]
// const mytotal=mynum.reduce(function(acc,curr){
//     console.log(`acc:${acc} and curr:${curr}`);
//     return acc+curr
// },0)
const mytotal=mynum.reduce((acc,curr)=>acc+curr,0)
console.log(mytotal)