import addFruit from './add-fruit.js';
import fruitList from './fruit-list.js';
import fruitApi from './fruits-api.js';

const fruits = fruitApi.getAll();

fruitList.init(fruits, function(fruit) {
    // this is the onRemove listener

    fruitApi.remove(fruit);
});

addFruit.init(function(fruit) {
    // this is the onAdd listener

    // tell the api service first
    fruitApi.add(fruit);

    // then update components
    fruitList.add(fruit);
});