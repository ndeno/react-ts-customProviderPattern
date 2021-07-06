import React from "react";
import {useAddTodo} from "../context/TodoContext";

const AddTodo = (): JSX.Element => {
  const addTodoToList = useAddTodo(); 
  
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault(); 
    const target = e.target as typeof e.target & {
      todo: { value: string };
    };
    
    addTodoToList( target?.todo?.value); 
  
  }; 

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="todo" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      
    </div>
  );
};

export { AddTodo };
