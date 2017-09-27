'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: {
        username: 'Carlos Henrique',
        photo: 'https://avatars2.githubusercontent.com/u/15269663?v=4',
        login: 'Henriquepaisca',
        repos: 9,
        followers: 4,
        following: 8
      },
      repos: [{
        name: 'Repo',
        link: '#'
      }],
      starred: [{
        name: 'Repo',
        link: '#'
      }]
    }
  }

  render () {
    return <AppContent
      userinfo={this.state.userinfo}
      repos={this.state.repos}
      starred={this.state.starred}
    />
  }
}
export default App
