# chaudiere-plaque
A French grade quality Meteor React (opiniated) boilerplate

## Install
```
git clone https://github.com/eric-burel/chaudiere-plaque.git my-new-chaudiere-app
cd my-new-chaudiere-app
npm install
meteor run
```
## Technological choices
### UI : React
### CSS Frameworks
#### Material-ui
Material-ui has a lot of advantages against other Material Design frameworks :

- it is well maintained
- it is complete
- it is meant for react

#### Flexbox Grid
One major issue (or advantage ?) with Material-ui is that it lacks a grid system,
therefore it is often combined with Flexbox Grid.

Flexbox is a minimalistic grid system. As it is based on the flexbox property,
it makes blocks alignement works like a charm.

## Code Style

Code is linted with `eslint`. It is written in ES6, which is handled natively by Meteor 1.3+.
I try to stick to AirBnB coding style. However, I definitely dislike semi-colons. I mean, does someone still code on an 80 character terminal ?
Line jumps exist for a reason. So I don't use semi-colons when they are not necessary.
