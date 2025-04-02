import './App.css';
import React, { createContext, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client';
import HomePage from './pages/HomePage.tsx'
import ErrorPage from './pages/ErrorPage.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuBar from './components/MenuBar.tsx';
import ResumePage from './pages/ResumePage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import TodoApp from './pages/TodoApp.tsx';

export const MobileContext = createContext(false);

const MobileProvider = ({children}: {children: React.ReactNode}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <MobileContext.Provider value={isMobile}>
      {children}
    </MobileContext.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MobileProvider>
      <BrowserRouter>
        <MenuBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/todo" element={<TodoApp />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </MobileProvider>
  </React.StrictMode>,
)
