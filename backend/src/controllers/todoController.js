import { Todo } from "../db/models";

/**
 * Create a Todo and save it in the DB
 */
export const createTodo = async (req, res) => {
  const value = req.body.value;
  const todo = await Todo.create({
    value,
    completed: false
  })
  res.json({ todoId: todo.id });
};

/**
 * Retrieve all todos
 */
export const retrieveTodos = async (req, res) => {
  const todos = await Todo.findAll();
  // Strip todos so that we send minimal information to client
  const strippedTodos = todos.map(todo => ({
    id: todo.id,
    value: todo.value,
    completed: todo.completed
  }));
  console.log(strippedTodos);
  res.json(strippedTodos);
};

/**
 * Toggle todo completed status
 */
export const updateTodo = async (req, res) => {
  const todoId = req.body.todoId;
  const todoToUpdate = await Todo.findByPk(todoId);
  await todoToUpdate.update({ completed: !todoToUpdate.completed });
  res.send(`completed status switched to ${todoToUpdate.completed}`);
}
