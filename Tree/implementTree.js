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
            if(!this.root.left){
                this.root.left = newNode;
            } else if (!this.root.right){
                this.root.right = newNode;
            }
        }
    }
}

let myTree = new Tree();
myTree.makeTree(4)
myTree.makeTree(5)
myTree.makeTree(6)


console.log("myTree", myTree)