import styles from '../styles/Sidebar.module.scss'

const ChatCard = (props) => {

    const updateRoom = () => {
        props.socket.emit('room::leave', { room: room })
        const user1 = props.userData.user.email
        const user2 = props.userInfos.email
        props.setUserInfos(props.userInfos)
        const room = `${user1.length > user2.length ? `${user1}${user2}`: `${user2}${user1}`}`
        props.setRoomSelected(room)
        props.socket.emit('room::join', { room: room, email1: user1, email2: user2})
    }

    return (
        <div onClick={() => updateRoom()} className={styles.chatCard}>
            <img width="35px" height="auto" src={props.userInfos.image} alt="logo-profil"/>
            <div>
                <p className={styles.title}>{props.userInfos.name}</p>
                <p className={styles.subtitle}>SHUX DEV est le best !</p>
            </div>
            {/*DATE*/}
        </div>
    )
}

export default ChatCard