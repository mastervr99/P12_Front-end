import './App.scss'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Error_Page from './pages/error_page/error_page';
import Employee_list from './pages/employee_list/employee_list';

function App() {
    return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employee-list" element={<Employee_list />} />
            <Route path="*" element={<Error_Page />} />
          </Routes>
        </Router>
      );
}

export default App