import { useEffect, useState } from 'react';
import { io } from "socket.io-client";

import ProfilContainer from '../composants/ProfilContainer'
import SidebarContainer from '../composants/SidebarContainer'
import ChatContainer from '../composants/ChatContainer'

const HomeContainer = (props) => {

    const [socketId, setSocketId] = useState()

    useEffect(() => {
        const socket = io("ws://localhost:4242");
        setSocketId(socket)
        socket.emit('login', {email: props.session.user.email});

        socket.on("new_msg", (data) => {
            alert(data.msg);
        })
    }, [])

    return (
        <>
            <SidebarContainer userData={props.session} />

            <ChatContainer userData={props.session} socket={socketId} />

            <ProfilContainer />
        </>
    )
}

export default HomeContainer