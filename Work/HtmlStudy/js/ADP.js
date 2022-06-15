// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, X) {
    // write your code in JavaScript (Node.js 8.9.4)
    //define a 2d array
    var arr = new Array();
    var n = A.length;
    var sol = 0;
    
    for(let i = 0; i < n; ++i){
        arr[i] = new Array();
        for(let j = 0; j < n; ++j){
            if(i !=j){
                arr[i][j] = A[i] - Math.abs(X[i] - X[j]);
            } else {
                arr[i][j] = 0;
            }
            
        }
    }
        
    for(let i = 0; i < n; ++i){
        for(let j = 0; j < n; ++j){
            if(arr[i][j] >= X[n-1] - X[0]){
                return n;
            }
        }
    }
    // console.log(A)
    
    
    for(let k = 0; k < n; k++){
        for(let i = 0; i < n; ++i){
            for(let j = 0; j< n; ++j){
                if(arr[i][k] >= 0){
                    if(arr[i][j] < arr[i][k] + arr[k][j]){
                        if((i != k)&&(i != j)&&(j != k)){
                            arr[i][j] = arr[i][k] + arr[k][j];
                        }
                    }
                }
            }
            
        }
    }
    // console.log(arr)

    for(let i = 0; i < n; ++i){
        let j = i+1;
        let temp = 1;
        if(j<n){
            while(arr[i][j]>=0){
                temp++;
                j++;
                // console.log('i=',i)
                // console.log('j=',j)
            }
            sol = Math.max(sol,temp);
            // console.log('sol=',sol);
        }

        j = i-1;
        temp = 1;
        if(j>=0){
            while(arr[i][j]>=0){
                temp++;
                j--;
                if(j == n){
                    return sol;
                }
                // console.log('i=',i)
                // console.log('j=',j)
            }
            sol = Math.max(sol,temp);
            // console.log(sol);
        }

    }
    console.log(sol);
    return sol;
}

const A = [1];
const X = [1];
var sol = solution(A,X);