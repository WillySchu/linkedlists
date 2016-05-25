function Node(val, next, prev) {
  this.val = val;
  this.next = next;
  this.prev = prev;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;

  return this;
}

LinkedList.prototype.generate = function(arr) {
  this.clear();

  for (var i = 0; i < arr.length; i++) {
    this.push(arr[i])
  }
}

LinkedList.prototype.push = function(val) {
  var newNode = new Node(val, null, this.tail);
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

  if (index < this.length / 2) {
    var NodeAtIndex = this.head
    for (var i = 1; i < index; i++) {
      var NodeAtIndex = NodeAtIndex.next;
    }
  } else {
    var NodeAtIndex = this.tail;
    for (var i = 1; i < length - index; i++) {
      NodeAtIndex = NodeAtIndex.prev;
    }
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
    this.tail = popped.prev;
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

  if (this.length === 1) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = shifted.next
    this.head.prev = null;
  }

  this.length --;
  return shifted;
}

LinkedList.prototype.unshift = function(val) {
  var newNode = new Node(val, this.head, null);

  this.head.prev = newNode;
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
  var removed = this.get(index)
  var before = removed.prev;
  var after = removed.next;

  if (before && after) {
    before.next = after;
    after.prev = before;
  } else if (before && !after) {
    before.next = null;
  }

  length--;
  return this;
}

LinkedList.prototype.reverse = function() {
  var length = this.length;
  var tail = this.tail;
  var node = this.head;


  for (var i = 0; i < length; i++) {
    if (this.head === node) {
      this.tail = node;
    } else if (tail === node) {
      this.head = node;
    }
    var next = node.next;
    node.next = node.prev;
    node.prev = next

    node = next;
  }

  return this;
}

LinkedList.prototype.mostFrequent = function() {
  var node = this.head;
  var counter = {};

  while (node) {
    if (counter[node.val]) {
      counter[node.val]++;
    } else {
      counter[node.val] = 1;
    }

    node = node.next;
  }
  return counter;
}

LinkedList.prototype.rotate = function(n, d) {
  for (var i = 0; i < n; i++) {
    if(d) {
      this.push(this.shift().val);
    } else {
      this.unshift(this.pop().val);
    }
  }
  return this;
}

LinkedList.prototype.printEach = function() {
  var node = this.head;
  while (node) {
    console.log(node);
    node = node.next;
  }
}

LinkedList.prototype.bubbleSort = function() {
  var node = this.head.next;
  while (node) {
    if (node.prev.val > node.val) {
      if (node.prev === this.head) {
        node.prev.prev = node;
        node.prev.next = node.next;
        this.head = node;

        node.next = node.prev;
        node.prev = null;
        node = node.next;
      } else if (node === this.tail) {
        console.log('tail');
        var prev = node.prev.prev;

        this.tail = node.prev;
        node.prev.next = null;
        node.prev.prev = node;

        node.next = node.prev;
        node.prev = prev;
      } else {
        var prev = node.prev.prev;

        node.prev.next = node.next;
        node.prev.prev = node;

        node.next.prev = node.prev;

        node.next = node.prev;
        node.prev = prev;
      }
    } else {
      node = node.next;
    }
  }
  return this;
}

var a = new LinkedList();

a.generate([1, 4, 2])

a.bubbleSort();

a.printEach();
