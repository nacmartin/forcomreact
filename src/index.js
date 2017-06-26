import React from 'react'
import ReactDOM from 'react-dom'

const dest = document.getElementById('content')

let render = () => {
  const App = require('./App').default
  ReactDOM.render(
      <App/>,
    dest
  )
}

if (module.hot) {
  // Support hot reloading of components
  // and display an overlay for runtime errors
  const renderApp = render
  const renderError = error => {
    const RedBox = require('redbox-react')
    ReactDOM.render(<RedBox error={error} className="redbox" />, dest)
  }
  render = () => {
    try {
      renderApp()
    } catch (error) {
      renderError(error)
    }
  }
  const rerender = () => {
    setTimeout(render)
  }
  module.hot.accept('./App', rerender)
}

render()
