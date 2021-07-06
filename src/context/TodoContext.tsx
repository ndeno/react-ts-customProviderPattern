import * as React from "react";

enum ACTIONS {
  ADD,
  REMOVE,
}

// doesn't need to be discriminated union
type Action =
 | { type: ACTIONS.ADD, payload: string }
 | { type: ACTIONS.REMOVE, payload: string }
type Dispatch = (action: Action) => void
type State = string[];
type TodoProviderProps = { children: React.ReactNode };
type TodoContextType = { 
  state: State; 
  dispatch: Dispatch 
};

const TodoContext = React.createContext<TodoContextType | undefined>(undefined);

const TodoReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ACTIONS.ADD: {
      return [...state, action.payload];
    }
    case ACTIONS.REMOVE: {
      return state.filter((item) => item !== action.payload);
    }
    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }
  }
};

const TodoProvider = ({ children }: TodoProviderProps): JSX.Element => {
  const [state, dispatch] = React.useReducer(TodoReducer, ['Practice Backdash']);

  return (
    <TodoContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

const useTodoContext = (): TodoContextType => {
  const context = React.useContext(TodoContext);
  if (context === undefined) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};

const useTodos = (): string[] => {
  const context = useTodoContext(); 

  return context.state ?? [];
};

const useAddTodo = (): (todo: string) => void => {
  const context = useTodoContext(); 

  return (todo: string) => {
    context.dispatch({type: ACTIONS.ADD, payload: todo}); 
  }; 
}; 

const useRemoveTodo = (): (todo: string) => void => {
  const context = useTodoContext(); 

  return (todo: string) => {
    context.dispatch({type: ACTIONS.REMOVE, payload: todo}); 
  }; 
}; 

export {
  TodoProvider,
  useTodos, 
  TodoContext,
  useAddTodo,
  useRemoveTodo
};
