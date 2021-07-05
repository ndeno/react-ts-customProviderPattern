import * as React from 'react';

enum ACTIONS {
    ADD,
    REMOVE,
    EDIT
}

type Dispatch = (action: ACTIONS) => void
type State = string[]; 
type TodoProviderProps = { children: React.ReactNode }
type TodoContext = { state: State; dispatch: Dispatch } | undefined; 

const TodoStateContext = React.createContext<TodoContext>(undefined);

const TodoReducer = (state: State, action: ACTIONS) => {
    switch (action) {
        case ACTIONS.ADD: {
            return [...state];
        }
        case ACTIONS.REMOVE: {
            return [...state];
        }
        case ACTIONS.EDIT: {
            return [...state];
        }
        default: {
            throw new Error(`Unhandled action type: ${action}`); 
        }
    }
}; 

const TodoProvider = ({ children }: TodoProviderProps): JSX.Element => {
    const [state, dispatch] = React.useReducer(TodoReducer, []);
    
    return (
        <TodoStateContext.Provider value={{
            state, 
            dispatch,
        }}>
            {children}
        </TodoStateContext.Provider>
    );
}; 

const useTodo = (): TodoContext => {
    const context = React.useContext(TodoStateContext);
    if (context === undefined) {
        throw new Error('useTodo must be used within a TodoProvider');
    }
    return context;
}; 

export { TodoProvider, useTodo };