import { useState, useContext } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddRoom from "./compoments/addRoom/addRoom";
import RoomDetails from "./compoments/roomdetails/RoomDetails";
import HomePage from "./compoments/homePage.jsx/homepage";
/////////////////////////////////////////////////////////////////////

function App() {
  const [roomDetails, setRoomDetails] = useState([]);

  // function that AddRoom will call
  const addRoom = (room) => {
    setRoomDetails((prev) => [...prev, room]);
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage roomDetails={roomDetails} />} />
          <Route path="/addRoom" element={<AddRoom addRoom={addRoom} />} />
          <Route path="/RoomDetails" element={<RoomDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
