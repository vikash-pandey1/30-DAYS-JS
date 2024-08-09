function fib(no){
    if(no<=1) return no;
    return fib(no-1)+fib(no-2);
}

function fibMemo(no,dp={}){
    if(no<=1) return no;
    if(no in dp) return dp[no];
    return fib(no-1,dp)+fib(no-2,dp);
}

function fibTabu(no){
    let dp = new Array(no+1);
    dp[0]=0;
    dp[1] =1;
    for(let i=2;i<=no;i++){
        dp[i] = dp[i-1]+dp[i-2];
    }
    return dp[no]
}

function fibOpt(no){
    let prev =1;
    let prev2=0;
    for(let i=2;i<=no;i++){
        let curr = prev+prev2;
        prev2 = prev;
        prev = curr;
    }
    return prev;
}
console.log(fib(6))
console.log(fibMemo(6))
console.log(fibTabu(6))
console.log(fibOpt(6))