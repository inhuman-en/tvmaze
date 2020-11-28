# TVMaze test task

## Runnning

1. Install dependencies by running:
`npm install`

2. run:
`npm start`

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## implementation notes

### Initial setup
The project created using `creat-react-app` (nstead of choosing between numerous starter kits)

### Adaptiveness
Currentlt the application has one breakpoint at 768px

### State management
Instead of `redux-saga` project uses `redux-observable`. The reason is I am more comfortable with rxjs syntax; also it gives powerfuk capabilities for managin data flows

Reducers and actions utilize `redux-toolkit`

### Tests
App uses React v17 (which is just about a month old at the moment pof writing). There is no corresponding Enzyme adapter just yet, so snapshot tests utilize `enzyme-adapter-react-16` (forward compatible in our case thankfully)

### Docs
Some of the functions and hooks are commented in `esdoc` style.
To generate html documentation, run `npm run docs`
React components could be documented using storybook, but I chose not to on this project stage