import "./addRoom.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddRoom({ addRoom }) {
  const nav = useNavigate();

  const [roomType, setroomType] = useState("");
  const [roomName, setRoomName] = useState("");
  const [roomColor, setRoomColor] = useState("");

  const addDiv = () => {
    //שולח את המידע לקומפננטה הראשית
    addRoom({
      roomType,
      roomName,
      roomColor,
    });

    nav("/");
  };

  return (
    <div className="container">
      <h2>Add Room</h2>

      <label htmlFor="room-type">Room Type</label>
      <select
        id="room-type"
        value={roomType}
        onChange={(e) => setroomType(e.target.value)}
      >
        <option value="">Select a room</option>
        <option value="bedroom">Bedroom</option>
        <option value="restroom">Restroom</option>
        <option value="kitchen">Kitchen</option>
      </select>

      <label htmlFor="room-name">Room Name</label>
      <input
        type="text"
        id="room-name"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
      />

      <label htmlFor="room-color">Room Color</label>
      <input
        type="color"
        id="room-color"
        value={roomColor}
        onChange={(e) => setRoomColor(e.target.value)}
      />

      <button onClick={addDiv}>Add Room</button>
    </div>
  );
}

export default AddRoom;
