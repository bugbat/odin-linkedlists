function LinkedList() {
  let headNode = null;
  let tailNode = null;
  let listSize = 0;

  const head = () => headNode;
  const tail = () => tailNode;
  const size = () => listSize;

  function append(value) {
    const newNode = Node(value);
    listSize++;
    if (!headNode) {
      headNode = newNode;
      tailNode = newNode;
    }
    else {
      tailNode.nextNode = newNode;
      tailNode = newNode;
    }
  }

  function prepend(value) {
    const newNode = Node(value, headNode);
    if (!headNode) {
      headNode = newNode;
      tailNode = newNode;
    }
    headNode = newNode;
    listSize++;
  }

  function at(index) {
    if (index > listSize - 1 || index < 0) {
      return null;
    }
    // else if (index === 0) return headNode;
    let currentNode = headNode;
    for(let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  function pop() {
    tailNode = at(listSize - 2);
    tailNode.nextNode = null;
    listSize--;
  }

  function contains(value) {
    let currentNode = headNode;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      else {
        currentNode = currentNode.nextNode;
      }
    }
    return false;
  }

  function find(value) {
    let currentNode = headNode;
    let index = 0
    while (currentNode) {
      if (currentNode.value === value) {
        return index;
      }
      else {
        currentNode = currentNode.nextNode;
        index++;
      }
    }
    return currentNode;
  }

  function toString() {
    let nodeString = "( " + headNode.value + " ) -> ";
    let currentNode = headNode.nextNode;
    while (currentNode) {
      nodeString += "( " + currentNode.value + " ) -> ";
      currentNode = currentNode.nextNode;
    }
    nodeString += "null";
    return nodeString;
  }
  
  function insertAt(value, index) {
    if (index === 0) prepend(value);
    else if (index === listSize) append(value);
    else if (index > listSize || index < 0) return null;
    else {
      let oldNode = at(index);
      let prevNode = at(index - 1); // would require one less iteration preNode was grabbed while searching for oldNode
      const newNode = Node(value, oldNode);
      prevNode.nextNode = newNode;
      listSize++;
    }
  }

  function removeAt(index) {
    if (index === 0) headNode = headNode.nextNode;
    else if (index >= listSize || index < 0) return null;
    else {
      let deletedNode = at(index);
      let prevNode = at(index - 1);
      prevNode.nextNode = deletedNode.nextNode;
      listSize--;
    }
  }

  return { head, tail, size, append, prepend, at, pop, contains, find, toString, insertAt, removeAt }
}

function Node(value=null, nextNode=null) {
  value: value;
  nextNode: nextNode;
  return { value, nextNode }
}

export { LinkedList };