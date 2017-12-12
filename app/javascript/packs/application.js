import React from 'react'
import ReactDOM from 'react-dom'
import Election from './election'

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('election')
  const data = JSON.parse(node.getAttribute('data'))
  ReactDOM.render(<Election roles={data} />, node)
})
