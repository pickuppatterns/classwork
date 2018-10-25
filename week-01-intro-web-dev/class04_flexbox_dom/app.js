/* global students */
/* exported makePairs */

// initialization

// put student count in dom
var studentCount = document.getElementById('student-count');
studentCount.textContent = students.length;

// define tries
// reference tries span



// event handlers for making pairs
// make pairs on button click
function makePairs() {
    
    // copy students 
    var copy = students.slice();

    function getRandomStudent() {
        // randomly select index
        var index = getRandomIndex(copy.length);
        // get student corresponding to that index
        var student = copy[index];
        // remove from copy
        copy.splice(index, 1);

        return student;
    }

    // init empty array for pairs
    var pairs = [];

    // loop students - no students left
    while(copy.length > 1) {

        // create pair array
        var pair = [
            getRandomStudent(),
            getRandomStudent()
        ];
    
        // what if only 1 left?
            // add to last pair
        
        // add them to pairs array
        pairs.push(pair);
    }

    console.log(copy, pairs);

        



    // loop pairs array
        // grab li by id
        // change text content of the li

    // increment tries
    // set text content of tries

}

// based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIndex(length) {
    //The maximum is exclusive and the minimum (0) is inclusive
    return Math.floor(Math.random() * length); 
}
