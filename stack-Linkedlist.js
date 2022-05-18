import { LinkedList } from "./linkedlist.js";

class Stack {
    constructor() {
        this.list = new LinkedList()
    }


    push(value) {
        this.list.prepend(value)
    }

    pop() {
        this.list.deleteHeade()
    }

    toArray() {
        return this.list.toArray()
    }
}
const stack = new Stack()

stack.push('one')
stack.push('tow')
stack.push('three')
stack.push('fore')
stack.pop()
console.log(stack.toArray())