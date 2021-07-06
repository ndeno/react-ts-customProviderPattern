import React from "react";
import {useTodos, useRemoveTodo} from "../context/TodoContext";

const TodoList = (): JSX.Element => {
  const todos = useTodos(); 
  const remove = useRemoveTodo(); 

  const handleOnClick = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const item = (event.currentTarget.getAttribute('data-item')) as string; 

    remove(item); 
  };

  return (
    <div>
      <h3>Todos</h3>
      <ul>
        {todos.map((todoItem, index) => (
          <li 
            key={index}
          >
            {`${index + 1}: ${todoItem} `} 
            <span 
              data-item={todoItem}
              onClick={handleOnClick}
            >
              X
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { TodoList };
