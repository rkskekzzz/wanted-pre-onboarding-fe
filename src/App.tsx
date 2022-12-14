import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Sign, Todo, PageNotFound } from 'src/pages';
import './App.css';

const ProtectedRoute = () => {
  if (!window.localStorage.getItem('todoAuthToken')) {
    return <Navigate to="/auth" replace />;
  }
  return <Outlet />;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Sign />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Todo />} />
        </Route>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
