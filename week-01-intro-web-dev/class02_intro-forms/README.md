# Class 02: Introduction to Forms

Creating, styling, and working with forms. 

Lab: Guessing Game for About Me

## Agenda

1. [`<form>` and form controls](html-forms.md)
2. JavaScripting all the forms
    * Simple Event Handlers
    * Getting DOM "actors" via `document.getElementById(<id>)`
    * Reading Values from Forms
    * Setting Text and Adding Classes to DOM elements
    * Review: JavaScript Control Flow

## Simple Event Handlers

1. What is an event?
1. What is a handler?

Using element `onevent` attributes

* Why? Curating material
* Pseudo function, attribute value is function body (JavaScript)
    * `onclick="doThing()"`
    * `onsubmit="event.preventDefault(); handleSubmit()"`

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
* Forms are hard, let's use a built-in helper!
    * `var data = new FormData(form);`
    * Congrats! You just created a class instance (OOP)
    * To the Docs!
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

## lab

* Guessing Game for About Me

