import React, {Component} from 'react'

export default class Option extends Component {
  /*
  props:
  - type (string)
  - text (string)
  - name (string)
  - initValue (string, boolean)
  - values (Array<string>)
  - handleChange (function)
  */

  constructor (props) {
    super(props)
    this.state = {
      value: props.initValue
    }
  }

  render () {
    let Input

    switch (this.props.type) {
      case 'dropdown':
        Input = (
          <label>
            {this.props.text}

            <select name={this.props.name} value={this.state.value}>
              {this.props.values.map((val, index) => (
                <option key={index} value={val}>{val}</option>
              ))}
            </select>
          </label>
        )
        break
      case 'checkbox':
        Input = (
          <label>
            <input name={this.props.name} checked={this.state.value} type='checkbox' />

            {this.props.text}
          </label>
        )
        break
    }

    return (
      <section className='option'>
        {Input}
      </section>
    )
  }
}
