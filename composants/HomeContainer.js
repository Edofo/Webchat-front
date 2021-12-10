import { useEffect, useState } from 'react';
import { io } from "socket.io-client";

import ProfilContainer from '../composants/ProfilContainer'
import SidebarContainer from '../composants/SidebarContainer'
import ChatContainer from '../composants/ChatContainer'

const HomeContainer = (props) => {

    const [socketId, setSocketId] = useState()
    const [roomSelected, setRoomSelected] = useState()
    const [userInfos, setUserInfos] = useState({})

    useEffect(() => {
        const socket = io("ws://localhost:4242");
        setSocketId(socket)
        socket.emit('login', props.session.user);
    }, [])

    return (
        <>
            <SidebarContainer setUserInfos={setUserInfos} setRoomSelected={setRoomSelected} userData={props.session} socket={socketId} />

            {
                userInfos.id !== undefined && <ChatContainer userInfos={userInfos} roomSelected={roomSelected} userData={props.session} socket={socketId} />
            }

            <ProfilContainer />
        </>
    )
}

export default HomeContainer