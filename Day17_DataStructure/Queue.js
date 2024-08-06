class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.front = null;
        this.rear = null;
    }
    enqueue(value){
        const newNode = new Node(value);
        if(!this.front){
            this.front = newNode;
            this.rear = newNode;
        }else{
            this.rear.next= newNode;
            this.rear = newNode;
        }
    }
    dequeue(){
        if(!this.front){
            console.log('queue is empty');
            return;
        }
        const dequeueNode = this.front;
        this.front = this.front.next;
        if(!this.front){
            this.rear = null;
        }
        return dequeueNode.value;
    }
    front(){
        if(!this.front){
            console.log('queue is empty');
            return;
        }
        return this.front.value;
    }
    display(){
        if(!this.front){
            console.log('queue is empty');
            return;
        }
        let curr = this.front;
        while(curr){
            console.log(curr.value);
            curr = curr.next;
        }
    }
}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log("Queue after enqueuing nodes:");
queue.displayQueue();

console.log("Front element:", queue.getFront());

console.log("Dequeued element:", queue.dequeue());

console.log("Queue after dequeuing a node:");
queue.displayQueue();