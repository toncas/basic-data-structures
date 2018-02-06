/** Individual node */
class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}
/******************** */

class LinkedList {

  constructor() {
    this.head = null;
    this._length = 0;
  }

  size() {
    return this._length;
  }

  addToHead(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
    this._length += 1;
  }

  addToEnd(value) {
    if(!this.head) {
      this.addToHead(value);
    } else {
      let temp = this.head;
      let node = new Node(value);

      while(temp.next !== null) {
        temp = temp.next;
      }
      temp.next = node;
      this._length += 1;
    }
  }

  removeHead() {

  }

  removeTail() {

  }

  insertNodeAt(index, value) {
    
  }

  toArray() {

  }

  reverse() {

  }


}