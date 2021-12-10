import { signIn } from "next-auth/react"

import styles from '../styles/LoginContainer.module.scss'

const LoginContainer = () => {
    return (
        <div className={styles.login}>
            <div>
                <h1>SE CONNECTER</h1>
                <p>Afin d'accéder au webchat merci de vous connecter ;)</p>
                <button onClick={() => signIn()}>Se connecter</button>
            </div>
        </div>
    )
}

export default LoginContainer