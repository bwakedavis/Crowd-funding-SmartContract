class Node{
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    //Insert first Node
    insertFirst(data){

        this.head = new Node(data, this.head)
        this.size++
    }
    //Insert last Node
    insertLast(data){
        let node = new Node(data)
        let current;
        //if empty make head
        if(!this.head){
            this.head = node;
        }else{
            current = this.head

            while(current.next){
                current = current.next
            }
            current.next = node
        }

    }
    //Insert at Index
    
    //Get at Index

    //Remove at Index

    //Clear at Index

    //Print list data
    printListData(){
        let current = this.head;
        while(current){
            console.log(current.data)
            current = current.next
        }
    }
}

const ll = new LinkedList()

ll.insertFirst(100)
ll.insertFirst(200)
ll.insertFirst(300)
ll.insertLast(400)
ll.printListData()