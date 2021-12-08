import { useSession, signIn, signOut } from "next-auth/react"

import ChatContainer from '../composants/ChatContainer'
import ProfilContainer from '../composants/ProfilContainer'
import SidebarContainer from '../composants/SidebarContainer'

import styles from '../styles/Home.module.scss'

export default function Home() {
    const { data: session } = useSession()

    return (
        <div className={styles.homeContainer}>

            <button onClick={() => signOut()}>Sign out</button>

            {
                session ?
                    <>
                        <SidebarContainer userData={session} />

                        <ChatContainer />

                        <ProfilContainer />
                    </>
                :
                <>
                    Not signed in <br />
                    <button onClick={() => signIn()}>Sign in</button>
                </>
            }

        </div>
    )
}
