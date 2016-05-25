function Node(val, next) {
  this.val = val;
  this.next = next;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;

  return this;
}

LinkedList.prototype.push = function(val) {
  var newNode = new Node(val, null);
  if (!this.head) {
    this.head = newNode;
  } else {
    this.tail.next = newNode;
  }
  this.tail = newNode;

  this.length++;
  return this;
}

LinkedList.prototype.get = function(index) {
  if (!this.head) return undefined;

  var NodeAtIndex = this.head
  for (var i = 1; i < index; i++) {
    var NodeAtIndex = NodeAtIndex.next;
  }
  return NodeAtIndex;
}

LinkedList.prototype.pop = function() {
  if (!this.head) return undefined;
  var popped = this.tail;

  if (this.length === 1) {
    this.head = null;
    this.tail = null;
  } else {
    this.tail = this.get(this.length - 1);
    this.tail.next = null;
  }

  this.length--;
  return popped;
}

LinkedList.prototype.clear = function() {
  this.head = null;
  this.tail = null;
  this.length = 0;

  return this;
}

LinkedList.prototype.shift = function() {
  if (!this.head) return undefined;

  var shifted = this.head;
  this.head = this.get(1);

  this.length --;
  return shifted;
}

LinkedList.prototype.unshift = function(val) {
  var newNode = new Node(val, this.head);
  this.head = newNode;
  if (!this.tail) {
    this.tail = newNode;
  }

  this.length++;
  return this;
}

LinkedList.prototype.set = function(index, val) {
  var node = this.get(index);

  if (node) {
    node.val = val;
  }

  return node;
}

LinkedList.prototype.remove = function(index) {
  var before = this.get(index);
  var after = this.get(index);

  if (before && after) {
    before.next = after;
  } else if (before && !after) {
    before.next = null;
  }

  length--;
  return this;
}

LinkedList.prototype.reverse = function() {
  var length = this.length;
  var newList = new LinkedList();
  var a = [];

  for (var i = 0; i < length; i++) {
    a[i] = this.pop().val;
  }
  for (var i = 0; i < length; i++) {
    this.push(a[i])
  }

  return this;
}

var a = new LinkedList();


a.push('hello');

a.push('world');

a.push('sup?')

console.log(a);

console.log(a.pop());

console.log(a);

a.unshift('wow')

console.log(a);

a.reverse();

console.log(a);
