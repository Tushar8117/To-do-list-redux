import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [{id: 1 , text: "Hello world " }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state , action) => {
            const todo = {
                id: nanoid() , 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state , action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        //  updateTodo: (state , action) => {
        //     //   const {id , updatedtext} = action.payload;
        //     //   const todoToupdate = state.find((todo) => todo.id === id);
        //     //   if(todoToupdate){
        //     //      todoToupdate.text = updatedtext;
        //     //   }

        //   state.todos = state.todos.map((todo) => (todo.id === id ? todo: action.payload ) )
        //  },
    }
})

export const {addTodo , removeTodo } = todoSlice.actions

export default todoSlice.reducer