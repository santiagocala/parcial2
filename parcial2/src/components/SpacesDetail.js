import React, { useEffect, useState } from "react";
import Spaces from "./Spaces";
import RoomDetail from "./RoomDetail";

function SpacesDetail(props){
    const [rooms, setRooms] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState(null); 

    useEffect(()=>{
        const URL = 'https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json';
            fetch(URL).then(res=>res.json()).then(res=>{
                setRooms(res);
            });
    }, []);

    function renderRoomDetail(e, room){
        e.preventDefault();
        setSelectedRoom(room);
    }

    return (
      <div className="container">
        <div className="col">
          <div className="row">
            {rooms.map(function (room, index) {
                if(room.homeId === props.space.id){
                    return (
                        <div
                          className="card"
                          onClick={(e) => renderRoomDetail(e, room)}
                          key={index}
                        >
                          <img
                            src="..."
                            class="card-img-top"
                            alt="Image of the selected picture"
                          ></img>
                          <div className="card-body">
                            <h5 className="card-title">{room.name}</h5>
                          </div>
                        </div>
                    )}
            })}
          </div>
        </div>
        <div className="col">
        {
              selectedRoom && <RoomDetail room={selectedRoom} />
            }
        </div>
      </div>
    );
}
export default SpacesDetail;