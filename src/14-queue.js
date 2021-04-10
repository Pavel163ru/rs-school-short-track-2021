const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.psize = 0;
    this.first = null;
    this.last = null;
  }

  get size() {
    return this.psize;
  }

  set size(x) {
    this.psize = x;
  }

  enqueue(element) {
    const node = new ListNode(element);
    if (this.psize === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size++;
  }

  dequeue() {
    if (this.size === 0) return null;
    const element = this.first.value;
    this.first = this.first.next;
    this.psize--;
    if (this.psize <= 1) this.last = this.first;
    return element;
  }
}

module.exports = Queue;
