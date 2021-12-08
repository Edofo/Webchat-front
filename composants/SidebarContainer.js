import ChatCard from "./ChatCard"

import styles from '../styles/Sidebar.module.scss'
import { useState } from "react"

const SidebarContainer = () => {

    const [DisplaySidebar, setSidebar] = useState(true)

    return (
        <div style={DisplaySidebar ? {} : {transform: 'translateX(-100%)'}} className={styles.sidebar}>
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
            <div className={styles.arrow}>
                {
                    DisplaySidebar ?
                        <i onClick={() => setSidebar(false)} class="fas fa-chevron-left"></i>
                    :
                        <i onClick={() => setSidebar(true)} class="fas fa-chevron-right"></i>
                }
            </div>
        </div>
    )
}

export default SidebarContainer