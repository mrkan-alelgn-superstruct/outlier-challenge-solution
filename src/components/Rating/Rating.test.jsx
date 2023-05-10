import React from 'react'
import ReactDOM from 'react-dom'
import Rating from './Rating'

it('renders without crashing', () => {// eslint-disable-line
  const div = document.createElement('div')
  ReactDOM.render(<Rating difficulty='hard' />, div)
  ReactDOM.unmountComponentAtNode(div)
})
