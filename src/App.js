import React from 'react'
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import 'boxicons';
import { UserProvider } from './contexts/UserContext/UserContext';
import routes from './routes/routes';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => <Route key={index} path={route.to} element={route.element} />)}
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
