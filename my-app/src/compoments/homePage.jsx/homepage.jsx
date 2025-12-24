import React from "react";
import { Link } from "react-router-dom";
function HomePage({ roomDetails }) {
  return (
    <div className="card">
      <h1 className="title">Smart House</h1>
      <p>Manage your devices easily</p>
      <div className="roomDiv">
        {roomDetails.map((room, index) => (
          <Link to={"../roomdetails/RoomDetails"} className="roomLink">
            <div key={index} style={{ backgroundColor: room.roomColor }}>
              {room.roomName}
            </div>
          </Link>
        ))}
      </div>
      <Link to="/addRoom" className="add-link">
        <span className="add-plus">+</span>
      </Link>
    </div>
  );
}

export default HomePage;
