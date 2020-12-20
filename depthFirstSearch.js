//adding class constructor using "this" so I can get the current value
//also setting children array to empty
class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }
    //addchild to the node, pushing new node to children array
    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }

    //this function returns the names of the nodes
    depthFirstSearch(array) {
        array.push(this.name)
        //for each child of the current node,  call the depthFirstSearch function on each one
        for (const child of this.children) {
            //now the child name is pushed to the array
            child.depthFirstSearch(array);
        }
        return array;
    }
}

exports.Node = Node;