import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/customCalendar.css"; // custom tweaks

const CalendarWidget = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([
    { date: "2025-08-01", type: "task", title: "Task 1 Completed" },
    { date: "2025-08-03", type: "reward", title: "Unlocked T-Shirt" },
  ]);

  const [newEvent, setNewEvent] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [clickedDate, setClickedDate] = useState(null);

  const handleDayClick = (value) => {
    setClickedDate(value);
    setShowPopup(true);
  };

  const addEvent = () => {
    if (newEvent && clickedDate) {
      setEvents([...events, { date: clickedDate.toISOString().split("T")[0], title: newEvent }]);
      setNewEvent("");
      setShowPopup(false);
    }
  };

  const tileContent = ({ date }) => {
    const formatted = date.toISOString().split("T")[0];
    const match = events.find((e) => e.date === formatted);
    if (match) {
      return (
        <div className={`mt-1 h-2 w-2 rounded-full ${match.type === "reward" ? "bg-green-500" : "bg-blue-500"}`}></div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Calendar & Event Tracker</h2>
      <Calendar
        onChange={setDate}
        value={date}
        tileContent={tileContent}
        onClickDay={handleDayClick}
        className="rounded-lg border-none w-full max-w-md mx-auto calendar-custom"
      />

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-xl font-bold"
              onClick={() => setShowPopup(false)}
            >
              ×
            </button>
            <h3 className="text-lg font-bold mb-2">Add Event for {clickedDate.toDateString()}</h3>
            <input
              type="text"
              className="w-full p-2 border rounded mb-3"
              placeholder="Event title"
              value={newEvent}
              onChange={(e) => setNewEvent(e.target.value)}
            />
            <button
              onClick={addEvent}
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 w-full"
            >
              Add Event
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarWidget;
