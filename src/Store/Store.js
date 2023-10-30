import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState={
    questions:[],
    quiz:'',
    quizCode:''
};

const questionSlice = createSlice({
    name: "question",
    initialState,
    reducers: {
        addQuestion: (state, action) => {
            state.questions.push(action.payload);
          },
        addQuiz:(state,action)=>{
          state.quiz=action.payload;
        },
        addQuizCode:(state,action)=>
        {
            state.quizCode=action.payload;
        }
       
    }
});

export const store = configureStore({
    reducer:questionSlice.reducer
});

export const questionActions=questionSlice.actions;
