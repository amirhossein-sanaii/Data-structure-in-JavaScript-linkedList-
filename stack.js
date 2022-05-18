class Stack {
    constructor() {
        this.items = []
    }

    push(value) {
        this.items.push(value)
    }

    pop(value) {
        return this.items.pop(value)
    }

    toArray() {
        return this.items
    }
}

const stack = new Stack()

stack.push('one')
stack.push('tow')
stack.push('three')
stack.push('fore')
stack.pop()
console.log(stack.toArray())