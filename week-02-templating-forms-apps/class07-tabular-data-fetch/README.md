# Class 08

## Agenda

* Code Review
* Component Review
* Tables
* Arrays
    * Sorting
    * Filtering

## Code Review

## Component Review

* components follow the DOM tree
* use `init` to pass initial data and callbacks
* use update methods when parent needs to notify child to update

### One-Way Data Flow

* data down
* events up

Managing state (data):

* shared state must be managed by common ancestor
* keep state as close as possible to components that use it

## Changes

* use single `html` template function
* use `this` to refer to current object

## Array Filtering and Sorting

* Functional methods (take a callback!)
* Filter
    * Function called once per item
    * If return is `truthy`, items is included, otherwise filtered
* Sort
    * Modifies the source array!!!
    * Comparison function called with any two items (we don't control algorithm!)
    * return
        * `0` _same_
        * `1` _first before second_ 
        * `-1` _second before first_

## Lab

`pokedex`
