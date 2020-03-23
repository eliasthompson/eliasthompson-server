# Elias Thompson Server
A server application that serves information about Elias Thompson.


## Installation
Note: You should be using the [LTS version](https://nodejs.org/en/download/) of Node. Check your Node version with `node -v`.

1. `git clone git@github.com:eliasthompson/eliasthompson-server.git`
2. `cd eliasthompson-server`
3. `npm install`


## Usage

### Development
`npm start`

Development of this application assumes working knowledge of [Apollo](https://www.apollographql.com/), [ES6](http://es6-features.org), [ESDoc](https://esdoc.org/), [GraphQL](https://graphql.org/), [Mocha](https://mochajs.org/), [Sequelize](http://docs.sequelizejs.com/), & [Sinon](https://sinonjs.org/).

ENV Var | Default | Description
------- | ------- | -----------
`PORT` | `4000` | The port where the application is served. (Dev only.)
`DB_DATABASE` | ` ` |  The PostgreSQL database name.
`DB_HOST` | ` ` | The PostgreSQL host.
`DB_PASSWORD` | ` ` |  The PostgreSQL password.
`DB_PORT` | ` ` |  The PostgreSQL port.
`DB_SCHEMA` | ` ` |  The PostgreSQL schema name.
`DB_USERNAME` | ` ` |  The PostgreSQL username.


### Testing
`npm run test`

To run tests continually: `npm run test:watch`

Running tests will automatically run `npm run lint`, which will check the codebase for linting errors using [ESLint](https://eslint.org/) based loosely off of [Airbnb's Style Guide](https://github.com/airbnb/javascript).


### Documentation
`npm run docs:watch`

Documentation should generally be run in watch mode so that it updates the documentation as you modify code. If you would prefer to run the documentation manually, you can run `npm run docs`.


### Serve
To serve a production version of the application, install [Docker](https://www.docker.com/get-started) and run:

`docker build -t eliasthompson-server:latest -f ./config/Dockerfile [--build-arg <env-var>=<value>...] . && docker run -p 4000:4000 eliasthompson-server:latest`
