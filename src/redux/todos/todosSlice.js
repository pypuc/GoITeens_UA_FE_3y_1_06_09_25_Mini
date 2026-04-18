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
  },
});

export const { addTodo } = todosSlice.actions;

export const todosReducer = todosSlice.reducer;
