import { Todo } from "../db/models";

/**
 * Create a Todo and save it in the DB
 */
export const createTodo = async (req, res) => {
  const value = req.body.value;
  await Todo.create({
    value,
    completed: false
  })
  res.send("success! value is: " + value);
};
