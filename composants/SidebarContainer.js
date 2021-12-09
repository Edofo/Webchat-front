import { useEffect, useState } from "react"
import { signOut } from "next-auth/react"

import ChatCard from "./ChatCard"

import styles from '../styles/Sidebar.module.scss'

const SidebarContainer = (props) => {

    const [DisplaySidebar, setSidebar] = useState(true)
    const [searchList, setSearchList] = useState([])

    useEffect(() => {
        searchUser()
    }, [])

    const searchUser = async() => {
        try {

            const value = document.querySelector('#input-search-user').value

            fetch('http://localhost:4000/search-user', {
                method: 'POST',
                headers: {
                    "content-type" : "application/json"
                },
                body: JSON.stringify({
                    search: value,
                    emailUser: props.userData.user.email
                })
            })
            .then(response => response.json())
            .then(data => setSearchList(data))

        } catch(err) {
            throw err
        }
    }

    return (
        <div style={DisplaySidebar ? {} : {transform: 'translateX(-100%)'}} className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
                <div className={styles.profil}>
                    <img width="50px" height="auto" src={props.userData.user.image} alt="logo-profil"/>
                    <div>
                        <p className={styles.title}>{props.userData.user.name}</p>
                        <p className={styles.subtitle}>Developpeur FullStack</p>
                    </div>
                    <i onClick={() => signOut()} className="fad fa-pencil-alt"></i>
                </div>
                <hr />
                <input onChange={() => searchUser()} id="input-search-user" type="text" placeholder="Rechercher..." />
            </div>
            <div className={styles.chatCardList}>
                {
                    searchList.length >= 1 &&
                    searchList.map((x, i) => {
                        return (
                            <ChatCard key={i} socket={props.socket} setRoomSelected={props.setRoomSelected} userInfos={x} setUserInfos={props.setUserInfos} userData={props.userData}/>
                        )
                    })
                }
            </div>
            <div className={styles.arrow}>
                {
                    DisplaySidebar ?
                        <i onClick={() => setSidebar(false)} className="fas fa-chevron-left"></i>
                    :
                        <i onClick={() => setSidebar(true)} className="fas fa-chevron-right"></i>
                }
            </div>
        </div>
    )
}

export default SidebarContainer