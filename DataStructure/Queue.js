class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(element) {
        this.queue.push(element)
    
    }
    dequeue() { 
        if(this.isEmpty()) 
            return "Underflow"; 
        return this.queue.shift(); 
    }

    front() { 
        if(this.isEmpty()) 
            return "No elements in Queue"; 
        return this.queue[0]; 
    } 

    isEmpty() { 
        return this.queue.length == 0; 
    } 

    printQueue() { 
        var queuestr = ""; 
        for(var i = 0; i < this.queue.length; i++) 
            queuestr += this.queue[i] +" "; 
        return queuestr; 
    } 
}
module.exports = new Queue