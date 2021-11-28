import React from 'react';
import { useRoutes } from 'react-router-dom';
import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error';

const AppRouter = () => {
  const Routes = [
    { path: '/about', element: <About /> },
    { path: '/posts', element: <Posts /> },
    { path: '/', element: <Posts /> },
    { path: '*', element: <Error /> },
  ];

  const routes = useRoutes(Routes);
  return routes;
};

export default AppRouter;
