const repository = require("../../src/repository/todo");

describe("TODO repository", () => {
  it("should return the todo list", async () => {
    const expected = {
      todos: [
        {
          task: "This is a todo example",
        },
      ],
    };
    const actual = await repository.getTodos();
    expect(actual).toEqual(expected);
  });
  it("should add a todo to the list", async () => {
    const newTodo = {
      task: "New todo item",
    };
    const expected = {
      todos: [
        {
          task: "This is a todo example",
        },
        {
          task: "New todo item",
        },
      ],
    };
    const actual = await repository.addTodo(newTodo);
    expect(actual).toEqual(expected);
  });
});
