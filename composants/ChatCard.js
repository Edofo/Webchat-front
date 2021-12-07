import styles from '../styles/Sidebar.module.scss'

const ChatCard = () => {
    return (
        <div className={styles.chatCard}>
            <img width="35px" height="auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/170px-Apple_logo_black.svg.png" alt="logo-profil"/>
            <div>
                <p className={styles.title}>Ponch HKT</p>
                <p className={styles.subtitle}>SHUX DEV est le best !</p>
            </div>
            {/*DATE*/}
        </div>
    )
}

export default ChatCard