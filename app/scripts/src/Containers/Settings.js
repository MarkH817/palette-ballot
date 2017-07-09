import React, {Component} from 'react'
import Page from './Page'

export default class Settings extends Component {
  render () {
    return (
      <Page section='settings' title='Settings'>
        <section className='category'>
          <h2>Palette</h2>

          <section className='option-list'>
            <section className='option'>
              <label>
                <input type='checkbox' />
                Greetings
              </label>
            </section>

            <section className='option'>
              <label>
                Greetings</label>:
              <button>Push</button>
            </section>
          </section>
        </section>

        <section className='category'>
          <h2>Clipboard</h2>

          <section className='option-list'>
            <section className='option'>
              <label>Greetings</label>:
              <button>Push</button>
            </section>
          </section>
        </section>

        <section className='category'>
          <h2>Notifications</h2>

          <section className='option-list'>
            <section className='option'>
              <label>Greetings</label>:
              <button>Push</button>
            </section>
          </section>
        </section>
      </Page>
    )
  }
}
