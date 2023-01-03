# Web Workers API

This repository contains an example project which shows a simple example of how to use [Web Workers API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API).

## Installation and Usage
To run this project, clone a repository using the command line:

```
git clone https://github.com/ros003/web-workers-example.git
```

Install the dependency:
```
npm install
```

Run the dev server:
```
npm run start
```

---

## Overview

[Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API) are a simple means for web content to run scripts in background threads. The worker thread can perform tasks without interfering with the user interface.

Each worker thread has a distinct, isolated global environment that is different from the JavaScript environment of the browser page. Workers are not given any access at all to anything in the JavaScript environment of the page — not the DOM, nor the window or document objects.

### Important
- Workers run in another global context that is different from the current window.
- The worker context is represented by a [DedicatedWorkerGlobalScope](https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope) object.
- Web workers cannot manipulate any [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) manipulation only the main thread can access and manipulate the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model).
- You can use most standard JavaScript features inside a web worker (Navigator, XMLHttpRequest, Array, Date, Math, String, setTimeout(), setInterval()).
- Workers may, in turn, spawn new workers, as long as those workers are hosted within the same origin as the parent page.

### Use cases for web workers
- Processing and display of large data sets.
- Computations related to moves in a game.
- Image processing and filtering.
- Processing text data (code syntax, spell checking, word count).

### Browser support
Web workers are supported in all modern browsers. However, Internet Explorer 10 and below do not support web workers.

```
if (window.Worker) {
	// Browser supports web workers
} else {
	// Browser does not support web workers
}
```

---

## How it works

Starting a new worker is as simple as specifying a file containing JavaScript code:
```
const worker = new Worker('worker.js');
```

Data is passed between Workers and the main JavaScript thread using two complementary features in JavaScript code:
- A `postMessage()` function on the sending side.
- A message event handler on the receiving side.

```
/* Pass data to a web worker */
worker.postMessage({ car: 'Audi', year: 2020 });

/* Receive messages from a web worker */
worker.onmessage = ({ data }) => {
	console.log(data);
}

/* Handle errors in a web worker */
worker.onerror = ({ filename, lineno, message }) => {
	console.log(message);
}

/* Destroy a web worker */
worker.terminate();
```

---

## Web Workers in Angular

It’s quite easy to create a [Web Worker in Angular](https://angular.io/guide/web-worker). You can use Angular CLI and use ng generate command.

```
ng generate web-worker <location>
```

This command will do the following:
1. Creates a new file `tsconfig.worker.json`. This file looks as below.
2. Creates `app.worker.ts` and this is where you get the response from the worker.
3. In angular.json, adds `”webWorkerTsConfig”: “tsconfig.worker.json”` in `build > options` and register the generated `tsconfig` file for the web worker.
4. Your `app.component.ts` will also be modified and the worker will be used here.
