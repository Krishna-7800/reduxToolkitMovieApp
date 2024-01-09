import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import MovieApi from '../../common/apis/MovieApi';
import { APIKey } from '../../common/apis/MovieApiKey';






export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',async()=>{
   const movieText = "Harry";
    const response = await MovieApi.get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
    return response.data

 

  

})//third parameter is object, need to study


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
    extraReducers: (builder) => {
        builder
            .addCase(fetchAsyncMovies.pending, (state) => {
                console.log("pending");
            })
            .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
                console.log("fulfilled");
                return { ...state, movies: payload };
            })
            .addCase(fetchAsyncMovies.rejected, (state) => {
                console.log("rejected");
            });
    }
   
})


export const {addMovies,removeMovies}=movieSlice.actions;

export const getAllMovies = (state)=>state.movies.movies//name.movies

export default movieSlice.reducer;