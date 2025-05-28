// router.jsx
import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import MyTrips from './pages/myTrips.jsx'; 

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'mytrips',
        element: <MyTrips />, 
      },
    ],
  },
]);
