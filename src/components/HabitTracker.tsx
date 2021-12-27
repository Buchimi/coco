/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "../App.css";

//TODO, MAKE HABIT AN OBJECT
function HabitTracker() {
  const [habitList, setHabit] = useState<
    { name: string; id: number; done: boolean }[]
  >([]);
  const [habit, updateAHabit] = useState<{
    name: string;
    id: any;
    done: boolean;
  }>({ name: "", id: 1, done: false }); //MAKE AN OBJECT NOT A STRING

  const [note, writeNote] = useState("");
  const [endPoint] = useState("http://167.99.57.137:8080/posts/1");
  const [endPoint2] = useState("http://localhost:8000/habits");
  const [error, setError] = useState<any>(null);
  const targetID = useRef(1);

  const deletedIDs = useRef<number[]>([]); // will be used when we want to delete IDs
  //Retrieves stored data in server
  useEffect(() => {
    fetch(endPoint2, { headers: { "Content-Type": "application/json" } })
      .then((res) => {
        console.log(Date());
        if (!res.ok) {
          throw Error("Could not fetch data from that resource");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (!Array.isArray(data)) {
          throw Error("Not an array");
        }
        setHabit(data);
      })
      .catch((e: Error) => {
        console.log(e);
        setError(e.message);
      });
  }, []);

  function CreateHabit(props: any) {
    const [checked, setChecked] = useState<boolean>(props.habit.done);
    const [className, updateCheck] = useState(checked ? "habit done" : "habit");

    //sets checkmark status
    function handleCheckChange(e: any) {
      setChecked(e.target.checked);
      const newClassName = e.target.checked ? "habit done" : "habit";
      console.log(newClassName);
      const tempHabit = props.habit;
      tempHabit.done = e.target.checked ? true : false;
      updateCheck(newClassName);
      //use a sort of update request to the server
      fetch(`${endPoint2}/${props.habit.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tempHabit),
      });
    }

    function deleteHabit() {
      const temp = props.habit.id;
      fetch(`${endPoint2}/${temp}`, { method: "delete" }).then(() => {
        deletedIDs.current.push(temp);
        window.location.reload();
        console.log("post deleted");
      });
    }
    return (
      <label className={className}>
        {props.habit.name}
        <input type="checkbox" onChange={handleCheckChange}></input>
        <input type="button" value="Delete habit" onClick={deleteHabit}></input>
      </label>
    );
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (deletedIDs.current[0] === undefined) {
      habit.id = targetID.current;
      targetID.current++;
    } else if (typeof deletedIDs.current[0] === "number") {
      habit.id = deletedIDs.current.pop();
    } else {
      throw Error("ID is not a number, check your damn code");
    }
    setHabit([...habitList, habit]);
    fetch(endPoint2, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(habit),
    }).then(() => {
      console.log("habit added");
    });

    updateAHabit({ ...habit, name: "" });
  };
  const handleChange = (event: any) => {
    const value = event.target.value;
    updateAHabit({ ...habit, name: value });
  };

  return (
    <div>
      {/* This is where i'll put in some dummy text*/}
      {error && <div> {error} </div>}
      <form onSubmit={handleSubmit}>
        <h1> Habits </h1>
        <ol>
          {habitList.map((item) => {
            return <li key={item.id}>{<CreateHabit habit={item} />}</li>;
          })}
        </ol>
        <hr />
        <label>
          Add a habit <br></br>
          <input
            id="habit-input"
            type="text"
            value={habit.name}
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
