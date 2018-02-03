class Queue {

  constructor() {
    this.start = 0;
    this.end = 0;
  }

  enqueue(value) {
    this[this.end] = value;
    this.end++;
  }

  dequeue() {
    if(this.end - this.start > 0) {
      let out = this[this.start];
      this.start++;
      return out;
    }
  }

  size() {
    return this.end - this.start;
    
  }
}