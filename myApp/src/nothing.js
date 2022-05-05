// function isIsomorphic(s, t) {
//     let n = s.length;
//     let m = t.length;
//     if(n != m){
//         console.log(false);
//     }
//     let arr = new Array(2).fill('').map(() => new Array(n).fill(''));
//     for(let i = 0; i < n; ++i) {
//         let char = s[i];
//         console.log('char = ', char);
//         let char2 = t[i];
//         console.log('char2 = ',char2);
//         if(arr[0].indexOf(char) > -1) {
//             console.log('arr[0] =  ', arr[0]);
//             console.log('arr[1] =  ', arr[1]);
//             if (arr[1][arr[0].indexOf(char)] != char2) console.log(false);
//         } else if(arr[1].indexOf(char2) > -1) {
//             if (arr[0][arr[1].indexOf(char2)] != char) console.log(false);
//         } else {
//             console.log('arr[0] =  ', arr[0]);
//             console.log('arr[1] =  ', arr[1]);
//             arr[0].push(char);
//             arr[1].push(char2);
//         }
//     }
//     console.log(true);
// };

// s = "title";
// t = "abacd";
// isIsomorphic(s, t);

// let hello = String.raw`Hello\n${'world'}!`;
// console.log(hello);
// // "Hi\nworld!"

// console.log(hello.length);
// // 13

// console.log(hello.split('').join(','));
// // "H,e,l,l,o,\,n,w,o,r,l,d,!"

const longString = `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis \n praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.`
console.log(longString)