import { useEffect } from "react";
import Navbar from "../components/Navbar"
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../api/movies";
import MovieCard from "../components/MovieCard";
import getMoviesBySearch from '../utils/getMoviesBySearch'
const Home = ()=>{
    const dispatch = useDispatch();
    const { movies, searchValue } = useSelector(state=>state.movies)
    
    useEffect(()=>{
        dispatch(getMovies())
    },[])

    const filterByMovieName = getMoviesBySearch(movies,searchValue)

    return (
        <>
            <Navbar/>
            <div className="flex flex-wrap items-center gap-4 justify-center mt-20">
                {
                    filterByMovieName.length>0 ? filterByMovieName.map((movie)=>{
                        return <MovieCard key={movie.id} movie={movie}/>
                    }) : <h2>No movies found</h2>
                }
            </div>
        </>
        
    )
}
export default Home;