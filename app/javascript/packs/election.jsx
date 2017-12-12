import React from 'react'
import PropTypes from 'prop-types'

const option = ({ label, value }) => (
  <option key={value} value={value}>
    {label}
  </option>
)

class Candidato extends React.Component {
  render() {
    return (
      <div className="form-group">
        <h5>{this.props.cargo}</h5>
        <select
          className="form-control"
          onChange={e => this.props.onChange(e.target.value)}
        >
          <option />
          {this.props.candidatos.map(option)}
        </select>
      </div>
    )
  }
}

export default props => (
  <div>
    <h4>Escolha seu candidato para cada cargo abaixo:</h4>
    <Candidato
      onChange={id => console.log(id)}
      cargo="Presidente"
      candidatos={[
        { value: 1, label: 'Presidente' },
        { value: 2, label: 'Tesoureiro' },
        { value: 3, label: 'Secretário' }
      ]}
    />
  </div>
)
