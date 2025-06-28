import { useSelector } from "react-redux"
import NavbarFavorites from "../components/NavbarFavorites"
import MovieCard from "../components/MovieCard";
const Favorites = ()=>{
    const { favorites } = useSelector(state=>state.movies)
    return (
        <>
            <NavbarFavorites/>
            <div className="flex flex-wrap items-center gap-4 justify-center mt-20">
                {
                    favorites.length>0 ? favorites.map((movie)=>{
                        return <MovieCard key={movie.id} movie={movie}/>
                    }) : <h2>No movies found</h2>
                }
            </div>
        </>
            
    )
}
export default Favorites