function solution(A, B, N) {//change roads to A and B

    const citys = new Array(N), isConcat = new Array(N)
    citys.fill(0)
    for(let i = 0; i<isConcat.length; i++){
        isConcat[i] = new Array(N)
    }
    isConcat.forEach(item => item.fill(0))
    for(let i = 0; i<A.length; i++){
        let a = A[i] - 1;
        let b = B[i] - 1;
        citys[a]++
        citys[b]++
        isConcat[a][b] = 1
        isConcat[b][a] = 1
    }
    let ans = 0;
    for(let i = 0; i<N; i++){
        for(let j = i+1; j<N; j++){
            if (isConcat[i][j]){
                ans = Math.max(ans, citys[i] + citys[j] - 1); 
            }
        }
    }
    return ans;
};

const N = 4;
const A = [1,2,3,3];
const B = [2,3,1,4];
console.log(solution(A, B, N))