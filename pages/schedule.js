import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "./components/header.js";
import Footer from "./components/footer.js";

import { getData } from "../lib/getData.js";

export default function Schedule({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fun olympics</title>
        <meta name="description" content="fun olympics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <h1>Schedule </h1>
        <p>Find the schedule for all the upcoming events</p>
        {data.map((item) => (
          <div key={item.id} className={styles.grid}>
            <a href="#" className={styles.card}>
              <h2>{item.activity}</h2>
              <p>{item.date_time}</p>
            </a>
          </div>
        ))}
        <Footer />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const data = await getData("schedule");

  return { props: { data } };
}
