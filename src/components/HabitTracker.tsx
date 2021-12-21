/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useState } from "react";

function HabitTracker() {
  const [habitList, setHabit] = useState<string[]>([]);
  const [habit, updateAHabit] = useState("");
  const handleSubmit = (event: any) => {
    event.preventDefault();
    alert(`You have added the ${habit} habit`);
    setHabit([...habitList, habit]);
    updateAHabit("");
  };

  const handleChange = (event: any) => {
    const value = event.target.value;
    updateAHabit(value);
    //console.log(habitList);
  };

  return (
    <div>
      {/* This is where i'll put in some dummy text*/}
      <ol>
        {habitList.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ol>
      <form onSubmit={handleSubmit}>
        <label>
          Add a habit <br></br>
          <input
            id="habit-input"
            type="text"
            value={habit}
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}

export default HabitTracker;
