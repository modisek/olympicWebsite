import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import { getData } from "../lib/getData.js";
import { useDispatch } from "react-redux";
import { addToCart } from "./redux/cart.slice";
export default function Tickets({ data }) {
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <Head>
        <title>Fun olympics</title>
        <meta name="description" content="fun olympics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header user={"login"} />
      <main>
        <h1>Tickets </h1>
        <p>Buy all your tickets here, backstage passes and all </p>
        {data.map((item) => (
          <div key={item.id} className={styles.grid}>
            <div className={styles.card}>
              <h2>Football</h2>
              <h5>{item.ticket}</h5>
              <p>{item.price}</p>
              <button onClick={() => dispatch(addToCart(item))}>Buy</button>
            </div>
          </div>
        ))}

        <Footer />
      </main>
    </div>
  );
}
export async function getStaticProps() {
  const data = await getData("tickets");

  return { props: { data } };
}
