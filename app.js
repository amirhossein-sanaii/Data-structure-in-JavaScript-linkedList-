import { LinkedList } from './linkedlist.js'

class Queue {
    constructor() {
        this.items = new LinkedList()
    }

    enqueue(value) {
        this.items.append(value)
    }

    dequeue() {
        return this.items.deleteHeade()
    }

    toArray() {
        return this.items.toArray()
    }

}

const item = new Queue()
item.enqueue('amir')
item.enqueue('mona')
item.enqueue('hamed')

item.dequeue()
console.log(item.toArray())