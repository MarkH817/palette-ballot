import React, {Component} from 'react'
import Palette from './Palette'
import {Clipboard} from '../utils'

export default class PaletteList extends Component {
  constructor (props) {
    super(props)
    this.hexToClipboard = this.hexToClipboard.bind(this)
  }

  hexToClipboard (colorCode) {
    Clipboard.write('clipboard', colorCode, (err) => {
      if (err) {
        console.error(err)
      } else {
        console.log(`I'm seeing ${colorCode}`)
      }
    })
  }

  list () {
    return this.props.list.map((palette) => (
      <Palette key={palette.id} title={palette.title} colors={palette.colors} clipboard={this.hexToClipboard} />
    ))
  }

  render () {
    return (
      <section className='palette-list'>
        <input type='text' style={{display: 'block'}} id='clipboard' />
        {this.list()}
      </section>
    )
  }
}
