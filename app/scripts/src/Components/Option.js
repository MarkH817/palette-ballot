import React, {Component} from 'react'

export default class Option extends Component {
  render () {
    let Input

    switch (this.props.type) {
      case 'dropdown':
        Input = (
          <select name={this.props.name} value={this.props.value}>
            {this.props.values.map((val, index) => (
              <option key={index} value={val}>{val}</option>
            ))}
          </select>
        )
        break
      case 'checkbox':
        Input = <input name={this.props.name} checked={this.props.value} type='checkbox' />
        break
      default:
        Input = null
    }

    return (
      <section className='option'>
        <label>
          {this.props.label}
          <Input />
        </label>
      </section>
    )
  }
}
