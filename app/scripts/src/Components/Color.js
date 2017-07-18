import React, {Component} from 'react'

export default class Color extends Component {
  constructor (props) {
    super(props)
    this.select = this.select.bind(this)
    this.focus = this.focus.bind(this)
  }

  select () {
    if (this.props.clipboard) {
      this.props.clipboard(this.props.code)
    }
  }

  focus () {
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
