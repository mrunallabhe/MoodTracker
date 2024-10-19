import React, { useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Calendar from './Calendar';
import MoodChart from './MoodChart';

const App = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [moods, setMoods] = useState({}); // Store moods with dates

    const handleMoodSelect = (date, selectedMood) => {
        const newDate = new Date(date);
        setMoods(prevMoods => ({
            ...prevMoods,
            [newDate.toDateString()]: selectedMood
        }));
    };

    return (
        <Router>
            <div className="app-container">
                <header className="app-header">
                    <h1 className="app-title">Mood Tracker</h1>
                </header>
                <div className="link-container">
                    {/* Link to the mood chart page */}
                    <Link to="/mood-chart" className="mood-chart-button">
                        View Mood Chart
                    </Link>
                </div>

                <Routes>
                    {/* Route for the Calendar view */}
                    <Route
                        path="/"
                        element={
                            <Calendar
                                selectedDate={selectedDate}
                                onDateChange={setSelectedDate}
                                moods={moods}
                                onMoodSelect={handleMoodSelect}
                            />
                        }
                    />
                    {/* Route for the MoodChart */}
                    <Route path="/mood-chart" element={<MoodChart moods={moods} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
