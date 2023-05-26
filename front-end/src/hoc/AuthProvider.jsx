import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function AuthProvider({ children }) {
 const dispatch = useDispatch();

 useEffect(() => {
  fetch();
 }, []);

 function fetch() {
  const user = JSON.parse(localStorage.getItem('auth'));

  if (user?.email) {
   dispatch({
    type: 'login',
    payload: user
   });
  }
 }

 return children;
}
