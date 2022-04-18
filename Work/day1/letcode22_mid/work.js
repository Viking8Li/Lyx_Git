/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    if(n==1){
        console.log( ["()"]);
        return ["()"];
    };
    const a = new Set();
    for(let s of generateParenthesis(n-1)){
        for(let i = 0; i!= 2*(n-1);++i){
            let tmp = new String;
            tmp = s.slice(0,i)+"()"+s.slice(i);
            a.add(tmp);
        }
    }
    console.log([...a]) ;
    return [...a];

};

generateParenthesis(3);