import React, { useState } from 'react';

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date()); // Default selected date is today

    const changeMonth = (direction) => {
        const newDate = new Date(currentDate);
        newDate.setMonth(currentDate.getMonth() + direction);
        setCurrentDate(newDate);
    };

    const getDaysInMonth = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDayOfMonth = new Date(year, month, 1).getDay();

        const daysArray = [];
        // Fill in days from the previous month
        for (let i = 0; i < firstDayOfMonth; i++) {
            daysArray.push({
                date: new Date(year, month, 1 - (firstDayOfMonth - i)), // Calculate previous month days
                isCurrentMonth: false,
            });
        }
        // Fill in days of the current month
        for (let day = 1; day <= daysInMonth; day++) {
            daysArray.push({
                date: new Date(year, month, day),
                isCurrentMonth: true,
            });
        }

        // Add days from the next month to fill the last week
        const lastDayOfMonth = new Date(year, month + 1, 0).getDay();
        const daysToFillNextMonth = lastDayOfMonth === 0 ? 6 : 6 - lastDayOfMonth;
        for (let day = 1; day <= daysToFillNextMonth; day++) {
            daysArray.push({
                date: new Date(year, month + 1, day), // Calculate next month days
                isCurrentMonth: false,
            });
        }

        return daysArray;
    };

    const handleDateClick = (day) => {
        if (day) {
            setSelectedDate(day); // Set the selected date
        }
    };

    return (
        <div className="flex items-center justify-center py-8">
            <div className="max-w-md w-full shadow-lg rounded-lg">
                <div className="flex items-center justify-between p-5 bg-white rounded-t-lg">
                    <span className="text-lg font-bold text-gray-800">
                        {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                    </span>
                    <div className="flex items-center">
                        <button 
                            onClick={() => changeMonth(-1)} 
                            aria-label="Previous Month" 
                            className="text-gray-800 hover:text-gray-600"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <polyline points="15 6 9 12 15 18" />
                            </svg>
                        </button>
                        <button 
                            onClick={() => changeMonth(1)} 
                            aria-label="Next Month" 
                            className="ml-3 text-gray-800 hover:text-gray-600"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <polyline points="9 6 15 12 9 18" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="p-4 bg-gray-100 rounded-b-lg">
                    <table className="w-full text-center">
                        <thead>
                            <tr>
                                <th className="py-2">Mo</th>
                                <th className="py-2">Tu</th>
                                <th className="py-2">We</th>
                                <th className="py-2">Th</th>
                                <th className="py-2">Fr</th>
                                <th className="py-2">Sa</th>
                                <th className="py-2">Su</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: 6 }, (_, rowIndex) => (
                                <tr key={rowIndex}>
                                    {Array.from({ length: 7 }, (_, colIndex) => {
                                        const dayIndex = rowIndex * 7 + colIndex;
                                        const dayObj = getDaysInMonth()[dayIndex];
                                        const day = dayObj?.date;
                                        const isCurrentMonth = dayObj?.isCurrentMonth;
                                        const isSelected = selectedDate && selectedDate.toDateString() === day?.toDateString();

                                        return (
                                            <td
                                                key={colIndex}
                                                className={`py-2 cursor-pointer ${
                                                    isCurrentMonth
                                                        ? isSelected
                                                            ? 'bg-blue-500 text-white'
                                                            : 'text-gray-800 hover:bg-gray-200'
                                                        : 'text-gray-400'
                                                }`}
                                                onClick={() => handleDateClick(day)}
                                            >
                                                {day ? day.getDate() : null}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Calendar;
