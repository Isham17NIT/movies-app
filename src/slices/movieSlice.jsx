import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    movies: [],
    favorites: []
}
const movieSlice = createSlice({
    name:'movies',
    initialState,
    reducers:{
        setMovies: (state,action)=>{
            state.movies = action.payload
        },
        toggleFavorites:(state,action)=>{
            const curr = state.favorites.find(movie=>movie.id===action.payload.id);
            if(curr) //already in favorites
                state.favorites = state.favorites.filter(movie=>movie.id!==action.payload.id)
            else    
                state.favorites.push(action.payload)
            console.log(state.favorites)
        }
    }
})
export const { setMovies, toggleFavorites }=movieSlice.actions;
export default movieSlice.reducer