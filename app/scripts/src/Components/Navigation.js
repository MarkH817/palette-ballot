import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Navigation extends Component {
  render () {
    let location = this.props.location

    let atHome = location === 'home' ? 'current' : ''
    let atNewPallette = location === 'new-palette' ? 'current' : ''
    let atSettings = location === 'settings' ? 'current' : ''
    let atAbout = location === 'about' ? 'current' : ''

    return (
      <nav>
        <Link className={atHome} to='/'>Home</Link>
        <Link className={atNewPallette} to='/new-palette'>New Palette</Link>
        <Link className={atSettings} to='/settings'>Settings</Link>
        <Link className={atAbout} to='/about'>About</Link>
      </nav>
    )
  }
}
