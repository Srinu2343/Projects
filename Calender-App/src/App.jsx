import { useState, useEffect } from "react";
import dayjs from "dayjs";
import "./index.css";

function App() {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  const startOfMonth = currentDate.startOf("month");
  const endOfMonth = currentDate.endOf("month");
  const startDate = startOfMonth.startOf("week");
  const endDate = endOfMonth.endOf("week");

  const days = [];
  let day = startDate;
  while (day.isBefore(endDate, "day")) {
    days.push(day);
    day = day.add(1, "day");
  }

  const goToPrevMonth = () => setCurrentDate(currentDate.subtract(1, "month"));
  const goToNextMonth = () => setCurrentDate(currentDate.add(1, "month"));

  const isToday = (date) => dayjs().isSame(date, "day");

  const getEventsForDay = (date) =>
    events.filter((e) => dayjs(e.date).isSame(date, "day"));

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <div className="flex justify-between items-center mb-4">
        <button onClick={goToPrevMonth} className="px-4 py-2 bg-gray-200 rounded">Prev</button>
        <h2 className="text-xl font-bold">{currentDate.format("MMMM YYYY")}</h2>
        <button onClick={goToNextMonth} className="px-4 py-2 bg-gray-200 rounded">Next</button>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d} className="text-center font-semibold">{d}</div>
        ))}
        {days.map((date, i) => {
          const dayEvents = getEventsForDay(date);
          return (
            <div key={i} className={`border h-28 p-1 relative ${isToday(date) ? "bg-yellow-100" : ""}`}>
              <div className="text-sm font-semibold">{date.date()}</div>
              <div className="mt-1 overflow-y-auto text-xs space-y-1">
                {dayEvents.map((event, idx) => (
                  <div key={idx} className="bg-blue-200 px-1 py-0.5 rounded" title={`${event.title} @ ${event.time}`}>
                    {event.title}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
