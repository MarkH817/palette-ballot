import React, {Component} from 'react'
import data from '../data.json'
import Page from './Page'
import Palette from '../Components/Palette'

export default class Home extends Component {
  render () {
    let palettes = data.palettes.map(palette => {
      return <Palette key={palette.id} title={palette.title} colors={palette.colors} />
    })

    return (
      <Page section='home' title='Home'>
        <section className='palette-list'>
          {palettes}
        </section>
      </Page>
    )
  }
}
