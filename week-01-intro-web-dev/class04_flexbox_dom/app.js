/* global students */
/* exported makePairs */

// initialization

// put student count in dom
var studentCount = document.getElementById('student-count');
studentCount.textContent = students.length;

// define tries
var tries = 0;
// reference tries span
var triesSpan = document.getElementById('tries');


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
    while(copy.length > 0) {

        // create pair array
        var pair = [
            getRandomStudent(),
            getRandomStudent()
        ];
    
        // what if only 1 left?
        if(copy.length === 1) {
            // add to last pair, AND remove from copy
            pair.push(copy.pop());
        }
        
        // add them to pairs array
        pairs.push(pair);
    }


    // // loop pairs array
    // for(var i = 0; i < pairs.length; i++) {
    //     // grab li by id
    //     var li = document.getElementById('pair-' + i);
    //     // change text content of the li
    //     li.textContent = pairs[i];
    // }

    var items = document.querySelectorAll('.pair');
    for(var i = 0; i < items.length; i++) {
        var li = items[i];
        var pairToDisplay = pairs[i];
        if(i < pairs.length) {
            li.textContent = pairToDisplay;
            li.classList.remove('hidden');
        }
        else {
            li.classList.add('hidden');
        }
    }

    // increment tries
    tries += 1;
    // set text content of tries
    triesSpan.textContent = tries;
}

// based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIndex(length) {
    //The maximum is exclusive and the minimum (0) is inclusive
    return Math.floor(Math.random() * length); 
}
