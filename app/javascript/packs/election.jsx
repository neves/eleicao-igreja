import React from 'react'
import Candidate from './candidate'

export default class Election extends React.Component {
  state = {
    votes: {}
  }

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

        <button
          onClick={this.submit}
          disabled={this.disabled()}
          className="btn btn-lg btn-success btn-block"
        >
          Votar
        </button>
      </div>
    )
  }

  disabled() {
    return Object.keys(this.state.votes).length !== this.props.roles.length
  }

  submit = () => {
    fetch('/election', {
      credentials: 'same-origin',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.votes)
    }).then(() => location.reload())
  }

  votar(role_id, candidate_id) {
    const votes = Object.assign({}, this.state.votes)

    if (candidate_id) {
      votes[role_id] = candidate_id
    } else {
      delete votes[role_id]
    }

    this.setState({ votes })
  }
}
