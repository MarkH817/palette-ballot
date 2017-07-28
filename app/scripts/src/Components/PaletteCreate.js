import React, {Component} from 'react'

export default class PaletteCreate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      size: 5,
      color0: 'ffffff',
      color1: 'ffffff',
      color2: 'ffffff',
      color3: 'ffffff',
      color4: 'ffffff'
    }

    this.handleChange = this.handleChange.bind(this)
    this.makeInputs = this.makeInputs.bind(this)
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
      <form>
        {this.makeInputs()}
      </form>
    )
  }
}
