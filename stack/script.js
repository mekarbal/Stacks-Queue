class Stack {
    constructor() {
        this.current = this.top = null;

    }
    push(data) {
        if (!this.top) {
            this.current = this.top = new Element(data);
        } else {
            let tempElem = this.top;
            tempElem.next = this.top = new Element(data, tempElem, null);
        }
    }
    pop() {
        if (this.top && this.top === this.current) {
            this.current = this.top.next;
        }
        if (this.top && this.top.next) {
            this.top = this.top.next;
            this.top.prev = null;
        } else {
            // this.top =
             this.current = null;
        }
    }

    moveNext() {
        if (this.current && this.current.next)
            this.current = this.current.next;
    }
    moveBack() {
        if (this.current && this.current.prev)
            this.current = this.current.prev;
    }
    showCurrent() {
        if (this.current)
            return this.current.data;
        else
            return "il y pas des elements dans la table";
    }
}

class Element {
    constructor(data, prev, next) {
        this.data = data;
        this.prev = prev || null;
        this.next = next || null;
    }
}

let stack = new Stack();
document.getElementById('data').innerHTML = stack.showCurrent();

function push() {
    stack.push(document.getElementById('elem').value);
    document.getElementById('data').innerHTML = stack.showCurrent();
}

function pop() {
    stack.pop();
    document.getElementById('data').innerHTML = stack.showCurrent();
}

function next() {
    stack.moveNext();
    document.getElementById('data').innerHTML = stack.showCurrent();
}

function back() {
    stack.moveBack();
    document.getElementById('data').innerHTML = stack.showCurrent();
}