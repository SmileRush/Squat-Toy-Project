import { AppBar, Toolbar } from '@mui/material';
import React from 'react';
import { Navigate, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import NoticeSnackbar from './components/NoticeSnackbar';
import MainPage from './pages/MainPage';
import HistoryPage from './pages/HistoryPage';

const App = () => {
  const location = useLocation()
  
  return (
    <>
      <AppBar position='fixed'>
        <Toolbar>
          <div className='flex-1'></div>
          <span className='font-bold select-none'>스쿼트 챌린지</span>
          <div className='flex-1 flex justify-end'>
            {location.pathname !== '/history' && (
              <NavLink 
                className = 'select-none'
                to        = '/history'
              >
                히스토리
              </NavLink>
            )}
            {location.pathname === '/history' && (
              <NavLink 
                className = 'select-none'
                to        = '/main'
              >
                이전
              </NavLink>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar  />
      
      <NoticeSnackbar  />
      <Routes>
        <Route path='/main'    element={<MainPage />} />
        <Route path='/history' element={<HistoryPage />} />
        <Route path='*'        element={<Navigate to='/main' />} />
      </Routes>
    </>
  );
};

export default App
// import { Navigate, NavLink, Route, Routes } from "react-router-dom"
// import MainPage from "./pages/MainPage"
// import HistoryPage from "./pages/HistoryPage"
// import Header from './components/Header'

// function App() {

//   return (
//     <>
//       <Header  />
//       <Routes>
//         <Route path='/main' element={<MainPage  />} />
//         <Route path='/history' element={<HistoryPage  />} />
//         <Route path='/*' element={<Navigate to='/main' />} />
//       </Routes>
//     </>
//   )
// }

// export default App
