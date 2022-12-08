import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import { getData } from "../lib/getData.js";
import { useRouter } from "next/router";

export default function Admin({ results, schedule }) {
  const router = useRouter();
  const handleResult = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();
    // Get data from the form.
    const data = {
      sport: event.target.sport.value,
      score: event.target.score.value,
    };
    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);
    // API endpoint where we send form data.
    const endpoint = "/api/results";
    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };
    // Send the form data to our forms API  and get a response.
    const response = await fetch(endpoint, options);
    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    if (response.status == 200) {
      router.push("/admin");
    }
  };

  const handleSchedule = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();
    // Get data from the form.
    const data = {
      activity: event.target.activity.value,
      date_time: event.target.date_time.value,
    };
    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);
    // API endpoint where we send form data.
    const endpoint = "/api/schedule";
    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };
    // Send the form data to our forms API  and get a response.
    const response = await fetch(endpoint, options);
    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    if (response.status == 200) {
      router.push("/admin");
    }
  };
  const handleArticle = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();
    // Get data from the form.
    const data = {
      header: event.target.header.value,
      body: event.target.body.value,
    };
    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);
    // API endpoint where we send form data.
    const endpoint = "/api/article";
    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };
    // Send the form data to our forms API  and get a response.
    const response = await fetch(endpoint, options);
    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    if (response.status == 200) {
      router.push("/admin");
    }
  };
  const handleLivestream = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();
    // Get data from the form.
    const data = {
      game_name: event.target.game_name.value,
      game_url: event.target.game_url.value,
    };
    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);
    // API endpoint where we send form data.
    const endpoint = "/api/games";
    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };
    // Send the form data to our forms API  and get a response.
    const response = await fetch(endpoint, options);
    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    if (response.status == 200) {
      router.push("/admin");
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Fun olympics</title>
        <meta name="description" content="fun olympics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className={styles.main}>
        <h1>Admin Panel</h1>
        <p>add new results, schedule etc</p>
        <div className={styles.admin}>
          <h2>publish results</h2>
          <form onSubmit={handleResult}>
            <input type="text" id="sport" name="sport" placeholder="sport" />
            <input type="text" id="score" name="score" placeholder="score" />
            <button type="submit">publish</button>

            {results.map((item) => (
              <div key="{item.result_id}" className={styles.grid}>
                <a href="" className={styles.card}>
                  <h2>{item.sport}</h2>
                  <p>{item.score}</p>
                </a>
              </div>
            ))}
          </form>
        </div>
        <div className={styles.admin}>
          <h2>update schedule</h2>
          <form onSubmit={handleSchedule}>
            <input type="text" name="activity" placeholder="activity" />
            <input type="text" name="date_time" placeholder="time" />
            <button type="submit">publish</button>
          </form>
          <div className={styles.grid}>
            <a href="" className={styles.card}>
              <h2>Cycling</h2>
              <p>23-Nov 1900hrs</p>
            </a>
          </div>
          {schedule.map((item) => (
            <div className={styles.grid}>
              <a href="#" className={styles.card}>
                <h2>{item.activity}</h2>
                <p>{item.date_time}</p>
              </a>
            </div>
          ))}
          <div className={styles.admin}>
            <h2>add article</h2>
            <div className={styles.llcard}>
              <form onSubmit={handleArticle}>
                <label htmlFor="header">Heading</label>
                <input type="text" name="header" placeholder="heading" />
                <label htmlFor="body">Body</label>
                <textarea id="body" name="body" rows="4" cols="60"></textarea>
                <button type="submit">push article</button>
              </form>
            </div>
          </div>
        </div>
        <div className={styles.admin}>
          <h2>add livestream</h2>
          <div className={styles.lcard}>
            <form onSubmit={handleLivestream}>
              <input type="text" name="game_name" placeholder="name of game" />
              <input type="text" name="game_url" placeholder="game url" />
              <button type="submit">publish</button>
            </form>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const results = await getData("results");
  const schedule = await getData("schedule");

  return {
    props: {
      results,
      schedule,
    },
  };
}
