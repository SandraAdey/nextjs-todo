import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";
import ChangeTodo from "./ChangeTodo";
import { todoType } from "@/types/todoTypes";

const Todo = ({ todo }: { todo: todoType }) => {
  // Check if todo is defined before accessing properties
  if (
    !todo ||
    typeof todo.isCompleted === "undefined" ||
    typeof todo.title === "undefined"
  ) {
    return null; // or handle the case where todo is undefined
  }

  const todoStyle = {
    textDecoration: todo.isCompleted === true ? "line-through" : "none",
    opacity: todo.isCompleted === true ? 0.5 : 1,
  };

  return (
    <div
      className="w-full  flex items-center justify-between bg-blue-100 py-3 px-20 rounded-2xl"
      style={todoStyle}
    >
      <ChangeTodo todo={todo} />
      
      <span className="text-center font case">{todo.title}</span>
      <div className="flex items-center gap-5">
        <EditTodo todo={todo} />
        <DeleteTodo todo={todo} />
      </div>

    </div>
  );
};

export default Todo;
