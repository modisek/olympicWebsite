import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function Results() {
  const { data, error } = useSWR("/api/results", fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div className={styles.container}>
      <Head>
        <title>Fun olympics</title>
        <meta name="description" content="fun olympics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <h1>Results</h1>
        <p>
          Get the result of every game, match, race as it happens live from the
          stadiums hosting the 2022 fun olympic games
        </p>
        {data.map((item) => (
          <div key="{item.result_id}" className={styles.grid}>
            <a href="" className={styles.card}>
              <h2>{item.sport}</h2>
              <p>{item.score}</p>
            </a>
          </div>
        ))}
        <Footer />
      </main>
    </div>
  );
}
