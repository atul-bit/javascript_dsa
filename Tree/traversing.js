class Node {
    constructor(val) {
        this.root = val;
        this.left = null;
        this.right = null;
    }
}

let array = []
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

    postOrder(){
        console.log("this.root", this.root)
        this.recursivePostOrder(this.root)
    }

    recursivePostOrder(node){
        if(node === null){
            return;
        }
        this.recursivePostOrder(node.left);
        this.recursivePostOrder(node.right);
        console.log(node.root)
    }

    inOrder(){
        console.log("this.root", this.root)
        this.recursiveInOrder(this.root)
    }

    recursiveInOrder(node){
        if(node === null){
            return;
        }
        this.recursiveInOrder(node.left);
        console.log(node.root)
        this.recursiveInOrder(node.right);
    }

    preOrder(){
        console.log("this.root", this.root)
        this.recursivePreOrder(this.root, "")
        console.log("arr", array)
    }

    recursivePreOrder(node, str){
        if(node.left === null || node.right === null){
        str = str.concat(node.root)

            console.log("str", str)
            array.push(str)
            return;
        }
        console.log(node.root)
        str = str.concat(node.root)
        console.log("str here", str)
        this.recursivePreOrder(node.left, str);
        // str = str.slice(0, -1)
        this.recursivePreOrder(node.right, str);
    }

    bfsExample(node){
        let queue = []

        queue.push(node)
        while(queue.length > 0){
            let current = queue.shift()
            console.log(current.root)
            if(current.left !== null){
                queue.push(current.left)
            }
            if(current.right !== null){
                queue.push(current.right)
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

// myTree.postOrder()
// myTree.inOrder()
// myTree.preOrder()

//implementing bfs
myTree.bfsExample(myTree.root)

