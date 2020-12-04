class LinkedList {
    constructor() {
        this.head = {
            value: 0,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = {
          value: value,
          next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        console.log(JSON.stringify(newNode))
        return this;
    }

    prepend(value) {
        const newNode = {
          value: value,
          next: null
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        console.log(JSON.stringify(newNode))
        return this;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        console.log(JSON.stringify(array))
        return array;
      }
      
    remove(element) {
        let current = this.head; 
        let prev = null; 
        while (current != null) { 
            if (current.value === element) { 
                if (prev == null) { 
                    this.head = current.next; 
                } else { 
                    prev.next = current.next; 
                } 
                this.size--; 
            } 
            prev = current; 
            current = current.next; 
        } 
        return this.printList();
      }

      reverse() {
        if (!this.head.next) {
          return this.head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
    
        while(second) {
          const temp = second.next;
          second.next = first;
          first = second;
          second = temp;
        }    
        this.head.next = null;
        this.head = first;
        return this.printList();
      }
}

module.exports = new LinkedList