# Chaudière Plaque


## Introduction

### Welcome
Please note that this Readme is also a boilerplate itself, like in the Inception movie.

Chaudière Plaque is a wonderful Meteor React boilerplate, imagined and developped by [Eric Burel and Anne-Cécile Lebrun](http://www.lebrun-burel.com).

### Some explanations

This boilerplate comes from our experience with React and Meteor. Here are the
explanations of some of our choices.

#### React-router

Client-side routing should be handled by a client side router. Using Flow-Router
does not make sense here, since it is a Meteor related router.

#### No styling lib

Styling is handled by a `css` file, written in `sass`. End of sentence.
React inline styling, jss, Radium etc. are interesting concepts, but they
are absolutely not suited to a production application.

Indeed, graphists needs to be able to rely on understandable language that they
can work with. In addition, in order to optimize styling, browsers to needs
to rely in a commonly understood language.

However, any library that respect those principles (for example any lib
that imports the `.css` file class names in a POJO to help styling)
and that is both mature and
maintained could be added to this boilerplate in the future.

#### No Typescript

Strong-typing is not really relevant in a small-to-medium web app context.
If strong-typing is needed (algorithm implementation for example),
switching to Elm or Scala could be more relevant.

#### Global routes

Eventhough routing is usually specific to each component, in practice having
routes in different places is more annoying. This is not a definitive choice.


## Folder structure

The folder structure mostly respect the official Meteor styleguide, that can be
found here : [https://guide.meteor.com/structure.html]().

### /both

Contains isomorphic modules and non-sensitive methods.


### /client
#### core
The `core` folder contains all components, higher order components, and more broadly
files that can be used throughout the app (styles, external libs, basic routes).

Here the core is pretty simple, however it definitely should be splitted in more
modules when a project needs a lot of low-level custom modules.


#### Layouts

The responsive layouts of the app.

#### Navigation

Menus, route listeners, route models.

#### statics

The `statics` folder contains static pages, such as the 404 error or legal terms.

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

To push the `dev` branch
`git push --force heroku dev:master`

### Production environment


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
