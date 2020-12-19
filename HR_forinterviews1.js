//1. Prompt: "Write a function that takes in a Binary Tree and returns the sum of it's nodes depths."
//set the depth to zero, since its starting at the root
function nodeDepths(root, depth = 0) {
    //return grand total depth, for every left and right child add one
    return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
}

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths;