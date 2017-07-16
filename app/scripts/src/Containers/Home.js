import React, {Component} from 'react'
import Page from './Page'
import Palette from '../Components/Palette'
import {Storage} from '../utils'

export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      palettes: []
    }

    this.loadPalettes()
  }

  loadPalettes () {
    Storage.getPalettes((savedPalettes, err) => {
      if (err) console.error(err)

      this.setState({
        palettes: savedPalettes
      })
    })
  }

  mapPalettes () {
    return this.state.palettes.map((palette) => {
      return <Palette key={palette.id} title={palette.title} colors={palette.colors} />
    })
  }

  render () {
    return (
      <Page section='home' title='Home'>
        <section className='palette-list'>
          {this.mapPalettes()}
        </section>
      </Page>
    )
  }
}
