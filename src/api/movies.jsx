import axios from 'axios'
import { setMovies } from '../slices/movieSlice';
export const getMovies = () => async (dispatch) => {
  const url = 'https://imdb236.p.rapidapi.com/api/imdb/top250-movies';
  const options = {
    method: 'GET',
    headers: {
      // 'x-rapidapi-key': '2b44595a3cmsh3a2602675dc936ep1e7823jsn39b40e392794', //authenticates request and allows to access the API.
      // 'x-rapidapi-host': 'imdb236.p.rapidapi.com' // tells RapidAPI which API you want to communicate with.
      'x-rapidapi-key': 'f2e6ba4bbemsh8f22a1f8e5bacdcp105b7cjsn516916dfa671',
		  'x-rapidapi-host': 'imdb236.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.get(url, options);
    const data = await response.data;
    dispatch(setMovies(data))
  } catch (err) {
    console.error(err);
  }
};