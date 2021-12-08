import { useSession, signIn, signOut } from "next-auth/react"

import HomeContainer from "../composants/HomeContainer"

import styles from '../styles/Home.module.scss'

export default function Home() {
    const { data: session } = useSession()

    return (
        <div className={styles.homeContainer}>

            {/* <button onClick={() => signOut()}>Sign out</button> */}

            {
                session ?
                    <HomeContainer session={session} />
                :
                <>
                    Not signed in <br />
                    <button onClick={() => signIn()}>Sign in</button>
                </>
            }

        </div>
    )
}
