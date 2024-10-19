import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip
} from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const emojiToNumeric = (emoji) => {
    const moodMapping = {
        '😊': 6,
        '😔': 5,
        '😡': 4,
        '😢': 3,
        '😂': 2,
        '😐': 1,
    };
    return moodMapping[emoji] || 0;
};

const numericToEmoji = (value) => {
    const emojiMapping = {
        6: '😊',
        5: '😔',
        4: '😡',
        3: '😢',
        2: '😂',
        1: '😐',
    };
    return emojiMapping[value] || '';
};

const MoodChart = ({ moods }) => {
    const data = {
        labels: Object.keys(moods),  // Dates for x-axis
        datasets: [
            {
                label: 'Mood over Time',
                data: Object.values(moods).map((mood) => emojiToNumeric(mood)),  // Map mood to numeric
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    return (
        <div className="mood-chart-container">
            <h2 className="mood-chart-title">Mood Chart</h2>
            <div className="chart-wrapper">
                <Line
                    data={data}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            y: {
                                beginAtZero: true,
                                ticks: {
                                    stepSize: 1,
                                    callback: function (value) {
                                        return numericToEmoji(value);  // Display emojis on Y-axis
                                    },
                                },
                                min: 1,
                                max: 6,
                            },
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default MoodChart;
