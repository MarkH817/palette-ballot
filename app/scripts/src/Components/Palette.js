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
  // 4027276806

  toggleActive () {
    this.setState(prevState => ({active: !prevState.active}))
  }

  render () {
    let colors = this.props.colors.map(color => {
      return <Color key={color.id} code={color.code} min={!this.state.active} />
    })

    return (
      <div className='palette'>
        <button className='title' onClick={this.toggleActive}>
          <h2>
            {this.state.active ? '>' : ''} {this.props.title}
          </h2>
        </button>

        <div className='color-range'>
          {colors}
        </div>
      </div>
    )
  }
}
