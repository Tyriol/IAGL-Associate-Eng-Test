const fs = require("fs").promises;
const path = require("path");

const DATA_FILE = path.join(__dirname, "todos.json");

// Initialize with default todo if file doesn't exist
const defaultTodoList = {
  todos: [],
};

async function loadTodos() {
  try {
    const data = await fs.readFile(DATA_FILE, "utf8");
    return JSON.parse(data);
  } catch (error) {
    // If file doesn't exist, create it with default data
    if (error.code === "ENOENT") {
      await saveTodos(defaultTodoList);
      console.log("Todo list created successfully");
      return defaultTodoList;
    }
    throw error;
  }
}

async function saveTodos(todos) {
  await fs.writeFile(DATA_FILE, JSON.stringify(todos, null, 2), "utf8");
  return todos;
}

module.exports = {
  getTodos: async () => {
    return await loadTodos();
  },

  addTodo: async (todo) => {
    const todoList = await loadTodos();
    todoList.todos.push(todo);
    return await saveTodos(todoList);
  },

  deleteTodoList: async () => {
    try {
      await fs.unlink(DATA_FILE);
      return { message: "Todo list deleted successfully" };
    } catch (error) {
      if (error.code === "ENOENT") {
        return { message: "Todo list already deleted" };
      }
      throw error;
    }
  },
};
