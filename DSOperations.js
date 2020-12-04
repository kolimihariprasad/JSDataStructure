const prompt = require('prompt-sync')();
const stack  = require('./DataStructure/Stack');
const queue = require('./DataStructure/Queue');
let linkedList = require('./DataStructure/LinkedList')
{
    while(true) {
        console.log("Data Structure List: ")
        console.log("1. Stack")
        console.log("2. Queue")
        console.log("3. Linked List")
        console.log("enter 9 to exit")
        let choice = prompt("Eenter choice: ")
        switch(choice) {
            case "1":
                while(true) {
                    console.log("Select a Stack Operation to perform")
                    console.log("1. Push")
                    console.log("2. POP")
                    console.log("3. IsEmpty")
                    console.log("4. Peek")
                    console.log("5. PrintStack")
                    console.log("enter 9 to exit")
                    let operation = prompt("Eenter choice: ")
                    switch(operation){
                        case "1":
                            let value = prompt("Eenter Value to Push: ")
                            stack.push(value)
                            break;
                        case "2":
                            console.log(stack.pop())
                            break;
                        case "3":
                            console.log(stack.isEmpty())
                            break;
                        case "4":
                            console.log(stack.peek())
                            break;
                        case "5":
                            console.log(stack.printStack())
                            break;
                        default:
                            break;
                    }
                    if(operation > 5) break;
                }
                break;
            case "2":
                while(true) {
                    console.log("Select a Queue Operation to perform")
                    console.log("1. Enqueue")
                    console.log("2. Dequeue")
                    console.log("3. Front")
                    console.log("4. IsEmpty")
                    console.log("5. PrintQueue")
                    console.log("enter 9 to exit")
                    let qoperation = prompt("Eenter choice: ")
                    switch(qoperation){
                        case "1":
                            let qvalue = prompt("Eenter Value to Push: ")
                            queue.enqueue(qvalue)
                            break;
                        case "2":
                            console.log(queue.dequeue())
                            break;
                        case "3":
                            console.log(queue.front())
                            break;
                        case "4":
                            console.log(queue.isEmpty())
                            break;
                        case "5":
                            console.log(queue.printQueue())
                            break;
                        default:
                            break;
                    }
                    if(qoperation > 5) break;
                }
                break;
            case "3":
                while(true) {
                    console.log("Select a Linked List Operation to perform")
                    console.log("1. Append")
                    console.log("2. Prepnd")
                    console.log("3. PrintList")
                    console.log("4. Remove")
                    console.log("5. Reverse")
                    console.log("enter 9 to exit")
                    let loperation = prompt("Eenter choice: ")
                    let counter = 1
                    switch(loperation){
                        case "1":
                            let lvalue = Number(prompt("Eenter Value to append: "))
                            linkedList.append(lvalue)
                            break;
                        case "2":
                            let lvalue1 = Number(prompt("Eenter Value to prepnd: "))
                            linkedList.prepend(lvalue1)
                            break;
                        case "3":
                            linkedList.printList()
                            break;
                        case "4":
                            let lvalue2 = Number(prompt("Eenter Value to remove: "))
                            linkedList.remove(lvalue2)
                            break;
                        case "5":
                            linkedList.reverse()
                            break;
                        default:
                            break;
                    }
                    if(loperation > 5) break;
                }
                break;
        }
        if(choice > 3) break;
    }  
}
