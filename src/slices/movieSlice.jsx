import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    movies: [],
    favorites: [],
    searchValue: ''
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
        },
        setSearch: (state,action)=>{
            state.searchValue = action.payload
        }
    }
})
export const { setMovies, toggleFavorites, setSearch }=movieSlice.actions;
export default movieSlice.reducer