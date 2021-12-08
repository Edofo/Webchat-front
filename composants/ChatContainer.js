import { useEffect, useState } from 'react'
import styles from '../styles/ChatContainer.module.scss'
import WebcamContainer from './Webcam'

const ChatContainer = (props) => {
    
    const [DisplayCam, setCam] = useState(false)
    const [msgList, setMsgList] = useState([])
    const test = 0

    useEffect(() => {
        console.log(props.socket)
        
    }, [props.socket])

    if(props.socket !== undefined) {
        props.socket.on("chat message", (data) => {
            const tab = [...msgList]
            tab.push({ user: data.nick, message: data.message })
            setMsgList(tab)
            console.log(msgList)
        });
    }

    const addNewMessage = () => {
        const inputField = document.querySelector('#input-send-msg')

        props.socket.emit("chat message", {
            message: inputField.value,
            nick: props.userData.user.email,
        });
    }                    

    console.log(msgList.length)

    return (
        <div className={styles.chatContainer}>
            <div className={styles.chatContainerHeader}>
                <div className={styles.profil}>
                    <img width="50px" height="auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/170px-Apple_logo_black.svg.png" alt="logo-profil"/>
                    <div>
                        <p className={styles.title}>Ponch HKT</p>
                        <p className={styles.subtitle}>Developpeur FullStack</p>
                    </div>
                </div>
                <div className={styles.action}>
                    <i className="fad fa-search"></i>
                    <i className="fad fa-heart"></i>
                    <i className="fad fa-bell"></i>
                </div>
            </div>

            <div className={styles.chatContainerMsg}>

                <div className={styles.msg}>
                    <div className={styles.date}>
                        <hr />
                        <p>Hier</p>
                        <hr/>
                    </div>
                    <p className={styles.left}>Salut mec</p>
                    <p className={styles.left}>Salut mec</p>
                    <p className={styles.left}>Salut mec</p>
                    <p className={styles.left}>Salut mec</p>
                    <p className={styles.right}>ça va ?</p>
                    <p className={styles.right}>ça va ?</p>
                    <p className={styles.right}>ça va ?</p>
                    <p className={styles.right}>ça va ?</p>
                    <p className={styles.right}>ça va ?</p>
                    <p className={styles.right}>ça va ?</p>
                    <p className={styles.left}>Salut mecmecmecme cmecme cmecmecmecmecm ecmecmecme cmecmecmecmecmecm ecmecmecmecme cmecmecmecmecmecmec mecmecmecmecmec mecmecmec</p>
                    <p className={styles.right}>ça va ?</p>
                    <p className={styles.right}>ça va ?</p>
                    <p className={styles.right}>ça va ?</p>
                </div>

                <div className={styles.msg}>
                    <div className={styles.date}>
                        <hr />
                        <p>Aujourd'hui</p>
                        <hr/>
                    </div>
                    {   
                        msgList.length >= 1 ?

                            msgList.map((x) => {
                                console.log(x.message)
                                return (
                                    
                                    <p className={x.user === props.userData.user.email ? styles.right : styles.left}>{x.message}</p>
                                    
                                )
                            })
                        :
                            <p>ECRIRE SON PREMIER MESSAGE</p>
                    }
                </div>
            </div>

            {
                DisplayCam && <WebcamContainer />
            }

            <div className={styles.chatContainerSend}>
                <i className="fad fa-paperclip"></i>
                <i onClick={() => setCam(true)} className="fad fa-camera-alt"></i>
                <i className="fad fa-smile-wink"></i>
                <textarea id="input-send-msg" placeholder="Salut, ça va ?" type="text"/>
                <i onClick={() => addNewMessage()} className="fad fa-arrow-circle-right"></i>
            </div>

        </div>
    )
}

export default ChatContainer