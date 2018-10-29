

function makeFruit(fruit) {
    const html = /*html*/`
        <li class="fruit">
            <h3 class="name" style="background: ${fruit.color};">
                ${fruit.name}
            </h3>
            <img src="assets/${fruit.image}">
            <button class="danger">X</button>
        </li>
    `;

    // A. Create template element to convert string to DOM
    const template = document.createElement('template');

    // B. Assign innerHTML property
    template.innerHTML = html;

    // C. Return the `content` property which is the dom
    // (In a DocumentFragment)
    return template.content;
}

const list = document.getElementById('fruits');

const fruitList = {
    // init
    // should include:
    // 1. initial fruits array
    // 1. onRemove callback
    init(fruits, onRemove) {
        for(let i = 0; i < fruits.length; i++) {
            fruitList.add(fruits[i]);
        }
        fruitList.onRemove = onRemove;
    },
    add(fruit) {
        const dom = makeFruit(fruit);

        // do work of finding elements _before_ appending
        const removeButton = dom.querySelector('button');
        const listItem = dom.querySelector('li');

        removeButton.addEventListener('click', function() {
            fruitList.onRemove(fruit);
            listItem.remove();
        });

        // append to <ul>, this will empty the fragment
        list.appendChild(dom);
    }
};

export default fruitList;