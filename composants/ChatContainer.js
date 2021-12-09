import { useEffect, useState } from 'react'

import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

import styles from '../styles/ChatContainer.module.scss'
import WebcamContainer from './Webcam'

const ChatContainer = (props) => {
    
    const [DisplayCam, setCam] = useState(false)
    const [DisplayEmoji, setEmoji] = useState(false)
    const [msgList, setMsgList] = useState([])
    const [load, setLoad] = useState(false)

    useEffect(() => {
        setMsgList([])
    }, [props.roomSelected])

    useEffect(() => {
        if(props.socket !== undefined) {

            if(!load) {
                props.socket.emit('room::message::get::list', ({ room : props.roomSelected }))
            }

            props.socket.on("room::message::receive", () => {
                props.socket.emit('room::message::get::list', ({ room : props.roomSelected }))
            });

            props.socket.on("room::message::send::list", (data) => {
                setMsgList(data.messagesList)
            });
        }
    }, [props.socket, props.roomSelected])

    const addNewMessage = () => {
        const inputField = document.querySelector('#input-send-msg')

        props.socket.emit("room::message::send", {
            room: props.roomSelected,
            nick: props.userData.user.email,
            message: inputField.value,
            type: 'message',
            email1: props.userData.user.email,
            email2: props.userData.user.email
        });

        document.querySelector('#input-send-msg').value = ''
    }      
    
    const addEmoji = (e) => {
        const element = document.querySelector('#input-send-msg')
        let value = element.value
        value = `${value}${e.native}`
        element.value = value
    }

    const addPhoto = (e) => {
        props.socket.emit("room::message::send", {
            room: props.roomSelected,
            nick: props.userData.user.email,
            message: e,
            type: 'photo',
            email1: props.userData.user.email,
            email2: props.userData.user.email
        });

        setCam(false)
    }

    return (
        <div className={styles.chatContainer}>
            <div className={styles.chatContainerHeader}>
                <div className={styles.profil}>
                    <img width="50px" height="auto" src={props.userInfos.image} alt="logo-profil"/>
                    <div>
                        <p className={styles.title}>{props.userInfos.name}</p>
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
                        <p>Aujourd'hui</p>
                        <hr/>
                    </div>
                    {   
                            msgList.length >= 1 ?

                                msgList.map((x, i) => {
                                    console.log(x)
        
                                    return (
                                        <>
                                            {
                                                x.type === 'message' ?
                                                    <p key={i} className={x.author_email === props.userData.user.email ? styles.right : styles.left}>{x.content}</p>
                                                :
                                                    x.type === 'photo' && <img key={i} className={x.author_email === props.userData.user.email ? styles.right : styles.left} width="35%" src={x.content}  />
                                            }
                                        </>
                                    )
                                })
                            :
                                <p>ECRIRE SON PREMIER MESSAGE</p>
                    }
                </div>
            </div>

            {
                DisplayCam  && <div onClick={() => setCam(false) | setEmoji(false)} className={'modal-box-shadow'}></div>
            }
            {
                DisplayCam && <WebcamContainer addPhoto={addPhoto} />
            }

            {
                DisplayEmoji  && <div onClick={() => setCam(false) | setEmoji(false)} className={'modal-box-shadow'}></div>
            }
            {
                DisplayEmoji && <Picker onSelect={(e) => addEmoji(e)} />
            }
            <div className={styles.chatContainerSend}>
                <i className="fad fa-paperclip"></i>
                <i onClick={() => setCam(true)} className="fad fa-camera-alt"></i>
                <i onClick={() => setEmoji(true)} className="fad fa-smile-wink"></i>
                <textarea onKeyDown={(e) => e.key === 'Enter' && addNewMessage()} id="input-send-msg" placeholder="Salut, ça va ?" type="text"/>
                <i onClick={() => addNewMessage()} className="fad fa-arrow-circle-right"></i>
            </div>

        </div>
    )
}

export default ChatContainer