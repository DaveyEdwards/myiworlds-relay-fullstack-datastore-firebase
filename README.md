I just got the project to turn on as of April 14, 2017 after alot of hard work and will be modifying it quite abit so Normy's can use it.

This project currently can seed data to Google Datastore, and when viewing the application it will display a feed.  But errors need to be fixed.  I think alot of them have to do with reacts recent update and used projects such as react-material.

This is a almost working project based on hallvardrunning's [react-graphql-material](https://github.com/hallvardrunning/react-graphql-material)

### Basic

#### Step 1:
Clone the repository to your local directory
```bash
$ git clone THIS_REPOS_URL
$ cd THIS_REPOS_NAME
```
#### Step 2:
Install all dependencies & Start developing
```bash
$ npm install
$ npm start
```

#### Step 3:
- Create Google Cloud Platform Project and place service_account in server/config/google_api_service_key.json (if requested I will make video tutorial)
- Create Firebase account and setup authentication then get the account file and place in client/config/firebase.js AND client/utils/firebase.js (if requested I will make video tutorial)

#### Step 4:
Then you can:
```bash
$ npm run seed.datastore
$ npm start
```

Launch your favorite web browser and go to `http://localhost:3000` for Relay application or `http://localhost:8000` for GraphiQL.

## Project Structure
 *NEEDS TO BE UPDATED*

    ├── client                          - All of the client side code resides in this folder
    │   ├── assets                      - Images and fonts
    │   ├── components                  - Relay containers, React components, and SCSS files used in the components
    │   │   └── variables.scss          - Common SCSS variables
    │   ├── routes                      - React-router-relay
    │   │   ├── Route.js                - All route definitions
    │   │   └── ViewerQuery.js          - Entry node of a GraphQL query
    │   ├── index.html                  - HTML template file used by html-webpack-plugin
    │   └── index.js                    - Client entry point
    ├── server                          - All of the server side code resides in this folder
    │   ├── config                      - Configuration
    │   │   └── environment             - Separate configuration for each environment
    │   │       ├── development.js      - Development configuration
    │   │       ├── index.js            - Common configuration used in any environment
    │   │       ├── production.js       - Production configuration
    │   │       └── test.js             - Test configuration
    │   ├── data                        - Data and APIs
    │   │   ├── database.js             - Mock up database which should be replaced with your real database logic
    │   │   ├── schema.graphql          - Compiled schema in a readable form
    │   │   ├── schema.js               - Schema definitions
    │   │   └── schema.json             - Compiled schema to be used by Relay
    │   ├── utils                       - Utilities
    │   │   ├── babelRelayPlugin.js     - Babel-relay-plugin provided by Relay
    │   │   └── updateSchema.js         - Code for compiling the defined schema to schema.json and schema.graphql
    │   └── index.js                    - Server entry point
    ├── package.json                    - List of dependencies
    ├── webpack.config.js               - Webpack configuration

## Technologies

### Databases
[Google Cloud Platform Datastore](https://cloud.google.com/datastore/) - Cloud Datastore is a highly-scalable NoSQL database for your applications. Because our apps need to scale to Billions of people by default (without hiring anyone).

[Googles Firebase](https://firebase.google.com/) - Because it is pretty and easy to setup a managed authentication system, I think..

### Frameworks
[Relay](https://facebook.github.io/relay) - A JavaScript framework for building data-driven react applications. It is required to be used with React and GraphQL.

[React](https://facebook.github.io/react) - A JavaScript library for building user interfaces. It introduces many great concepts, such as, Virtual DOM, Data flow, etc.

[GraphQL](https://github.com/facebook/graphql) - GraphQL is a query language and execution engine tied to any backend service.

[Express](http://expressjs.com/) - Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

### Module bundler & Syntax transformers
[Webpack](https://webpack.github.io) - Webpack is a module bundler that takes modules with dependencies and generates static assets representing those modules.

[Babel](https://babeljs.io) - Babel is a JavaScript compiler which allows you to  use next generation, ES6/ES7, JavaScript, today.

### Languages
[ES6/ES7](https://github.com/lukehoban/es6features) - ECMAScript 6, also known as ECMAScript 2015, is the latest version of the ECMAScript standard. ES6 is a significant update to the language.

[JSX]( https://facebook.github.io/react/docs/jsx-in-depth.html) - JSX is a JavaScript syntax extension that looks similar to XML. You can use a simple JSX syntactic transform with React.

### Designs
[Material Design Lite](http://getmdl.io) - Material Design Lite lets you add a Material Design look and feel to your websites.

[PostCSS](http://postcss.org) - PostCSS is a tool for transforming CSS with JavaScript. It has roughly 200 plugins to help you write CSS easier.

### Additional Tools
[React transform HMR](https://github.com/gaearon/react-transform-hmr) - A React Transform that enables hot reloading React classes.

[React router relay](https://github.com/relay-tools/react-router-relay) - Relay integration for React Router.

[Eslint](http://eslint.org) - The pluggable linting utility for JavaScript and JSX.

[Autoprefixer](https://github.com/postcss/autoprefixer) - Parse CSS and add vendor prefixes to rules.

[Precss](https://github.com/jonathantneal/precss) - Use Sass-like markup in your CSS.

[Nodemon](http://nodemon.io) - Monitor for any changes in your node.js application and automatically restart the server.

[CSS Modules](https://github.com/css-modules/css-modules) - CSS file in which all class names and animation names are scoped locally by default.


## Deployment

#### Local machine
In order to deploy a project, it is a good practice to minify all JavaScript files, stop spawning the GraphiQL server, pull off some duplicate dependencies, and remove all unnecessary scripts, for example, Hot-reload. All of these can be done by executing the following command:

```bash
$ npm run deploy
```

Again, launch your favorite web browser and go to `http://localhost:3000`.

#### Heroku
Before getting started, make sure you already installed the [Heroku Toolbelt](https://toolbelt.heroku.com), which is a command-line tooling for managing Heroku applications that makes it easy to deploy an application in a few steps:

```bash
$ heroku create NAME_OF_YOUR_APP    # Create a new Heroku application
$ git push heroku master            # Push your code into the created Heroku repository
$ heroku ps:scale web=1             # Run the deployed application
````

That is it! Now, open the application on your default browser using `heroku open`.

## Schema

Whenever you start a server, it will automatically execute `updateSchema.js` script in order to compile the schema definitions, defined in `schema.js`, to `schema.json` and `schema.graphql`. This is required by Relay framework. However, you could also run the script manually:

```bash
$ npm run update
```

## Credits
- This was copied from [react-graphql-material](https://github.com/hallvardrunning/react-graphql-material), then I spent a few solid days trying to understand it and turn this project on.
- Relay Fullstack is inspired by [relay-starter-kit](https://github.com/relayjs/relay-starter-kit). Please take a look at the original code to learn more.
- Handcrafted with ♥ by Varayut Lerdkanlayanawat.

## Contributors

[<img alt="lvarayut" src="https://avatars.githubusercontent.com/u/4281887?v=3&s=117" width="117">](https://github.com/lvarayut) |[<img alt="maksugr" src="https://avatars.githubusercontent.com/u/8699120?v=3&s=117" width="117">](https://github.com/maksugr) |[<img alt="ianaya89" src="https://avatars.githubusercontent.com/u/3258966?v=3&s=117" width="117">](https://github.com/ianaya89) |[<img alt="crucialfelix" src="https://avatars.githubusercontent.com/u/218738?v=3&s=117" width="117">](https://github.com/crucialfelix) |[<img alt="jg123" src="https://avatars.githubusercontent.com/u/693277?v=3&s=117" width="117">](https://github.com/jg123) |[<img alt="jtfell" src="https://avatars.githubusercontent.com/u/6702746?v=3&s=117" width="117">](https://github.com/jtfell) |
:---: |:---: |:---: |:---: |:---: |:---: |
[lvarayut](https://github.com/lvarayut) |[maksugr](https://github.com/maksugr) |[ianaya89](https://github.com/ianaya89) |[crucialfelix](https://github.com/crucialfelix) |[jg123](https://github.com/jg123) |[jtfell](https://github.com/jtfell) |

[<img alt="arnif" src="https://avatars.githubusercontent.com/u/1312916?v=3&s=117" width="117">](https://github.com/arnif) |[<img alt="kkostov" src="https://avatars.githubusercontent.com/u/4718042?v=3&s=117" width="117">](https://github.com/kkostov) |[<img alt="lexun" src="https://avatars.githubusercontent.com/u/1910143?v=3&s=117" width="117">](https://github.com/lexun) |[<img alt="narongdejsrn" src="https://avatars.githubusercontent.com/u/1563323?v=3&s=117" width="117">](https://github.com/narongdejsrn) |[<img alt="ncrmro" src="https://avatars.githubusercontent.com/u/8276365?v=3&s=117" width="117">](https://github.com/ncrmro) |[<img alt="sankalpk" src="https://avatars.githubusercontent.com/u/1317291?v=3&s=117" width="117">](https://github.com/sankalpk) |
:---: |:---: |:---: |:---: |:---: |:---: |
[arnif](https://github.com/arnif) |[kkostov](https://github.com/kkostov) |[lexun](https://github.com/lexun) |[narongdejsrn](https://github.com/narongdejsrn) |[ncrmro](https://github.com/ncrmro) |[sankalpk](https://github.com/sankalpk) |

[<img alt="kennydee" src="https://avatars.githubusercontent.com/u/1484406?v=3&s=117" width="117">](https://github.com/kennydee) |
:---: |
[kennydee](https://github.com/kennydee) |

## License

MIT © [Varayut Lerdkanlayanawat](https://github.com/lvarayut)
