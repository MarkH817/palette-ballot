import React, {Component} from 'react'
import Page from './Page'
import PaletteList from '../Components/PaletteList'
import {storage} from '../utils'

export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      palettes: []
    }

    this.loadPalettes()
  }

  loadPalettes () {
    storage.getPalettes((savedPalettes, err) => {
      if (err) console.error(err)

      this.setState({
        palettes: savedPalettes
      })
    })
  }

  render () {
    return (
      <Page section='home' title='Home'>
        <PaletteList list={this.state.palettes} />
      </Page>
    )
  }
}
