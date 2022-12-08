import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import { useState } from "react";
import YoutubeEmbed from "../lib/youtubeEmbed";

import { getData } from "../lib/getData.js";
import { useRouter } from "next/router";
export default function Schedule({ data, com }) {
  const [comment, setComment] = useState("");
  const doComment = (event) => {
    event.preventDefault();
  };
  const handleChange = (e) => setComment(e.target.value);

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
        {data.map((item) => (
          <YoutubeEmbed key={item.game_id} embedId={item.game_url} />
        ))}
        <br />
        <h3>comments</h3>
        {com.map((item) => (
          <div key={item.comment_id}>
            <div className={styles.comment}>
              [{item.user_comment}] {item.comment_desc}
            </div>
          </div>
        ))}
        [you] {comment}
        <form onSubmit={doComment}>
          <br />
          <label>comments</label>
          <br />
          <input
            type="text"
            name="comment_desc"
            placeholder="comment"
            onChange={handleChange}
          />

          <br />

          <button type="submit">comment</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const data = await getData("games");
  const com = await getData("comments");
  return { props: { data, com } };
}
