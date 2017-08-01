import React, {Component} from 'react'
import {storage} from '../utils'

export default class PaletteCreate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      size: 5,
      color0: '',
      color1: '',
      color2: '',
      color3: '',
      color4: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.makeInputs = this.makeInputs.bind(this)
  }

  handleSubmit (event) {
    let id = Date.now()
    let title = this.state.title || Date.now()
    let colors = []
    for (let i = 0; i < this.state.size; i++) {
      let code = this.state[`color${i}`]

      if (code && code.length === 6) {
        colors.push({
          id: i,
          code: code
        })
      }
    }

    if (colors.length === 0) {
      return
    }

    let palette = {
      id,
      title,
      colors
    }

    storage.addPalette(palette, (err) => {
      if (err) {
        console.error(err)
      } else {
        console.log('Success!')
      }
    })

    event.preventDefault()
  }

  handleChange (event) {
    const name = event.target.name
    const value = event.target.value.split('#').join('')

    this.setState({
      [name]: value
    })
  }

  makeInputs () {
    let inputs = []

    for (let i = 0; i < this.state.size; i++) {
      let name = `color${i}`
      let code = this.state[name]

      let input = (
        <section className='new-color' key={i}>
          <span>#<input type='text' name={name} value={code} onChange={this.handleChange} /></span>
          <input type='color' name={name} value={`#${code}`} onChange={this.handleChange} />
        </section>
      )

      inputs.push(input)
    }

    return inputs
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input id='title' type='text' name='title' placeholder='New Palette Title' value={this.state.title} onChange={this.handleChange} />

        {this.makeInputs()}

        <input id='save' type='submit' value='Save' />
      </form>
    )
  }
}
