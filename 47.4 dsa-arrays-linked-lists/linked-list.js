/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  _get(idx) {
    //sets cur variable to the head and count to 0
    let cur = this.head;
    let count = 0;
    //if the head isn't null and the count hasn't been reached, loop
    while (cur !== null && count != idx) {
      //When idx and count are equal loop exits with cur value
      count += 1;
      cur = cur.next;
    }
    return cur;
  }

  /** push(val): add new value to end of list. */
  //Why can I just do conditionals and no loop?
  push(val) {
    //creates the new node and assigns it to a variable
    let newNode = new Node(val);
    // case for if the LL is 0
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      //sets the new next pointer on the current tail to the newNode going on the end
      this.tail.next = newNode;
      //Sets the tail as the new node
      this.tail = newNode;
    }
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    //case for if LL is empty
    if (this.head === null) {
      this.head = newNode;
    } else {
      //Set the newNode.next to the current head first
      newNode.next = this.head;
      //Set the head to be the newNode
      this.head = newNode;
    }
    if (this.length === 0) this.tail = this.head;
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    return this.removeAt(this.length - 1);
    /* //Starts are the head of the list
    let current = this.head;
    //Iterates through node by node
    //Checks if current node.next is the tail
    //If it is sets the next to null and makes that node the new tail
    //Returns the tail
    while (current !== null) {
      if (current.next === this.tail) {
        current.next = null;
        this.length -= 1;
        return this.tail.val;
      }
      current = current.next;
    } */
  }

  /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0);
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    //Checks for a valid index
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid Index");
    }
    //uses the _get() method defined above to get the node at that index and then returns its value
    return this._get(idx).val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid Index");
    }
    //changes the value at the index passed in
    let cur = this._get(idx);
    cur.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    //checks for bad index
    if (idx > this.length || idx < 0) {
      throw new Error("Invalid Index");
    }
    //if the index is zero, add value to the start of the list with unshift()
    if (idx === 0) return this.unshift(val);
    //if the index is the end of the list, add it with the push() method
    if (idx === this.length) return this.push(val);
    //sets previous variable to one before the idx to insert at
    let prev = this._get(idx - 1);
    let newNode = new Node(val);
    //Sets the new node next pointer to the current value previous is pointing at, what it was pointing at before insertion
    newNode.next = prev.next;
    //sets prev next value to the newNode inserted
    prev.next = newNode;

    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid Index");
    }
    //case for if the index is the head value
    if (idx === 0) {
      let val = this.head.val;
      this.head = this.head.next;
      this.length -= 1;
      //case for if the list is short, 2 nodes only
      if (this.length < 2) this.tail = this.head;
      return val;
    }

    //grabs the previous index by using the get method from above and subtracting one value from the index
    //Sets that value to variable prev
    let prev = this._get(idx - 1);

    //Case for if the index is at the end of the list
    if (idx === this.length - 1) {
      //gets the last value in the list and sets it equal to the val variable
      let val = prev.next.val;
      prev.next = null;
      this.tail = prev;
      this.length -= 1;
      return val;
    }
    //sets the val to the current node value
    let val = prev.next.val;
    //jumps of the node at the index we are removing
    prev.next = prev.next.next;
    //decrements length by 1
    this.length -= 1;
    //returns the val removed
    return val;
  }

  /** average(): return an average of all values in the list */

  average() {
    //case for if the length is 0
    if (this.length === 0) return 0;
    //sets variables
    let total = 0;
    let current = this.head;
    //loops through the list and adds the value of each node to total
    while (current) {
      total += current.val;
      current = current.next;
    }
    //divides the total returned from the loop and divides it by the number of nodes(length)
    return total / this.length;
  }
}

module.exports = LinkedList;
