export const wapService = {
    getWap
}


function getWap(userWap) {
    return Promise.resolve(_createTree(userWap.$el))
}

function _createTree(parentNode) {
    const parentEl = _createNode(parentNode);
    var childrenEls = parentNode.children;
    if (childrenEls.length &&
        parentEl.el !== 'google-map') {
        childrenEls.forEach(child => {
            parentEl.children.push(_createTree(child));
        });
    }
    return parentEl;
}

function _createNode(data) {
    const { localName, style, className, attributes } = data;
    const node = {
        id: Math.random().toString(36).slice(2),
        el: localName,
        style: style.cssText,
        class: className,
        children: []
    };
    if (node.class === 'vue-map-container') node.el = 'google-map';
    if (node.el === 'img') node.imgUrl = attributes.src.value;
    if (node.el === 'iframe') node.vidUrl = attributes.src.value;
    if (attributes.type) node.type = attributes.type.value;
    if (attributes.href) node.href = attributes.href.value;
    return node;
}