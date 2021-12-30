// https://leetcode.com/problems/lru-cache/

function Node(key = 0, val = 0, prev = null, next = null) {
  this.key = key;
  this.val = val;
  this.prev = prev;
  this.next = next;
}

function LRUCache(capacity) {
  this.capacity = capacity;
  this.size = 0;
  this.cacheHead = null;
  this.cacheTail = null;
  this.map = new Map();
}

LRUCache.prototype.remove = function (node) {
  const prev = node.prev,
    next = node.next;
  if (node == this.cacheHead && node == this.cacheTail) {
    this.cacheHead = null;
    this.cacheTail = null;
  } else if (node == this.cacheTail) {
    this.cacheTail = prev;
    prev.next = null;
  } else if (node == this.cacheHead) {
    this.cacheHead = next;
    next.prev = null;
  } else {
    prev.next = next;
    next.prev = prev;
  }
  node.next = null;
  node.prev = null;
};

LRUCache.prototype.makeRecent = function (node) {
  if (this.cacheHead !== null) {
    node.next = this.cacheHead;
    this.cacheHead.prev = node;
    this.cacheHead = node;
  } else {
    this.cacheHead = this.cacheTail = node;
  }
};

LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    const node = this.map.get(key);
    this.remove(node);
    this.makeRecent(node);
    return node.val;
  }
  return -1;
};

LRUCache.prototype.put = function (key, val) {
  if (this.map.has(key) === false) {
    const node = new Node(key, val);
    if (this.size === this.capacity) {
      this.map.delete(this.cacheTail.key);
      this.remove(this.cacheTail);
      this.map.set(key, node);
      this.makeRecent(node);
    } else {
      this.map.set(key, node);
      this.makeRecent(node);
      this.size++;
    }
  } else {
    const node = this.map.get(key);
    this.remove(node);
    this.makeRecent(node);
    node.val = val;
  }
};

(function () {
  const lru = new LRUCache(1);
  lru.put(2, 1);
  console.log(lru.get(2));
  lru.put(3, 2);
  console.log(lru.get(2));
  console.log(lru.get(3));
})();
