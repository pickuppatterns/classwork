# VS Code Extensions

List of Extensions for VS Code divided into groups based on required / non-required. Whenever you install a new extension, take a few minutes to read over the provided documentation and follow any setup steps that are listed out for you. Many extensions also will have optional settings you can configure that will allow you to control how the extension works. 

# Required

These are the extensions that you will need to complete class and lab work.

## **Live Server** | ritwickdey.liveserver | [Docs](https://github.com/ritwickdey/vscode-live-server/blob/master/README.md)
This extension launches a local development server with live reload feature for static & dynamic pages.

Does not  require any external downloads or configuration. 

Read docs for how to launch.

## **Code Spell Checker** | streetsidesoftware.code-spell-checker | [Docs](https://github.com/Jason-Rev/vscode-spell-checker)

A basic spell checker that works well with camelCase code.

Does not  require any external downloads or configuration.

## **ESLint** | dbaeumer.vscode-eslint | [Docs](https://github.com/Microsoft/vscode-eslint/blob/master/README.md)

Integrates ESLint into VS Code.

*Requires having ESLint installed and configured.*

Steps: 
1. Check to make sure you don't already have eslint installed at a project or global level
    ```sh
    $ npm ls eslint 
    $ npm ls -g eslint
    ```
1. Install eslint with npm
    ```sh
    $ npm install -g eslint
    ```
1. In VS Code, install the eslint extension (link above) then RESTART VS Code
1. Copy the class [.eslintrc](https://github.com/alchemy-bootcamp-one-fall-2018/classwork/blob/master/.eslintrc) file into your new project
1. Fully close VS Code, then relaunch it.
1. To check that everything is working now:
    1. Create a index.js file and add 
        ```js
        var x
        ```
    1. Press the keys [CTRL] and [`] to open the bottom area
    1. Open the Problems tab. You should see a few errors now. 


## **VS Live Share** | ms-vsliveshare.vsliveshare | [Docs](https://github.com/MicrosoftDocs/live-share)

VS Live Share enables you to collaboratively edit and debug with others in real time, regardless what programming languages you're using or app types you're building. It allows you to instantly (and securely) share your current project, and then as needed, share debugging sessions, terminal instances, localhost web apps, voice calls, and more! 

*You will need to have a microsoft or github account to join a session.*

---
---

# Can Be Handy
Extensions we like and think are useful, but not required.

