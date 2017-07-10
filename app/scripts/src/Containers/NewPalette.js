import React, {Component} from 'react'
import Page from './Page'

export default class NewPalette extends Component {
  render () {
    return (
      <Page section='new-palette' title='New Palette'>
        <section className='create-palette' />
      </Page>
    )
  }
}
