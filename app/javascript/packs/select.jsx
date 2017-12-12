import React from 'react'

const option = ({ label, value }) => (
  <option key={value} value={value}>
    {label}
  </option>
)

export default ({ list, onChange }) => (
  <select className="form-control" onChange={e => onChange(e.target.value)}>
    <option />
    {list.map(option)}
  </select>
)
