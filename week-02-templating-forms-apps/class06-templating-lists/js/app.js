import addFruit from './add-fruit.js';
import fruitList from './fruit-list.js';
import fruitApi from './fruits-api.js';

const fruits = fruitApi.getAll();

fruitList.init(fruits);

addFruit.init(function(fruit) {
    // tell the api service first
    fruitApi.add(fruit);

    // then update components
    fruitList.add(fruit);
});