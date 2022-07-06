import "./../Styling/Roompage.css";
import { useContext, useState, useEffect } from "react";
import userContext from "../contexts/userContext.js";
import LogInPopUpBox from "./Homepage/LogInPopUpBox";
import { useLocation, Link } from "react-router-dom";
import { getRoomById, addPlayerToRoom } from "../db/utils.js";
import Playerboard from "./Roompage/Playerboard";
import Chat from "./Chatrooms/Chat";

// import BottomBorder from "../Components/Homepage/BottomBorder.jsx";

const Roompage = () => {
  const { loggedUser } = useContext(userContext);
  const [ isLoading, setIsLoading ] = useState(true)

  const location = useLocation();
  const roomID = location.pathname.split("/")[2];
  const [roompageRoom, setRoompageRoom] = useState({});
  useEffect(() => {
    getRoomById(roomID)
    .then(room => {
      console.log("room>>>", room)
      setRoompageRoom(room)
      console.log(room.host.user_id)
      if (loggedUser && loggedUser.user_id !== room.host.user_id) {
        addPlayerToRoom(loggedUser, roomID);
      }
      setIsLoading(false)
    });
  }, []);

  return isLoading ? <p>loading...</p> : (
    <section>
      {!Object.keys(loggedUser).length ? <LogInPopUpBox /> : null}
      <div className="Roompage">
        <h1 className="roomTitle">{roompageRoom.room_name}</h1>
        <p className="modeRoompage">mode: {roompageRoom.mode}</p>
        <div className="RoomPageButtons">
          <Link to={`/games/${roomID}`}>
            <button className="ready-button">Start</button>
          </Link>
          <Link to="/"> 
            <button className="exit-button">Exit</button>
          </Link>
        </div>
        
        {Object.keys(roompageRoom).length ? (
          <Playerboard roompageRoom={roompageRoom} />
        ) : null}
        <h2>Chat</h2>
        <div className="chat">
          <Chat />
        </div>
      </div>
      {/* <BottomBorder /> */}
    </section>
  );
};

export default Roompage;
