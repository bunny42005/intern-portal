// src/components/CalendarSection.jsx
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/customCalendar.css";

const CalendarSection = ({ loginHistory = [] }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([
    { date: "2025-08-05", title: "Deadline: Submit Report" },
    { date: "2025-08-10", title: "Team Meeting" },
  ]);

  const handleDateClick = (date) => {
    const isoDate = date.toISOString().split("T")[0];
    setSelectedDate(isoDate);
  };

  const handleAddEvent = () => {
    if (selectedDate && window.confirm("Add a new event on " + selectedDate + "?")) {
      const title = prompt("Enter event title:");
      if (title) {
        setEvents([...events, { date: selectedDate, title }]);
      }
    }
  };

  const getTileContent = ({ date }) => {
    const iso = date.toISOString().split("T")[0];
    const hasLogin = loginHistory.includes(iso);
    const hasEvent = events.some(e => e.date === iso);
    return (
      <div className="relative w-full h-full">
        {hasLogin && <div className="w-2 h-2 bg-green-500 rounded-full absolute top-1 right-1"></div>}
        {hasEvent && <div className="w-2 h-2 bg-blue-500 rounded-full absolute bottom-1 left-1"></div>}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h2 className="text-xl font-bold mb-2">Calendar</h2>
      <Calendar
        onClickDay={handleDateClick}
        tileContent={getTileContent}
        className="rounded-lg w-full"
      />
      {selectedDate && (
        <div className="mt-4">
          <p><strong>Selected Date:</strong> {selectedDate}</p>
          <button
            onClick={handleAddEvent}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Add Event
          </button>
          <ul className="mt-2 list-disc list-inside">
            {events.filter(e => e.date === selectedDate).map((e, idx) => (
              <li key={idx}>{e.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CalendarSection;
