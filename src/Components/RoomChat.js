import React, { useState } from 'react'
import { io } from "socket.io-client";
import socketIOClient from "socket.io-client";

function RoomChat() {

    const [mensaje, setMensaje] = useState("")
    const socket = io("http://localhost:5000/");
    socket.on("connect", () => {
        socket.emit("connected", "estamos conectados")
    });

    const handleMessage = (e) => {
        if (e.keyCode === 13) {

           let datos = {
               message: e.target.value  
           }
            socket.send(datos);
            console.log(datos);
            e.target.value = "";
        }
    };

    socket.on("response" , msg => {
        console.log(msg)

        setMensaje(msg)

    })




    return (
        <>
            <div className="col-md-6">
                <div className="card w-100 h-75 bg-success">
                    <div className="card-body">
                        <h5 className="card-title text-white"><i className="fas fa-camera"></i> Friends</h5>
                        <p className="card-text text-white bubble">
                            <strong>{mensaje.message}</strong>
                        </p>
                    </div>


                    <input type="text" placeholder="Type something..." className="card-footer bg-white rounded msgBox" onKeyUp={handleMessage} />
                </div>
            </div>

        </>
    )
}

export default RoomChat
