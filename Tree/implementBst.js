class Node {
    constructor(val) {
        this.root = val;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    makeTree(val){
        let newNode = new Node(val)
        if(!this.root){
            this.root = newNode;
        } else {
            this.addRecursive(this.root, newNode)
        }
    }

    addRecursive(node, currentNode){

        if(currentNode.root < node.root){
            if(!node.left){

                node.left = currentNode ;
            } else {
                this.addRecursive(node.left,currentNode)
            }
        } else {
            if(!node.right){

                node.right = currentNode ;
            } else {
                this.addRecursive(node.right,currentNode)
            }
        }
    }
}

let myTree = new Tree();
myTree.makeTree(4)
myTree.makeTree(2)
myTree.makeTree(1)
myTree.makeTree(3)
myTree.makeTree(6)
myTree.makeTree(5)
myTree.makeTree(8)


console.log("myTree", myTree.root)