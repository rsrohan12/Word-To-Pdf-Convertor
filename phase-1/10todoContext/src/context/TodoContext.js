import {createContext, useContext} from "react"

export const TodoContext = createContext({
    todos: [     // created an array and create an objects in it
        {
            id: 4,   // random id
            todo: "Todo message",
            completed: false,
        },
    ],
    addTodo: (todo) => {},
    updatedTodo: (id, todo) => {},
    deletedTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)  // we have to put the context in useContext for access the values created in TodoContext
}

export const TodoProvider = TodoContext.Provider