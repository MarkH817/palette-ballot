import React, {Component} from 'react'
import Color from './Color'

export default class Palette extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: false
    }
    this.toggleActive = this.toggleActive.bind(this)
  }

  toggleActive () {
    this.setState(prevState => ({active: !prevState.active}))
  }

  list () {
    return this.props.colors.map(color => (
      <Color key={color.id} code={color.code} min={!this.state.active} clipboard={this.props.clipboard} />
    ))
  }

  render () {
    return (
      <section className='palette'>
        <button className='title' onClick={this.toggleActive}>
          <h2>
            {this.state.active ? '>' : ''} {this.props.title}
          </h2>
        </button>

        <section className='color-range'>
          {this.list()}
        </section>
      </section>
    )
  }
}
