import {createSlice} from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        movies:{}
    },
    reducers:{
        addMovies:(state,action)=>{
            state.movies=action.payload

        },
        removeMovies:(state,action)=>{
            const index = state.findIndex(movie=>movie.id===action.payload.id)
        }

    },
   
})


export const {addMovies,removeMovies}=movieSlice.actions;

export const getAllMovies = (state)=>state.movies.movies//name.movies

export default movieSlice.reducer;