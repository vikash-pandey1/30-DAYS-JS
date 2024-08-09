function findOccurrence( str){
    let ans = {};
    for(let i=0;i<str.length;i++){
        let char = str[i];
        if(ans[char]){
            ans[char]++;
        }else{
            ans[char]=1;
        }
    }
    return ans;
}
let str = "vikashpandey";
    console.log(findOccurrence(str))