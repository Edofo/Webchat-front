import styles from '../styles/Sidebar.module.scss'

const ChatCard = (props) => {

    const updateRoom = () => {
        console.log(props.socket)
        const room = `${props.userData.user.email}${props.userInfos.email}`
        props.setRoomSelected(room)
        props.socket.emit('room::join', { room: room, email1: props.userData.user.email, email2: props.userInfos.email})
    }

    return (
        <div onClick={() => updateRoom()} className={styles.chatCard}>
            <img width="35px" height="auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/170px-Apple_logo_black.svg.png" alt="logo-profil"/>
            <div>
                <p className={styles.title}>{props.userInfos.name}</p>
                <p className={styles.subtitle}>SHUX DEV est le best !</p>
            </div>
            {/*DATE*/}
        </div>
    )
}

export default ChatCard