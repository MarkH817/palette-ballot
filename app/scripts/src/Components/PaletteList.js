import React, {Component} from 'react'
import Palette from './Palette'

export default class PaletteList extends Component {
  list () {
    return this.props.list.map((palette) => (
      <Palette key={palette.id} title={palette.title} colors={palette.colors} />
    ))
  }

  render () {
    return (
      <section className='palette-list'>
        {this.list()}
      </section>
    )
  }
}
