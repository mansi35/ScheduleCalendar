import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { useDispatch } from 'react-redux';
import ScheduleCalendar from './components/ScheduleCalendar/ScheduleCalendar';
import { getSchedule } from './actions/schedule';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSchedule('61dc6f4fc1bda153fb673470'));
  }, []);

  return (
    <SnackbarProvider maxSnack={3}>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<ScheduleCalendar />} />
          </Routes>
        </div>
      </Router>
    </SnackbarProvider>
  );
}

export default App;
