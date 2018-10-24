# Class 03: Design / Arrays, Objects, QuerySelector

## Agenda

* Code Review and Discussion
* Grading and Assignment Expectations
* Design and Wire Frame
* CSS Selectors
* Document Query Selectors
* Iteration of Arrays, Strings and NodeList
* JavaScript Scope

## Code Review

## Grading and Assignment Expectations

* Use `classwork`!
* Process, process, process!
* Learn to work incrementally
* Required to do your learning in public!

## Design and Wire Frame

## CSS Selectors

* attribute
* pseudo:
    * `:checked`
    * `:hover`
    * `:nth-child(even|odd)`

## Document Query Selector

Use a CSS selector to "query" the document for matching elements.

* `querySelector` - first matching
* `querySelectorAll` - list of all matching

```js
document.querySelectorAll('p'); 
// all <p> elements

document.querySelector('#guess-form'); 
// first element with an id of "guess-form"

document.querySelectorAll('input[name="topping"]:checked'); 
// all <input name="topping"> that are currently checked
```

## Review: JavaScript Control Flow

* Why? Want to run code conditionally or repetitively
* Structure
    ```js
    keyword(condition) {
        // body
    }
    ```
* Most common:
    * `if(condition)` and `else` (and `else if(condition)`)
    * `for(init;condition;post-loop)`

## Indexed Iteration

There are a variety of things in JavaScript we can iterate using a
sequence of numbers (0 based) to progress through the list:
* Arrays
* Strings
* NodeList

## JavaScript variable scope

* Tree of scopes
* Children access parents, but not siblings
* `window` is at the top
* `use strict`;
* modules...

## Labs

1. Wire frame guess-or-die
1. Count Elements in About Me
