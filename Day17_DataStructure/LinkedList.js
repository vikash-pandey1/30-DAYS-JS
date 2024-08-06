class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    addFirst(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
    }
    addLast(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    removeFirst(){
        if(!this.head){
            console.log('list is empty');
            return;
        }if(this.head===this.tail){
            this.head=null;
            this.tail = null;
        }else{
            this.head = this.head.next;
        }
    }
    removeLast(){
        if(!this.head){
            console.log('list is empty');
            return;
        }if(this.head===this.tail){
            this.head=null;
            this.tail = null;
        }
        let curr = this.head;
        while(curr.next!==this.tail){
            curr = curr.next;
        }
        curr.next = null;
        this.tail = curr;
    }
    display(){
        if(!this.head){
            console.log('list is empty');
            return;
        }
        let curr = this.head;
        while(curr){
            console.log(curr.value);
            curr = curr.next;
        }
    }
}

const list = new LinkedList();
list.addFirst(1);
list.addLast(2);
list.addFirst(3)
list.removeFirst();
list.display();