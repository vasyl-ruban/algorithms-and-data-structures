class Item {
    constructor(value) {
        this.value = value;
        this.parent = null;
        this.left = null;
        this.right = null;
    }
}

function inorderTreeWalk(root) {
    if (root) {
        inorderTreeWalk(root.left);
        inorderTreeWalk(root.right);
        console.log(root);
    }
}

function searchRecursive(root, value) {
    if (root === null || value === root.value) {
        return root;
    }

    if (value < root.value) {
        return searchRecursive(root.left, value);
    } else {
        return searchRecursive(root.right, value);
    }
}

function searchIterative(root, value) {
    while (root !== null && value !== root.value) {
        if (value < root.value) {
            root = root.left;
        } else {
            root = root.right;
        }
    }

    return root;
}

function minimum(root) {
    while (root && root.left !== null) {
        root = root.left;
    }

    return root;
}

function maximum(root) {
    while (root && root.right !== null) {
        root = root.right;
    }

    return root;
}

//====

let tree = new Item(2);
tree.left = new Item(1);
tree.right = new Item(3);

inorderTreeWalk(tree);
console.log(searchRecursive(tree, 4));