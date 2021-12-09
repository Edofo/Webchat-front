import { useSession } from "next-auth/react"

import HomeContainer from "../composants/HomeContainer"
import LoginContainer from "../composants/LoginContainer"

import styles from '../styles/Home.module.scss'

export default function Home() {
    const { data: session } = useSession()

    return (
        <div className={styles.homeContainer}>

            {
                session ?
                    <HomeContainer session={session} />
                :
                    <LoginContainer />
            }

        </div>
    )
}
