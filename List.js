class Item {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}



function search(head, value) {
    let item = head;

    while (item && item.value !== value) {
        item = item.next;
    }

    return item;
}

function insert(head, value) {
    let itemToInsert = new Item(value);

    itemToInsert.next = head;
    head.prev = itemToInsert;

    return itemToInsert;
}

function remove(item) {
    if (item.prev) {
        item.prev.next = item.next;
    }

    if (item.next) {
        item.next.prev = item.prev;
    }
}

function removeByValue(head, value) {
    let item = search(head, value);
    remove(item);
}