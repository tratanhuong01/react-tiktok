import React from 'react'
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import 'boxicons';
import { UserProvider } from './contexts/UserContext/UserContext';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
