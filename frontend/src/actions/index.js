
let nextTodoId = 0
export const addTodo = value => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  value
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const requestTodos = () => ({
  type: 'REQUEST_TODOS'
})

export const receiveTodos = todos => ({
  type: 'RECEIVE_TODOS',
  todos,
})

export const fetchTodos = () => dispatch => {
  dispatch(requestTodos());
  return fetch('http://localhost:4000/todos/retrieve')
    .then(response => {
      console.log(response);
      return response.json()
    })
    .then(todos => {
      console.log(todos);
      return dispatch(receiveTodos(todos))
    })
}

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}