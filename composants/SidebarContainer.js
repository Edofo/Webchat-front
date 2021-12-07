import ChatCard from "./ChatCard"

import styles from '../styles/Sidebar.module.scss'

const SidebarContainer = () => {
    return (
        <div className={styles.sidebar}>
            <div>
                {/*IMAGE*/}
                <div>
                    <p className={styles.title}>LEBOUCHER Nolan</p>
                    <p className={styles.subtitle}>Developpeur FullStack</p>
                </div>
                {/*EDIT*/}
            </div>
            {/*SEARCH*/}
            <ChatCard />
        </div>
    )
}

export default SidebarContainer