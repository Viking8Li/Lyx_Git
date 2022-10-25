// // function solution(A, B, N) {//change roads to A and B

// //     const citys = new Array(N), isConcat = new Array(N)
// //     citys.fill(0)
// //     for(let i = 0; i<isConcat.length; i++){
// //         isConcat[i] = new Array(N)
// //     }
// //     isConcat.forEach(item => item.fill(0))
// //     for(let i = 0; i<A.length; i++){
// //         let a = A[i] - 1;
// //         let b = B[i] - 1;
// //         citys[a]++
// //         citys[b]++
// //         isConcat[a][b] = 1
// //         isConcat[b][a] = 1
// //     }
// //     let ans = 0;
// //     for(let i = 0; i<N; i++){
// //         for(let j = i+1; j<N; j++){
// //             if (isConcat[i][j]){
// //                 ans = Math.max(ans, citys[i] + citys[j] - 1); 
// //             }
// //         }
// //     }
// //     return ans;
// // };

// // const N = 4;
// // const A = [1,2,3,3];
// // const B = [2,3,1,4];
// // console.log(solution(A, B, N))


// // function findTheWinner(n, k) {
// //     const arr = new Array(n).fill(0).map((val, index) => index + 1)
// //     console.log('arr[] = ', arr);
// //     let ind = 0
// //     while (arr.length > 1) {
// //       ind = (ind + k - 1) % arr.length
// //       console.log('index = ', ind)
// //       console.log('arr[',ind,'] = ', arr[ind])
// //       arr.splice(ind, 1)
// //     }
// //     return arr[0]
// //   };
// // const sol= findTheWinner(5,2);
// // console.log('sol = ',sol);

// function findBottomLeftValue(root) {
//     const nodelist = [root];
//     console.log(nodelist.toString);
//     return 0;
// };

// const dp = new Array(10).fill(new Array(10).fill(0));
// // console.log(dp);
// const dp1 = new Array(10).fill(false).map(() => new Array(10).fill(0))
// console.log

// //leet code 120
// /**
//  * @param {number[][]} triangle
//  * @return {number}
//  */
 
 
//  var minimumTotal = function(triangle) {
//     let tra = triangle;
//     const len = tra.length;
//     if(len == 0){
//         return 0;
//     }
//     for(let i = len - 2; i >= 0; --i){
//         let lenj = tra[i].length;
//         for(let j = 0; j < lenj; ++j){
//             tra[i][j] += Math.min(tra[i+1][j], tra[i+1][j+1]);
//         }
//     }
//     return tra[0][0];
//  };
 

//  const a = minimumTotal([[2],[3,4],[6,5,7],[4,9,8,3]]);
//  console.log(a);

const n = 100;
const s = '' + n;
console.log(s)
console.log(s.length)
let sol = 0;
if(n === s) {
    sol = 1;
}
console.log(sol);