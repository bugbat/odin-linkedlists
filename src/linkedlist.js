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
      const temp = currentNode;
      currentNode = temp.nextNode;
    }
    return currentNode;
  }
  
  return { head, tail, size, append, prepend, at }
}

function Node(value=null, nextNode=null) {
  value: value;
  nextNode: nextNode;
  return { value, nextNode }
}

export { LinkedList };