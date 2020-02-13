import { Todo } from "../db/models";

export const createTodo = (req, res) => {
  // Something from the user
  const value = req.body.value;
  console.log(value);
  console.log(req.body);
  return Todo.create({
    value,
    completed: false
  }).then(() => {
    res.send("success! value is: " + value);
  });
};
