
// Good place to "initialize things" - meaning run
// once when the script is loaded
var guessForm = document.getElementById('guess-form');
var guessAnswer = document.getElementById('guess-answer');

function checkAnswers() {
    // this code is specific to when checkAnswers is called

    var elements = guessForm.elements;

    var catsInput = elements.cats;
    var likeCats = catsInput.value;

    var foodInput = elements.food;
    var favoriteFood = foodInput.value.toLowerCase();

    var correct = 0;

    if(likeCats.toLowerCase() === 'yes') {
        // let's run this code if they like cats
        correct = correct + 1;
        catsInput.classList.add('correct');
        catsInput.classList.remove('incorrect');
    }
    else {
        catsInput.classList.add('incorrect');
        catsInput.classList.remove('correct');
    }
    
    if(favoriteFood === 'ice cream' || favoriteFood === 'pie') {
        // this only runs if true
        correct = correct + 1;
        foodInput.classList.add('correct');
        foodInput.classList.remove('incorrect');
    } 
    else {
        foodInput.classList.add('incorrect');
        foodInput.classList.remove('correct');
    }

    guessAnswer.textContent = 'You got ' + correct + ' out of 2';
}

function resetAnswers() {


    // eslint-disable-next-line no-console
    console.log('answers would be reset!');
}

