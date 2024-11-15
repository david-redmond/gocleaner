import React from "react";
import { IFrequency } from "@/app/interfaces";

interface IProps {
  time: string;
  day: string;
  setTime: (arg: string) => void;
  setDay: (arg: string) => void;
  frequency: IFrequency;
}

function Timeslot({ time, setTime, frequency, day, setDay }: IProps) {
  return (
    <section className={"section"}>
      <h2>Pick a time</h2>
      <div className={"grid"}>
        {frequency === "once-off" ? (
          <div className={"inputGroup"}>
            <label>Date</label>
            <input type="date" name="date" required className={"input"} />
          </div>
        ) : (
          <div className="dateInputGroup">
            <label htmlFor="daySelect">Day</label>
            <select
              id="daySelect"
              name="day"
              required
              className="select"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              aria-label="Select a day of the week when the cleaning should take place."
            >
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
          </div>
        )}
        <div className="dateInputGroup">
          <label htmlFor="timeSlotSelect">Time</label>
          <select
            id="timeSlotSelect"
            name="timeSlot"
            required
            className="select"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            aria-label="Select a time slot"
          >
            <option value="8:00">8:00</option>
            <option value="9:00">9:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
          </select>
        </div>
      </div>
    </section>
  );
}

export default Timeslot;
