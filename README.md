## What is Angular?
- A framework for building client applications in HTML, CSS, and JavaScript/ TypeScript
	- TypeScript is common b/c angular is written in typescript

## Why do we need angular?
- JavaScript / JQuery can become hard to maintain
- Gives a way to properly structure website and makes it easy to test

## Benefits
- Gives our applications a clean structure
- Includes a lot of re-usable code
- Makes our application more testable

## Architecture of Angular Apps
- Modern applications usually have to parts:
	- Front-end - "Client" - user interface, what the user typically interacts with - made with HTML, CSS, TypeScript, Angular
	- Back-end - "Server" -  Sits on a web server(s) in the cloud - is responsible for storing the data or doing any sort of processing
	- Front-end talks to back-end to save or get data
	- You don't save the data in the client as it can disappear when the user clears the cookies or moves to a different computer
		- This is why we use API (Application Programming Interface) to talk to the back-end to get this data
	- HTTP Services / APIs - Endpoints that are accessible via the HTTP protocol
	- The Front-end uses SQL HTTP requests to get the data from the back-end
		- Client app sends an HTTP request to an End-Point to get the Data
	- Back-end has the data and APIs to send to the client
	- Client has the HTML templates and the presentation logic (displaying data and responding to user actions)

## Setting up the Environment
- First install the latest version of NodeJS
	- Provides some tools to build Angular projects
- Node Package Manager
	- Used to install 3rd-party libraries (i.e. Angular CLI (command-line interface)
		- `npm install -g @angular/cli`
		- Need to use `-g` b/c if you don't it'll only be installed to the current folder

## Your First Angular App
- Type: `ng new hello-world`
	- Hello-world will be what the app is called
- We now need a code editor - code.visualstudio.com
- Within command prompt (inside the folder for hello-world) type: `code .`
	- This opens up visual studio within that project
- To run the server: `ng serve`

## Your First TypeScript Program
- Install: `npm install -g typescript`
- See version: `tsc --version`
- Make a file and open in visual studio: `code main.ts`
- Transpile to JavaScript: `tsc main.ts`
- Execute code: `node main.js`
- Combining them: `tsc main.ts && node main.js`

## Trouble-Shooting
- Error Message: `error TS1056: Accessors are only available when targeting ECMAScript 5 and higher.`
- Solution: `tsc main.ts --target ES5 && node main.js`

## Rendering Components using Angular CLI
- In VS Code press: ctrl + ` 
	- This will open a terminal
- Generate a new component: `ng g c <new_component_name>`
	- G = generate
	- C = component
	- i.e. `ng g c course`

## Generating Services using Angular CLI
- Using a terminal window: `ng g s <new_service_name>`
-- G = generate
-- S = service
-- i.e. `ng g s email`

## Installing Bootstrap
- Using a terminal window: `npm install bootstrap --save`
-- Downloads bootstrap and stores in node_modules
-- `--save` adds it as a dependency in package.json
