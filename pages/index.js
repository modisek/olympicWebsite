import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function Home() {
    const { data: article, error: articleError } = useSWR(
        "/api/article",
        fetcher
    );

     if (articleError) return <div>failed to load</div>;
    if (!article) return <div>loading...</div>;
    return (
        <div className={styles.container}>
            <Head>
                <title>Fun olympics</title>
                <meta name="description" content="fun olympics" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header user="Login" />

            <main className={styles.main}>
                <div className={styles.banner}>
                    <span>June 22 - july 23</span>
                    <h1 className={styles.btitle}>Fun olympics 2022</h1>
                    <h3 className={styles.subtitle}>
                        The very best of athletics and sports right here in tokyo japan,
                        come witness history being made right before your eyes
                    </h3>
                </div>
                <h1>News</h1>
                {article.map((item) => (
                    <div key={item.id} className={styles.grid}>
                        <div className={styles.card}>
                            <h2>{item.header}</h2>

                            <p>{item.body}</p>
                            <Image
                                alt="an example photo"
                                src={item.image_url ? item.image_url : "/example.jpg"}
                                height={600}
                                width={1000}
                            />
                        </div>
                    </div>
                ))}
            </main>

            <Footer />
        </div>
    );
}
