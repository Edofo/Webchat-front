import { useEffect, useState } from 'react';
import { io } from "socket.io-client";

import ProfilContainer from '../composants/ProfilContainer'
import SidebarContainer from '../composants/SidebarContainer'
import ChatContainer from '../composants/ChatContainer'

const HomeContainer = (props) => {

    const [socketId, setSocketId] = useState()
    const [roomSelected, setRoomSelected] = useState()

    useEffect(() => {
        const socket = io("ws://localhost:4242");
        setSocketId(socket)
        socket.emit('login', props.session.user);

        socket.on("new_msg", (data) => {
            alert(data.msg);
        })
    }, [])

    return (
        <>
            <SidebarContainer setRoomSelected={setRoomSelected} userData={props.session} socket={socketId} />

            <ChatContainer roomSelected={roomSelected} userData={props.session} socket={socketId} />

            <ProfilContainer />
        </>
    )
}

export default HomeContainer