# Chaudière Plaque

## Installation

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
