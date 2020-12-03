import httpService from './http.service.js';
import { utilService } from './util.service.js';

function query() {
    const samples = httpService.get('sample');
    return samples;
}

function findByIdRecursive(nodes, _id) {
    //Find the id of an element even if it is a child of another element
    for (let i = 0; i < nodes.length; i++) {
        const child = nodes[i];
        if (child._id === _id) {
            return child;
        } else {
            if (child.children) {
                const foundElement = findByIdRecursive(child.children, _id);
                if (foundElement) {
                    return foundElement;
                }
            }
        }
    }
}

function replaceIds(node) {
    //replace the ids of sample in order to differ from section to section
    node._id = utilService.makeId();
    if (node.children) {
        node.children.forEach(child => {
            this.replaceIds(child);
        });
    }
}

function makeTree(node) {
    const parent = {
        name: node.name,
        _id: node._id,
        class: node.class,
        children: []
    };
    if (node.children) {
        node.children.forEach(child => {
            parent.children.push(this.makeTree(child));
        });
    }
    return parent;
}

function findParentNode(parent, _id) {
    const children = parent.cmps || parent.children;
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (child._id === _id) {
            return parent;
        } else {
            if (child.children) {
                const foundElement = findParentNode(child, _id);
                if (foundElement) {
                    return foundElement;
                }
            }
        }
    }
}
// function findParentNode(node, _id) {
//     const children = node.cmps || node.children;
//     for (let i = 0; i < children.length; i++) {
//         const child = children[i];
//         if (child._id === _id) {
//             return node;
//         } else {
//             if (child.children) {
//                 const foundElement = findParentNode(child, _id);
//                 if (foundElement) {
//                     return foundElement;
//                 }
//             }
//         }
//     }
// }
export const editorService = {
    query,
    findByIdRecursive,
    replaceIds,
    makeTree,
    findParentNode
}