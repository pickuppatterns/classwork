Class 04: Flexbox, Moar DOM, Pair Programming

## Agenda

* Code Review
* Review Professional Skills
* Using `GitHub` gists
* Flex Box
* Dom
    * Getting Elements
    * Changing Elements
    * Creating Elements
* Pair Programming

## Code Review

## Review Professional Skills

### Communication and Collaboration

Key communication/collaboration traits employers want:

Skill | Daily Application
:---|:---
Represent Skills Honestly | Are there any questions?  
Speak Up | Asking questions in a timely manner
Resourceful | Seek what you need
Share | Help others and claim victories

**Do your learning in public**!

### Process

Key software development process rigor:

**Work Incrementally**

1. Identify (Red)
    * next step (keep it small!)
    * validate - how will you know?
1. Implement (Green)
    * write code
    * pay attention to problems (linting/errors)
        * devTools open
        * inspect/be empirical - debug
        * read the error message - what/where
    * pass validation
1. Make it better (Refactor)
    * clean as you go
    * indentation and formating
    * read your code
    * come up with better names

## Flex Box

## DOM

[Element Docs](https://developer.mozilla.org/en-US/docs/Web/API/Element)

### Getting Elements

#### Query

Method | Returns
---|---
`document.getElementById(id)` | element
`document.querySelector(selector)` | element
`document.querySelectorAll(selector)` | list

#### Hierarchy

These can be used on any element

Method | Returns
---|---
`.parentElement` | parent element
`.firstElementChild` | first element
`.lastElementChild` | last element
`.children` | list of all child elements

### Changing Elements

#### Text vs HTML

Property | Set | Get
---|---|---
`.textContent` | text that will be escaped | current text
`.innerHTML` | raw html | current html

Why? Escaping content

#### Form Controls

* `.value`
* `.checked`

#### Appearance

Method or Prop | Notes
---|---
`.classList` | Use [methods](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) to control
`.style` | set css properties
`.disabled` | control disabled state

### Adding Elements

#### Creating

* `document.createElement(tagName)`

#### Add and Remove

* `.appendChild(child)`
* `.insertBefore(child, anchor)`

## Demo

Pair Randomizer

## Pair Programming

Here's the basics of what you need to know about *pair programming*. This is a methodology for work in software development that is increasingly more popular and widespread (not only in development work, but also in interview processes), and we place a high value on training our students to pair program effectively.

Consistency between the code base in all four locations: their GitHub account, their personal computer, their partner's GitHub account, and their partner's personal computer. **Forget any of the steps? Ask!**

* In pair programming there are two developers working on a single body of code on a single computer.
* There are two roles: Driver and Navigator. The pair switches roles every 25 minutes
* One member of the pair is the Driver, and this person will be the one doing all of the actual typing work on the laptop.
* The other member of the pair is the Navigator, and this person will work with only their voice and their thoughts.
* The Navigator does not touch the keyboard, nor does the Navigator work on their laptop "on the side". The Navigator is fully engaged with the work that the pair is doing, they can use a piece of scratch paper to sketch diagrams, take notes, or list or remember ideas. At most the Navigator uses their laptop to perhaps keep a copy of this assignment document open or to look up something needed to write the code, such as a reference page like MDN.
* Under no circumstances does the Navigator work on any code on their laptop: for the pair programming process to be effective, both parties must be fully engaged on the code they're working on together.
* Pairs **must switch every 25 minutes**. Students should swap roles and work on the other person's code. **You must use a timer**.

### Managing Switching with Git and GitHub

1. Create a GitHub org. You can name in user1-user2 or anything you want.
1. Fork the lab to this GitHub org
1. The driver clones the fork to their local computer
1. At then end of the 25 minutes, the driver pushes the code (remember to add and commit!) to the fork
1. The navigator clones the fork to their local computer and becomes the driver
1. At the next switch, the driver pushes (remember to add and commit)
1. The navigator pulls the code and becomes the driver
1. Repeat
1. When the lab is complete, perform **1 PR** from the GitHub Org to the Class Repo for the lab against your pairs branch
1. **Each person** does a separate Canvas submission

## Lab

Guess-or-die Game
