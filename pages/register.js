import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './components/header.js'
import Footer from './components/footer.js'

export default function Register() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Fun olympics</title>
                <meta name="description" content="fun olympics" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />

            <main className={styles.main}>
                <h1>Register</h1>
                <p>Register to access more functionalities, to buy tickets and to watch livestreams of the event</p>
                <div className={styles.lcard}>
                    <form action="/api/user" method="post" >
                        <label>username</label>
                        <input type="text" id="name" name="name" placeholder="name" />

                        <label>password</label>
                        <input type="password" id="password" name="password" placeholder="password" />

                        <label>usertype</label>
                        <select name="usertype" id="usertype">
                            <option value="admin">Admin</option>
                            <option value="user">Spectator</option>
                            <option value="volunteer">volunteer</option>

                        </select>

                        <button type="submit" >Register</button>
                    </form>
                </div>

                <Footer />
            </main>

        </div>
    )
}

