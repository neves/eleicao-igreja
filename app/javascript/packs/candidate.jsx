import React from 'react'
import Select from './select'

function labelValue(o) {
  return {
    label: o.name,
    value: o.id
  }
}

export default class Candidate extends React.Component {
  render() {
    return (
      <div className="form-group">
        <h5>{this.props.role}</h5>
        <Select
          list={this.props.candidates.map(labelValue)}
          onChange={value => this.props.onChange(Number(value))}
        />
      </div>
    )
  }
}
