class Stack {
  
  constructor() {
    this.last = 0;
  }

  push(value) {
    if(value || value === 0) {
      this.last++;
      this[this.last] = value;
    }
  }

  pop() {
    
    if(this.last > 0) {
      let out = this[this.last];
      this.last--;
      return out;
    }

  }

  size() {
    return this.last;
  }


}