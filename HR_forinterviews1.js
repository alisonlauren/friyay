//set the depth to zero, since its starting at the root
function nodeDepths(root, depth = 0) {
    if (root === null) return 0;
    //depth + the distance of the node to the left, adding one each time
    //same for the right, gets grand sum stored in "depth"
    return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
}

// This is the class of the input binary tree.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths;