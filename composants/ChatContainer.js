import { useState } from 'react'
import styles from '../styles/ChatContainer.module.scss'
import WebcamContainer from './Webcam'

const ChatContainer = () => {
    const [DisplayCam, setCam] = useState(false)

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
                    <p className={styles.right}>ça va ?</p>
                    <p className={styles.right}>ça va ?</p>
                    <p className={styles.right}>ça va ?</p>
                </div>
            </div>

            {
                DisplayCam && <WebcamContainer />
            }

            <div className={styles.chatContainerSend}>
                <i className="fad fa-paperclip"></i>
                <i onClick={() => setCam(true)} className="fad fa-camera-alt"></i>
                <i className="fad fa-smile-wink"></i>
                <input placeholder="Salut, ça va ?" type="text"/>
                <i className="fad fa-arrow-circle-right"></i>
            </div>

        </div>
    )
}

export default ChatContainer