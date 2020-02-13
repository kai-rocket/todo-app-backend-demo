import { Todo } from "../db/models";

/**
 * Create a Todo and save it in the DB
 */
export const createTodo = (req, res) => {
  const value = req.body.value;
  return Todo.create({
    value,
    completed: false
  }).then(() => {
    res.send("success! value is: " + value);
  });
};
