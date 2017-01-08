# Chaudière Plaque

## Packages

Whenever possible, we prefer `npm` packages to Atmosphere packages that
tends to be deprecated.

### Npm packages
Name | Usage
isomorphic-fetch | fetch API polyfill for HTTP requests
lodash | Helpers and functionnal programming
moment | Time management

### React specific packages

Name | Usage | Doc
react-router | Router | [https://github.com/ReactTraining/react-router/tree/master/docs]()
redux | State container ~ Flux architecture implementation | [http://redux.js.org/]()
redux-thunk | Handle async with redux
storybook | Visual development | 

### Testing
Name | Usage | Doc
chai | Assertion lib (especially using assert) | [http://chaijs.com/api/assert/]()
enzyme | React testing
sinon | Stubbing, spying

### Dev
Name | Usage
eslint | Linting
eslint-plugin-react | Linting jsx

## Introduction

Please note that this Readme is also a boilerplate itself, like in the Inception movie.

Chaudière Plaque is a wonderful Meteor React boilerplate, imagined and developped by [Eric Burel and Anne-Cécile Lebrun](http://www.lebrun-burel.com).

## Usage

Describe a typical user workflow here.

## Installation

## Folder structure

The folder structure mostly respect the official Meteor styleguide, that can be
found here : [https://guide.meteor.com/structure.html]().

### Client side
#### core
The `core` folder contains all components, higher order components, and more broadly
files that can be used throughout the app (styles, external libs, basic routes).

Here the core is pretty simple, however it definitely should be splitted in more
modules when a project needs a lot of low-level custom modules.

#### static

The `static` folder contains static pages, such as the 404 error or legal terms.

#### users

The `users` module handles authentication, signup and so on. It is mainly inspired
by the `accounts-ui` module for Meteor, but uses React and Material-ui.

## Boilerplate code from CP

We use a custom Meteor/React boilerplate app to start any project. The `sync` remote points to the public directory containing this boilerplate ; the local `github` branch points to `sync/master`.
Feel free to propose change and improvements.

See **[https://github.com/lebrun-burel/chaudiere-plaque]()** for more details.

**Note : the more the application evolves, the more conflicts there can be
between the boilerplate and the app.**
Therefore, this procedure is only here for the developper's information and should only be applied very carefully.
```
git checkout github
git pull
git checkout master
git rebase github
```



## Environments : dev, staging and production
### Environment variables

Environment variables are set programmatically on startup, using the settings
file. This way, the developper can still set some environment variables,
even when the environment itself is not reachable.

Typically, this makes loading the app on Amazon EC2 instances far easier.
**The settings file must however be kept apart from the version manager !**

Usually, it is stored in a `.deploy` hidden folder. It can then be loaded on
startup with the command `meteor run --settings .deploy/mySettings.json`.
If you are using Meteor Up, `mup` will take care of that itelf.


### Staging environment on Heroku

[https:/chaudiere-plaque.herokuapp.com]()

To push the `dev` branch
`git push --force heroku dev:master`

### Production environment
