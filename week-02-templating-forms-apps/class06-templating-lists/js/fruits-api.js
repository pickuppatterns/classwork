
let fruits = [
    {
        name: 'Apple',
        color: 'red',
        image: 'apple.png'
    },
    {
        name: 'Banana',
        color: 'yellow',
        image: 'banana.png'
    }
];

const fruitsApi = {
    getAll() {
        const json = localStorage.getItem('fruits');
        if(json) {
            fruits = JSON.parse(json);
        }
        return fruits;
    },
    add(fruit) {
        // 1. add to our array
        fruits.push(fruit);
        // 2. save array to localStorage
        localStorage.setItem('fruits', JSON.stringify(fruits));
    }
};

export default fruitsApi;