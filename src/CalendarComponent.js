import React, { useState } from 'react';

const CalendarComponent = ({ onAddMood }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedMood, setSelectedMood] = useState('');

    const moodOptions = ['😊', '😐', '😢']; // Define your mood emojis

    const handleSelectMood = (date) => {
        const moodEntry = {
            date: new Date(date),
            mood: selectedMood,
        };
        onAddMood(moodEntry);
        setSelectedMood(''); // Reset selected mood after adding
    };

    return (
        <div>
            <h2>Select a Mood for {selectedDate.toDateString()}</h2>
            <input
                type="date"
                value={selectedDate.toISOString().split('T')[0]}
                onChange={(e) => setSelectedDate(new Date(e.target.value))}
            />
            <div>
                {moodOptions.map((mood, index) => (
                    <button key={index} onClick={() => setSelectedMood(mood)}>
                        {mood}
                    </button>
                ))}
            </div>
            <button onClick={() => handleSelectMood(selectedDate)}>Add Mood</button>
        </div>
    );
};

export default CalendarComponent;
