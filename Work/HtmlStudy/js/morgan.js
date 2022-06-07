function compare(str1, str2){
    const l1 = str1.length;
    const l2 = str2.length;
    var sum = 0;
    for(let j = 0; j < l2; j++){
        for(let i = 0; i < l1; i++){
            if((str1.charCodeAt(i) == str2.charCodeAt(j))||(str1.charCodeAt(i) == str2.charCodeAt(j) + 32)){
                //str1.charCodeAt(i) == str2.charCodeAt(j) : a = a;
                //str1.charCodeAt(i) == str2.charCodeAt(j)+32 : a = A +32
                sum++;
            }
        }
    };
    if(sum == l2){
        return true;
    }
    return false;
}

// console.log('aA'.charCodeAt(0))
// console.log('aA'.charCodeAt(1))
// console.log('zZ'.charCodeAt(0))
// console.log('zZ'.charCodeAt(1))//A->a = +32
// console.log('aA'.charCodeAt(1) + 32)

console.log(compare('ebCde', 'BCD'));
console.log(compare('eCB', 'ECB'));
console.log(compare('BcdEF', 'BCEF'));
console.log(compare('BCD', 'BcD'));