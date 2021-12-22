/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useState } from "react";
import "../App.css";

function HabitTracker() {
  const [habitList, setHabit] = useState<string[]>([]);
  const [habit, updateAHabit] = useState("");
  const [note, writeNote] = useState("");

  function CreateHabit(props: any) {
    const [className, updateCheck] = useState("");

    function handleCheckChange(e: any) {
      const newClassName = e.target.checked ? "habit done" : "habit";
      updateCheck(newClassName);
    }
    return (
      <label className={className}>
        {props.habit}
        <input
          type="checkbox"
          onChange={(e) => {
            handleCheckChange(e);
          }}
        ></input>
      </label>
    );
  }
  const handleSubmit = (event: any) => {
    event.preventDefault();

    setHabit([...habitList, habit]);
    updateAHabit("");
  };

  const handleChange = (event: any) => {
    const value = event.target.value;
    updateAHabit(value);
  };

  return (
    <div>
      {/* This is where i'll put in some dummy text*/}
      <form onSubmit={handleSubmit}>
        <h1> Habits </h1>
        <ol>
          {habitList.map((item) => {
            return <li key={item}>{<CreateHabit habit={item} />}</li>;
          })}
        </ol>
        <hr />
        <label>
          Add a habit <br></br>
          <input
            id="habit-input"
            type="text"
            value={habit}
            onChange={handleChange}
          />
          <br />
          Add a note to yourself
          <br />
          <textarea value={note} onChange={(e) => writeNote(e.target.value)} />
        </label>
        <input type="submit" value="Add habit" />
      </form>
    </div>
  );
}

export default HabitTracker;
