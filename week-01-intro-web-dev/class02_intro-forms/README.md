# Class 02: Introduction to Forms

Creating, styling, and working with forms. 

Lab: Guessing Game for About Me

## Agenda

1. Live Share
1. [`<form>` and simple form controls](html-forms.md)
1. JavaScripting all the forms
    * Simple Event Handlers
    * Getting DOM "actors" via `document.getElementById(<id>)`
    * Reading Values from Forms
    * Setting Text and Adding Classes to DOM elements
    * Review: JavaScript Control Flow

## Branch

Make a branch!

## Simple Event Handlers

1. What is an event?
1. What is a handler?

Using element `onevent` attributes

* Why? Curating material
* Pseudo function, attribute value is function body (JavaScript)
    * `onclick="doThing();"`
    * `onsubmit="event.preventDefault(); checkGuesses();"`

## Getting Elements in the DOM

* DOM (Document Object Model)
    * Tree
    * `document` is at the top
    * Built-in methods (`.getElementById`)
* Actual instance of an element (the "actor")
* Use JavaScript to "direct" the actors
* `document.getElementById(<id>)`
    * Retrieves the requested element
    * returns `null` if not found

## Digression: JavaScript Objects

[Objects](Objects.md) are collections of values where each value can be retrieved 
or set by one specific key.  Aka **key/value** pairs.

## Manipulating Elements

More built-in methods!

Wait, what's a method...

* Property - gets or sets a value
* When that value is a function, we:
    * call it a method
    * invoke/call/execute using `()`
    * can pass in values
    * can get a value back

### Reading Things

* Simple cases, read the form controls:
    * `.value`, `.checked`
* Forms an `elements` property that is both an array and a dictionary!
    * But what is an array?
    * And what is a dictionary?
* Remember to assign values to checkboxes, radio buttons and options!

### Writing/Changing Things

* Set new text via `.textContent = `
* Add/remove classes via [`.classList` _methods_](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
* Override with `.className = `

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

### Indexed Iteration

There are a variety of things in JavaScript we can iterate using a
sequence of numbers (0 based) to progress through the list:
* Arrays
* Strings
* NodeList

## Lab

* Guessing Game for About Me
* Use a new branch!

