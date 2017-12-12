import React from 'react'
import PropTypes from 'prop-types'
import Candidate from './candidate'

export default class Election extends React.Component {
  state = {}
  render() {
    return (
      <div>
        <h4>Escolha seu candidato para cada cargo abaixo:</h4>
        <div className="card mt-3 mb-3 text-white bg-info">
          <div className="card-body">
            {this.props.roles.map(role => (
              <Candidate
                key={role.id}
                role={role.title}
                onChange={candidate_id => this.votar(role.id, candidate_id)}
                candidates={role.candidates}
              />
            ))}
          </div>
        </div>
        <button className="btn btn-lg btn-success btn-block">Votar</button>
      </div>
    )
  }

  votar(role_id, candidate_id) {
    console.log(role_id, candidate_id)
  }
}
