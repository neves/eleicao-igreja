import React from 'react'
import PropTypes from 'prop-types'
import Candidate from './candidate'

export default class Election extends React.Component {
  render() {
    return (
      <div>
        <h4>Escolha seu candidato para cada cargo abaixo:</h4>
        <hr />
        <Candidate
          onChange={id => console.log(id)}
          role="Presidente"
          candidates={[
            { value: 1, label: 'Marcos Neves' },
            { value: 2, label: 'João Paulo' },
            { value: 3, label: 'Maria Lúcia' }
          ]}
        />
      </div>
    )
  }
}
