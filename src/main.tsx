import './App.css';
import React from 'react'
import ReactDOM from 'react-dom/client';
import HomePage from './pages/HomePage.tsx'
import ErrorPage from './pages/ErrorPage.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MenuBar from './components/MenuBar.tsx';
import ResumePage from './pages/ResumePage.tsx';
import AboutPage from './pages/AboutPage.tsx';

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  { 
    path: '/resume', 
    element: <ResumePage />
  },
  { 
    path: '/about', 
    element: <AboutPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MenuBar />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
