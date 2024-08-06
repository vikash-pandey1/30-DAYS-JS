class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
    }
    push(value){
        const newNode = new Node(value);
        if(this.top){
            newNode.next = this.top;
        }
        this.top = newNode;
    }
    pop(){
        if(!this.top){
            console.log('stack is empty');
            return;
        }
        const popNode = this.top;
        this.top = this.top.next;
        return popNode.value;
    }
    peek(){
        if(!this.top){
            console.log('stack is empty');
            return;
        }
        return this.top.value;
    }
    display(){
        if(!this.top){
            console.log('stack is empty');
            return ;
        }
        let cur = this.top;
        while(cur){
            console.log(cur.value);
            cur = cur.next;
        }
    }
    reverse(arr){
        const stack = new Stack();
        for(let item of arr){
            stack.push(item);
        }
        for(let i=0;i<arr.length;i++){
            arr[i] = stack.pop();
        }
        return arr;
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.pop()

console.log('top item',stack.peek());
stack.display();

const arr  =[1,2,3,4,5];
console.log("original array",arr);
const reverseArray = stack.reverse(arr);
console.log("reverse array",reverseArray);
