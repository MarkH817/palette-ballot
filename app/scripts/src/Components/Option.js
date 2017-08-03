import React, {Component} from 'react'

export default class Option extends Component {
  render () {
    let Input

    /*
    props:
    - type (string)
    - label (string)
    - name (string)
    - value (string, boolean)
    - values (string)
    - handleChange (function)
    */

    switch (this.props.type) {
      case 'dropdown':
        Input = (
          <label>
            {this.props.label}

            <select name={this.props.name} value={this.props.value}>
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
            <input name={this.props.name} checked={this.props.value} type='checkbox' />
            {this.props.label}
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
