import { configureStore } from "@reduxjs/toolkit";
import QuestionsSlice from "./reducer/QuestionsSlice";

const store = configureStore({
    reducer : {
        questions: QuestionsSlice,
    }
});

export default store;