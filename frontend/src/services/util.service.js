export const utilService = {
    applyDrag,
    makeId
}

function makeId() {
    return Math.random().toString(36).substring(2, 10)
}

function applyDrag(cmps, dragResult) {
    console.log('***IN APPLY DRAG*****');
    console.log('cmps:', cmps);
    console.log('drag result:', dragResult);
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