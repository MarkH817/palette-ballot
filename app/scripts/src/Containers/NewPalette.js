import React, {Component} from 'react'
import Page from './Page'
import PaletteCreate from '../Components/PaletteCreate'

export default class NewPalette extends Component {
  render () {
    return (
      <Page section='new-palette' title='New Palette'>
        <section className='create-palette'>
          <PaletteCreate />
        </section>
      </Page>
    )
  }
}
