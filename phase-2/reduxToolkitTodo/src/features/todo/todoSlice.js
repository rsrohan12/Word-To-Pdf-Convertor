import {createSlice, nanoid} from "@reduxjs/toolkit" // nanoid generates random id

const initialState = {
    todos: [{
        id: 1,
        text: "welcome"
    }]
}

export const todoSlice = createSlice({  // takes objects in it
    name: "todo",
    initialState, // we can create objects in this here but we call that func. here
    reducers: {    // reducers is like a functionality takes properties 
        addTodo: (state, action) => { // always take state and action like useState
            const todo = {
                id: nanoid(),
                text: action.payload  // to enter the new text by user
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload) // access for each value and if no match then it'll be removed 
        },

    }  
    
}) 

export const {addTodo, removeTodo} = todoSlice.actions  // we have to export and then get the values from actions

export default todoSlice.reducer // we have to export like this 