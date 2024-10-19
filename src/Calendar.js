import React from 'react';

const Calendar = ({ selectedDate, onDateChange, moods, onMoodSelect }) => {
    const emojiOptions = ['😊', '😔', '😡', '😢', '😂', '😐'];

    const handleDateClick = (event) => {
        const newDate = new Date(event.target.value);
        onDateChange(newDate); // Update the selected date
    };

    const handleEmojiClick = (emoji) => {
        onMoodSelect(selectedDate, emoji); // Update mood for the selected date
    };

    return (
        <div className="calendar-container">
            <h2 className="calendar-title">Select a Date</h2>
            <input 
                type="date" 
                className="calendar-input"
                onChange={handleDateClick} 
                value={selectedDate.toISOString().split('T')[0]} 
            />
            <h2 className="calendar-title">Select a Mood</h2>
            <div className="emoji-grid">
                {emojiOptions.map((emoji, index) => (
                    <button
                        key={index}
                        className={`emoji-button ${
                            moods[selectedDate.toDateString()] === emoji ? 'selected' : ''
                        }`}
                        onClick={() => handleEmojiClick(emoji)}
                    >
                        {emoji}
                    </button>
                ))}
            </div>
            <div className="mood-display">
                <h3>Mood for {selectedDate.toDateString()}:</h3>
                <p>{moods[selectedDate.toDateString()] || 'No mood selected'}</p>
            </div>
        </div>
    );
};

export default Calendar;
