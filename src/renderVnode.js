function render(vnode) {
    if (!vnode) return null;

    const {tag = '', attrs = {}, children = []} = vnode;
    const dom = document.createElement(tag.toLowerCase());

    Object.entries(attrs).forEach(entry => {
        dom.setAttribute(entry[0], entry[1]);
    });

    children.forEach(item => {
        const childrenDom = render(item);
        dom.appendChild(childrenDom);
    });

    return dom;
}

const vnode = {
    tag: 'div',
    attrs: {
        id: 'app',
    },
    children: [
        {
            tag: 'span',
            children: [
                {
                    tag: 'a',
                    children: [],
                },
            ],
        },
        {
            tag: 'span',
            children: [
                {
                    tag: 'a',
                    children: [],
                },
                {
                    tag: 'a',
                    children: [],
                },
            ],
        },
    ],
};

render(vnode);
