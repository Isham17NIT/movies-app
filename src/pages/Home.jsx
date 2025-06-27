import { useEffect } from "react";
import Navbar from "../components/Navbar"
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../api/movies";
import MovieCard from "../components/MovieCard";
const Home = ()=>{
    const dispatch = useDispatch();
    const { movies } = useSelector(state=>state.movies)
    console.log(movies)
    useEffect(()=>{
        dispatch(getMovies())
    },[])
    return (
        <>
            <Navbar/>
            <div className="flex flex-wrap items-center gap-4 justify-center mt-20">
                {
                    movies.length>0 && movies.map((movie)=>{
                        return <MovieCard key={movie.id} movie={movie}/>
                    })
                }
            </div>
        </>
        
    )
}
export default Home;