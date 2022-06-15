// // var res = "hahha";
// //     var obj = {
// //         res : "heiheiehie",
// //         say : function(...msg) {
// //             console.log(this.res, "hahha", ...msg);
// //             console.log(res, "hahha", ...msg);
// //         }
// //     }
// // obj.say(1, 2, [1], "55555")
// var obj1 = {
//     a1 : 10,
//     a2 : 11,
// }

// var obj2 =  new Object();
// obj2.a1 = 10;

// var obj3 = Object.create(obj1);

// class Obj4 {
//     constructor() {
//         this.a1 = 10;
//         this.a2 = 20;
//     }
// }
// var obj4 = new Obj4();

// var obj5 = Object.assign(obj1,{s1 : 10})

// var obj6 = JSON.parse(JSON.stringify(obj1));
// console.log(obj6.s1);
// var mArray = [1,2,3,5,6];
// mArray.push(12);
// mArray.shift();
// mArray.unshift(1);
// let a = mArray.slice(2,5);
// a.splice(0,1);
// let b = mArray.join("- ");
// let c = b.split(" ",2);
// console.log(c);
// const A = 'abc';
// let b = A.split('');
// console.log(b);
// var mArray = [1,2,3,5,6];
// let b = mArray.join("");
// console.log(b);
let text = "abc";
let arr = text.split('');
let lc = 1;
const a = text.split('',lc - 1);
a.push(arr[lc - 1]);
let b = a.join('');
console.log(a);
console.log(b)