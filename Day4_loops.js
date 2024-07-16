for(let i=1;i<=10;i++){
    console.log(i);
}
for(let i=1;i<=10;i++){
    console.log(5*i)
}


let sum =0;
let i=1;
while(i<=10){
    sum+=i;
    i++;
}
console.log("sum is "+sum)
let a=10;
while(a>0){
    console.log(a)
    a--;
}

let b =1;
do{
    console.log(b);
    b++;
}while(b<=5)

let no =5;
let fact=1;
do{
    fact*=no--;
}while(no>0)
    console.log(fact)



for(let i=1;i<=5;i++){
    let row =""
    for(let j=1;j<=i;j++){
        row+="*"
    }
    console.log(row)
}

for(let i=1;i<=10;i++){
    if(i==5){
        continue;
    }
    console.log(i)
}
for(let i=1;i<=10;i++){
    if(i==7){
        break;
    }
    console.log(i)
}

