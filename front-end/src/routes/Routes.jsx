import Profile from '../components/Profile';
import ChangePasswordPage, {
 ChangePasswordPage2
} from '../pages/ChangePasswordPage';
import CityPage from '../pages/CityPage';
import EditProfilePage from '../pages/EditProfile';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import MovieDetailPage from '../pages/MovieDetailPage';
import RegisterPage from '../pages/RegisterPage';
import SeatPage from '../pages/SeatPage';
import TheaterMoviePage from '../pages/TheaterPage';
import TransactionPage from '../pages/TransactionPage';
import UpComingPage from '../pages/UpComingPage';
import ProtectedPage from './ProtectedPage';
import { Route } from 'react-router-dom';

const routes = [
 <Route
  path="login"
  key={'loginpage'}
  element={
   <ProtectedPage guestOnly={true}>
    <LoginPage />{' '}
   </ProtectedPage>
  }
 />,
 <Route
  path="register"
  key={'registerpage'}
  element={
   <ProtectedPage guestOnly={true}>
    <RegisterPage />{' '}
   </ProtectedPage>
  }
 />,
 <Route
  path="/profile/edit"
  key={'editprofile'}
  element={
   <ProtectedPage needLogin={true}>
    <EditProfilePage />{' '}
   </ProtectedPage>
  }
 />,
 <Route
  path="/movies/:title"
  key={'moviedetail'}
  element={
   <ProtectedPage guestOnly={true}>
    <MovieDetailPage />
   </ProtectedPage>
  }
 />,
 <Route
  path="/movies/:id/theaters/:theater/seat"
  key={'seat'}
  element={
   <ProtectedPage needLogin={true}>
    <SeatPage />
   </ProtectedPage>
  }
 />,
 <Route
  path="/Transactions"
  key={'transaction'}
  element={
   <ProtectedPage needLogin={true}>
    <TransactionPage />
   </ProtectedPage>
  }
 />,

 <Route
  path="/movies/:id/theaters/:theater"
  key={'movie-theater'}
  element={
   <ProtectedPage guestOnly={true}>
    <TheaterMoviePage />
   </ProtectedPage>
  }
 />,
 <Route
  path="profile"
  key={'profilepage'}
  element={
   <ProtectedPage needLogin={true}>
    <Profile />{' '}
   </ProtectedPage>
  }
 />,
 <Route
  path="/home"
  key={'home'}
  element={
   <ProtectedPage guestOnly={true}>
    <HomePage />
   </ProtectedPage>
  }
 />,
 <Route
  path="/list-city"
  key={'city'}
  element={
   <ProtectedPage guestOnly={true}>
    <CityPage />
   </ProtectedPage>
  }
 />,
 <Route
  path="/upcoming"
  key={'upcoming'}
  element={
   <ProtectedPage guestOnly={true}>
    <UpComingPage />
   </ProtectedPage>
  }
 />,

 <Route
  path="/forgot-password"
  key={'upcoming'}
  element={
   <ProtectedPage guestOnly={true}>
    <ForgotPasswordPage />
   </ProtectedPage>
  }
 />,

 <Route
  path="/change-new-password/:token"
  key={'change-password'}
  element={
   <ProtectedPage guestOnly={true}>
    <ChangePasswordPage />
   </ProtectedPage>
  }
 />,

 <Route
  path="/change-password"
  key={'change-password'}
  element={
   <ProtectedPage guestOnly={true}>
    <ChangePasswordPage2 />
   </ProtectedPage>
  }
 />,
 <Route
  path="/*"
  key={'redirect'}
  element={<ProtectedPage guestOnly={true} needLogin={true}></ProtectedPage>}
 />
];

export default routes;
