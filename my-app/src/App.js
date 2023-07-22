import { useState } from 'react';
import Calendar from 'react-calendar';
import './App.css';
import 'react-calendar/dist/Calendar.css';
import CalendarDay from './CalendarDay';

function App() {
    const [date, setDate] = useState(new Date())
    let checker = new Array();
    checker.push("hellow");
    checker.push("me again");
    

    return (
        <div className="app">
            <h1 className="header">React Calendar</h1>
            <div className="calendar-container">
                <Calendar onChange={setDate} value={date} locale="en-GB" />
            </div>
            <div className="text-center">
                Selected date: {date.toDateString()}
            </div>
            <CalendarDay selectedDate={date.toDateString()} objChecker={checker} />
        </div>
    )

}

export default App;