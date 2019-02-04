# Machine Snacks
[![CircleCI](https://circleci.com/gh/weslopes/snacks-machine/tree/master.svg?style=svg)](https://circleci.com/gh/weslopes/snacks-machine/tree/master)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A system to communicate with the snacks machine, and make the control of credits on the card.

### Prerequisites

You need to have node/npm and mongodb installed on your machine.

## Getting Started

Clone the project, install dependencies, set env variables and run with npm script.

To clone the project:
```
git clone https://github.com/weslopes/snacks-machine.git
```

Enter the project directory:

```
cd snacks-machine
```

Install all dependencies:
```
npm install
```

Create a file .env based on .env.example, after that open .env file and set your corret values:
```
cp .env.example .env
```

Now you can start the server:
```
npm start
```

### TESTS

To run tests just run npm test command:
```
npm test
```

### BUILD

To make a build version of the server just run npm run build comand and folder 'dist' will be created whit de files builded:
```
npm run build
```

Tor run the builded version use npm run server:
```
npm run server
```

## ROUTES

A list of all avaliable routes in API:

| HTTP METHOD | POST  | GET | PUT | PATCH | DELETE|
| ----------- | ----- | --- | ---- | ----- | ------|
| /api/cards  | Create a new card | List all cards | - | - | - |
| /api/cards/:cardid | - | Get a card by id | Update um card informations | - | - |
| /api/cards/:cardid/buy | - | - | - | Try buy a snack | - |

## Built With

* [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js

* [MongoDB](https://www.mongodb.com/) - MongoDB is an open-source document database that provides high performance, high availability, and automatic scaling.

* [Joi](https://github.com/hapijs/joi) - Object schema description language and validator for JavaScript objects.

* [Mocha](https://mochajs.org/) - Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser.

* [Chai](http://www.chaijs.com) - Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.

## Authors

* **Wesley Lopes** - *BackEnd Developer NodeJs* - [weslopes](https://github.com/weslopes)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
