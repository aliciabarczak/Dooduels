import "./../../Styling/Homepage.css";
import { AiOutlineClose } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import userContext from "../../contexts/userContext";
import { addRoom } from "./../../db/utils.js";

export default function AddRoomBox({ showPopUp, setShowPopUp }) {
  const { loggedUser } = useContext(userContext);
  const [newRoomName, setNewRoomName] = useState("");
  const [newRoomMode, setNewRoomMode] = useState("Easy");

  const handleSubmit = () => {
    addRoom(loggedUser, newRoomName, newRoomMode);
  };

  console.log(newRoomName, "<<roomName");
  console.log(newRoomMode, "<<roomMode");

  return (
    <div className="AddRoomBox" id={showPopUp ? "blackAddRoomBox" : null}>
      <h2>Add Room</h2>
      <form className="dropdown" onSubmit={handleSubmit}>
        <label>Select Mode:</label>
        <select
          className="dropDownMenu"
          value={newRoomMode}
          onChange={(event) => {
            setNewRoomMode(event.target.value);
          }}>
          <option value="normal">normal</option>
          <option value="h-AR-d">h-AR-d</option>
        </select>
        <div className="RoomName">
          <label> Room name</label>
          <input
            type="text"
            className="roomNameInput"
            placeholder="Room Name"
            value={newRoomName}
            onChange={(event) => {
              setNewRoomName(event.target.value);
            }}
          />
        </div>
        <AiOutlineClose
          className="closeButton"
          onClick={() => {
            setShowPopUp(false);
          }}
        />
        <button type="submit" className="submitBtn">
          Submit
        </button>
      </form>
    </div>
  );
}
