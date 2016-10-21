// not necessary as we use Flow Router
/*import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'

import App from './core/components/App.jsx'*/

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

Meteor.startup(() => {
  /*render(
    <App />,
     document.body
   )*/
})
