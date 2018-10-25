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

    // init empty array for pairs
    var pairs = [];

    // loop students - no students left
    
    // create pair array
    var pair = [];

    // randomly select one index as student one
    var index1 = getRandomIndex(copy.length);
    var student1 = copy[index1];
    // put that student in pair
    pair.push(student1);
    // remove from students
    copy.splice(index1, 1);

    // randomly select two index as student two
    var index2 = getRandomIndex(copy.length);
    var student2 = copy[index2];
    // put that student in pair
    pair.push(student2);
    // remove from students
    copy.splice(index2, 1);

    console.log(index1, index2, pair, copy);

        


        // what if only 1 left?
            // add to last pair
        
        // add them to pairs array

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
