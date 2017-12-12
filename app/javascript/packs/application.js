import ReactDOM from 'react-dom'
import Election from './election'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(Election(), document.getElementById('election'))
})
