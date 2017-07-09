import React, {Component} from 'react'
import Navigation from '../Components/Navigation'

export default class Page extends Component {
  render () {
    return (
      <div className={this.props.section}>
        <Navigation location={this.props.section} />

        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}
