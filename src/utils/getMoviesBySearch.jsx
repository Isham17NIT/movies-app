const getMoviesBySearch = (movies,value)=>{
    if (movies?.length > 0 && value?.length>0){
        const search = value.toLowerCase();
        return movies.filter(
            movie =>movie.primaryTitle.toLowerCase().includes(search)
        );
    } 
    else{
        return movies;
    }
}
export default getMoviesBySearch