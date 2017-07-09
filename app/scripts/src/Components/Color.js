import React, {Component} from 'react'

export default class Color extends Component {
  constructor (props) {
    super(props)
    this.select = this.select.bind(this)
    this.focus = this.focus.bind(this)
  }

  select () {
    console.log(`Color Selected: #${this.props.code}`)
  }

  focus () {
    console.log(`Color Focused: #${this.props.code}`)
  }

  render () {
    let bgStyle = {
      backgroundColor: `#${this.props.code}`
    }

    let classes = this.props.min ? 'swatch min' : 'swatch'

    return (
      <button style={bgStyle} className={classes} onFocus={this.focus} onClick={this.select}>
        {this.props.min ? (
          null
        ) : (
          <section className='text'>
            #{this.props.code}
          </section>
        )}
      </button>
    )
  }
}
