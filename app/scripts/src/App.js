import React, {Component} from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Home, NewPalette, Settings, About} from './Containers'

export default class App extends Component {
  render () {
    return (
      <Router>
        <div className='app'>
          <h1>Palette Ballot</h1>

          <Route exact path='/' component={Home} />
          <Route path='/new-palette' component={NewPalette} />
          <Route path='/settings' component={Settings} />
          <Route path='/about' component={About} />
        </div>
      </Router>
    )
  }
}
