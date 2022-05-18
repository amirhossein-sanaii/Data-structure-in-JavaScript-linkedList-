class Queue {
    constructor() {
        this.items = []
    }

    rnqueue(value) {
        this.items.unshift(value)
    }

    dequeue() {
        this.items.pop()
    }

    toArray() {
        return this.items
    }
}

const item = new Queue()
item.rnqueue('amir')
item.rnqueue('mona')
item.rnqueue('hamed')

item.dequeue()
console.log(item.toArray())