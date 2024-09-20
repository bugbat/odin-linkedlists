import { LinkedList} from "./linkedlist.js"

const mylist = LinkedList();
mylist.prepend("fish")
mylist.append("cat");
mylist.append("dog");

console.log(mylist.head())
console.log(mylist.tail())
console.log(mylist.size())


console.log(mylist.at(0))

