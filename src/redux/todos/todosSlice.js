import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

// const initialState = [{ id: 1, completed: false, text: "qwe" }];

const todosSlice = createSlice({
  name: "todos",

  initialState: [],

  reducers: {
    addTodo: {
      reducer(state, action) {
        state.push(action.payload);
      },


      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            text,
            completed: false,
          },
        };
      },
    },
    removeTodo: {
      reducer(state, action) {
        return state.filter(todo => todo.id !== action.payload)
      },
      prepare(id) {
        return {
          payload: id
        }
      }
    }
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;

export const todosReducer = todosSlice.reducer;
