/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Dispatch } from "react";
import { useState } from "react";

const listData: string[] = [];
enum operationType {
  addToList,
  removeFromList,
}
const dummyData = ["hey", "no", "sup", "bro", "i like you"];
const dummyNumData = [1, 2, 3, 4, 5];
const anotherDum: any[] = [];

function ShoppingList(props: any) {
  const [list, updateList]: [JSX.Element, Dispatch<any>] = useState(<></>);

  function updateListLogic(type: operationType, value: any) {
    switch (type) {
      case operationType.addToList:
        console.log(listData);
        listData.push(value);

        console.log(listData);
        break;
      case operationType.removeFromList:
        break;
      default:
        break;
    }
    updateList(
      <ul>
        {listData.map((currentValue, index) => {
          return <li key={index}>{currentValue} </li>;
        })}
      </ul>
    );
  }
  return (
    <>
      {list}

      <button
        onClick={() => {
          updateListLogic(
            operationType.addToList,
            dummyData.at(Math.floor(Math.random() * 4 + 1))
          );
          console.log("done");
        }}
      >
        Click here to add a new item
      </button>
      <button
        onClick={() => {
          anotherDum.push(dummyNumData.at(Math.floor(Math.random() * 4 + 1)));
          console.log(anotherDum);
        }}
      >
        another one
      </button>
    </>
  );
}

function RemoveButton(props: any) {
  return <></>;
}
export default ShoppingList;
