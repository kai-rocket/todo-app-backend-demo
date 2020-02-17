import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, value }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {value}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired
}

export default Todo