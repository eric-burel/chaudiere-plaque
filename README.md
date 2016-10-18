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

### Routing : Flow Router
Flow Router is now recommended by the Meteor official guide. We use it with
React Mounter as the layout system
(**Note : ReactLayout is not the preferred solution anymore**)

React-Router is also a sensible solution, it might be useful in the future.
However it sounds a bit weird, so
we preferred the Meteor-Friendly solution to the React-friendly solution here.
Both React-Router and Flow Router have huge communities and are well maintained.

## Code Style

Code is linted with `eslint`. It is written in ES6, which is handled natively by Meteor 1.3+.
I try to stick to AirBnB coding style. However, I definitely dislike semi-colons. I mean, does someone still code on an 80 character terminal ?
Line jumps exist for a reason. So I don't use semi-colons when they are not necessary.
