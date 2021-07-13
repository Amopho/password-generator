# password-generator

A random 30-digits password generator made with elements from DOM accompanied by the neon scss style. It has a feature of copying the generated string into clipboard.

![Preview](./src/images/glimpse-password.png)

## About DOM

Important issues while working with DOM:

### SPA

- DOM aka Document Object Module
- DOM tree
- Javascript in the browser: XMl, JSON, jQuery, Ajax, API
- JS Engines: V8 (Chrome, Node, Edge), SpiderMonkey (Firefox), Chakra (Internet Explorer)
- Adding javascript to HTML: The `<script>` tag, External JS with `<script src="...">`
- The Window object
- Host object
- Native object: [Global-Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
- `window.prompt()` and `window.alert()`
- Project: The Guessing Game

### Node

- window.alert === alert
- document.querySelectorAll() will return A non-live `NodeList` 🧐
- Node tree https://dom.spec.whatwg.org/#concept-node
- `document.getElementById(<id string>)`
- `HTMLElement.style` property
- `document.querySelector(<selector string>)`
- `document.querySelectorAll(<selector string>)`
- Project: Dom-querying

### New elements in DOM

- `document.write()` and script injection
- Creating Elements: `document.createElement(<tag name>)`
- Adding elements to the page: `Element.appendChild(<Element object>)`"
- ToDo app with DOM

### Slecting in DOM

- DOM Querying: Getting elements from `document`
- Selecting elements with `document.getElementById(<id string>)`
- Element objects: quick overview in the console
- Element style: Changing css styles with `HTMLElement.style` property
- Selecting by CSS query: `document.querySelector(<selector string>)`
- Getting more than one element: `document.querySelectorAll(<selector string>)`

### Traversing in DOM

- DOM Traversing: Jumping from one element to its relative
- Node vs. Element:
  Comparing `Node.previousSibling` and `Element.previousElementSibling`
- Getting an element's closest parent: `Element.closest(<selector string>)`
- Testing an element against a selector: `Element.matches(<selector string>)`
- Getting all children of an element: `ParentNode.children`
- Selecting specific children: `ParentNode.querySelector(<selector string>)`
- Finding more traversal techniques: MDN

### Event listeners

- Event listeners
- update to the generate password exercise
- simple game

### Clear in DOM

- User Events (interaction) and Browser Events (loading, etc...)
- Keyboard Events: `keydown`, `keyup`
- The event object properties: A console example
- Getting the target of the event: `Event.target`
- Form events: `submit`, `reset`, `Event.preventDefault()`
- Getting form values on submit:
  `target.elements[<id>]`, `target.elements[<name>]`, `Element.value`"
- Mouse Events: `click`, `mouseenter`, `mouseleave`
- Removing event listeners:
  `EventTarget.removeEventListener(<namespace>, <function reference>)`
- Listening to browser events: `DOMContentLoaded` event
- Finding more events on MDN"
- 4 exercises (currency converter _ weekend count-down _ numeral-system converter \* image-slider )

### JSON

- JSON
- Brief overview of IIFE and the Module pattern
- Advantages of scope isolation and encapsulation
- Using modules in the browser: `<script type=""module"" src=""..."">`
- Connecting files: The `import` and `export` keywords"
  "Imports and Exports:
- Default exports vs. named exports
- Destructuring imports

### Promise

- The request response cycle - Client perspective
- Non-Blocking Promises
- Blocking vs. Non-Blocking code: A brief example, `window.setTimeout()`
- Race conditions: Reading non blocking code
- Promises
- Promisifying: Converting `setTimeout()` to a promise
- Breaking Promises
- fetch() and fetch API

### Promise async

- promises
- async await
