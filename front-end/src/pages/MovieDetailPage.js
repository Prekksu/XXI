import MovieDetail from '../components/MovieDetail';
import { useLocation } from 'react-router-dom';
import { api } from '../api/api';
import { useEffect, useState } from 'react';

export default function MovieDetailPage() {
 const location = useLocation();
 const id = location.pathname.split('/')[2];
 const [movie, setMovie] = useState([]);

 useEffect(() => {
  async function fetch() {
   await api.get('/movies/' + id).then((res) => {
    console.log(res.data);
    setMovie(res.data);
   });
  }
  fetch();
 }, []);

 return (
  <>
   <MovieDetail movie={movie} />
  </>
 );
}
