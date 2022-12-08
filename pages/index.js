import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import { getData } from "../lib/getData.js";
export default function Home({ data, sched }) {
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
        {data.map((item) => (
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

      <aside>
        <h1>Schedule of events</h1>
        {sched.map((item) => (
          <div key={item.id} className={styles.grid}>
            <div className={styles.card}>
              <h2>{item.activity}</h2>
              <p>{item.date_time}</p>
            </div>
          </div>
        ))}
      </aside>

      <Footer />
    </div>
  );
}
export async function getServerSideProps() {
  const data = await getData("article");
  const sched = await getData("schedule");

  return { props: { data, sched } };
}
