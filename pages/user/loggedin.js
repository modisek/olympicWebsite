import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Header from "../components/header.js";
import Footer from "../components/footer.js";
import { getData } from "../../lib/getData.js";

export default function User({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fun olympics</title>
        <meta name="description" content="fun olympics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <h3>schedule</h3>
        <p>Today: </p>
        {data.map((item) => (
          <div key="{item.result_id}" className={styles.grid}>
            <a href="" className={styles.card}>
              <h2>{item.activity}</h2>
              <p>{item.volunteer}</p>
            </a>
          </div>
        ))}

        <Footer />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const data = await getData("rota");
  return { props: { data } };
}
