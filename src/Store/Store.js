import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState={
    questions:[]
};

const questionSlice = createSlice({
    name: "question",
    initialState,
    reducers: {
        addQuestion: (state, action) => {
            state.questions.push(action.payload);
          }
    }
});

export const store = configureStore({
    reducer:questionSlice.reducer
});

export const questionActions=questionSlice.actions;
