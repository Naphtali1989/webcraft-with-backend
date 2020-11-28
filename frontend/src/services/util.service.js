export const utilService = {
    applyDrag,
    makeId
}

function makeId() {
    return Math.random().toString(36).substring(2, 12)
}

function applyDrag(cmps, dragResult) {
    const { removedIndex, addedIndex, payload } = dragResult;
    if (removedIndex === null && addedIndex === null) return cmps;
    const result = [...cmps];
    let itemToAdd = payload;
    if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0];
    }
    if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd);
    }
    return result;
};