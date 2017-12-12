import React from 'react'
import Select from './select'

export default class Candidate extends React.Component {
  render() {
    return (
      <div className="form-group">
        <h5>{this.props.role}</h5>
        <Select
          list={this.props.candidates}
          onChange={id => this.props.onChange(id)}
        />
      </div>
    )
  }
}
