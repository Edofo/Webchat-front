import ChatCard from "./ChatCard"

import styles from '../styles/Sidebar.module.scss'

const SidebarContainer = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
                <div className={styles.profil}>
                    <img width="50px" height="auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/170px-Apple_logo_black.svg.png" alt="logo-profil"/>
                    <div>
                        <p className={styles.title}>LEBOUCHER Nolan</p>
                        <p className={styles.subtitle}>Developpeur FullStack</p>
                    </div>
                    <i className="fad fa-pencil-alt"></i>
                </div>
                <hr />
                <input placeholder="Rechercher..." />
            </div>
            <div className={styles.chatCardList}>
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
            </div>
        </div>
    )
}

export default SidebarContainer