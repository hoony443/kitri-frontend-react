import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    movies : []
};

const MovieSlice = createSlice({
    name: "movie",
    initialState : initialState,
    reducers: {
        updateMoviestore: (state , action) => {
            console.log(action)
            return (state = {
                ...state,
                ...action.payload
            })
        },
        resetMoviestore : (state, action) => {
            return initialState
        }
    }
});

export const {updateMoviestore , resetMoviestore} = MovieSlice.actions;
console.log(MovieSlice.actions)
export default MovieSlice.reducer;
console.log(MovieSlice.reducer)

// toolkit