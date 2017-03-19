# dev-env-boilerplate
A JavaScript Development Environment

1- Editors and Configuration -> Visual Studio Code 
  - http://editorconfig.org/
  - Atom, Webstorm, Brackets, Visual Studio Code
  
2- Package Management -> NPM
  - https://npms.io/
  - Bower, npm, jspm, Jam, Volo
  
  1. Package Security (scan at npm start) - Node Security Platform
     - https://softwaresecured.com/13-tools-for-checking-the-security-risk-of-open-source-dependencies/ 
     - retire.js
     - Node Security Platform
  
3- Development Servers -> Express
  - https://expressjs.com/
  - http-server, live-server, Express (Koa or Hapi), budo, Webpack dev-server, BrowserSync
  
4- Development Servers - Sharing work-in-progress
  - localtunner, ngrok, Surge, now
  
5- Automation -> npm Scripts
  - https://medium.freecodecamp.com/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8#.uf9cw561d
  - Grunt, Gulp, npm Scripts
  
6- Transpiling -> Babel
  - https://github.com/jashkenas/coffeescript/wiki/List-of-languages-that-compile-to-JS
  - Babel, Typescript, Elm
  
7- Bundling -> Webpack
  - Browserify, Webpack, Rollup, JSPM
  
8- Linting -> ESLint
  - https://github.com/dustinspecker/awesome-eslint
  - JSlint, JSHint, ESLint
  
9- Testing (Unit, Integration, UI) -> Mocha (only Unit tests)   
  1. Testing Framework (Mocha, Jasmine, Tape, QUnit, AVA, Jest) -> Mocha
  2. Assertion Library (Chai, should.js, expect) -> Chai
  3. Helper Libraries (JSDOM + Cheerio)
  4. Run tests (Browser, Headless browser, In-memory DOM) -> JSDOM
     - Browser: Karma, Testem
     - Headless Browser: PhantomJS
     - In-memory DOM: JSDOM
  5. Place tests (Centralized, Alongside) -> Alongside (filename.spec.js, fileName.test.js)
  6. When to Run tests (Unit, Integration)
     - Unit Tests: run upon save
     - Integration Tests: run on demand or QA

10- Continuous Integration -> Travis(linux) + Appveyor(Windows)
  - Travis, Appveyor, Jenkins, circleci, semaphore, SnapCI

11- HTTP Calls -> Axios (but i'm using fetch)
  - http://github.com/github/fetch && http://github.com/matthew-andrews/isomorphic-fetch
  - Node: request, http
  - Browser: Fetch, XMLHttpRequest, jQuery, Framework-based
  - Node & Browser: Axios, SuperAgent, isomorphic-fetch, xhr
  1. Ways of Mocking HTTP
     - Nock
     - static JSON
     - dev webserver (api-mock, JSON server, JSON Schema faker)
     - BrowserSync, Express, ...
  2. Mocking HTTP
     - Declaring schema: JSON Schema Faker
     - Generate random data: randexp.js, faker.js, chance.js
     - Serve data via API: JSON server

12- Project Structure
  - https://github.com/coryhouse/react-slingshot for POJOs use
  - demo app (important to show good examples)
  - tips (put all js in a js file, organize by feature, extract logic to POJOs)
  
13- Production Build (hard code, via node, html-webpack-plugin)

14- Automated Deployment (npm run start, npm run build, npm run deploy)
  - AWS, Azure, Heroku, Firebase, Google Cloud, Pubstorm, Github, Surge
 
15- Update Approaches
  - Yeoman, Github, npm
