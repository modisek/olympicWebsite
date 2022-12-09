import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import YoutubeEmbed from "../lib/youtubeEmbed";

import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function Schedule() {
    const { data: games, error: gamesError } = useSWR(
        "/api/games",
        fetcher
    );
    if (gamesError) return <div>failed to load</div>;
    if (!games) return <div>loading...</div>;
    return (
        <div className={styles.container}>
            <Head>
                <title>Fun olympics</title>
                <meta name="description" content="fun olympics" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                <h1>live games </h1>
                <p>
                    watch in realtime whats happening at the fun olympics, and comment
                    about your favorite moments
                </p>
                {games.map((item) => (
                    <YoutubeEmbed key={item.game_id} embedId={item.game_url} />
                ))}
                <br />
            </main>
            <Footer />
        </div>
    );
}


