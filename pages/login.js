import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import Link from "next/link";
import { useRouter } from "next/router";
import { getCookies, setCookies, removeCookies } from "cookies-next";
export default function Login() {
    const router = useRouter();
    const handleSubmit = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault();

        // Get data from the form.
        const data = {
            name: event.target.name.value,
            password: event.target.password.value,
        };

        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data);

        // API endpoint where we send form data.
        const endpoint = "/api/login";

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
            if (result.msg == "admin") {
                setCookies("user", "admin");
                router.push("/admin");
            } else if (result.msg == "user") {
                setCookies("user", "user");
                router.push("/tickets");
            } else if (result.msg == "volunteer") {
                setCookies("user", "volunteer");
                router.push("/user/loggedin");
            }
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
                <h1>Log into the fun olympics website</h1>
                <p>
                    To access some functionalities of the website you have to be logged in
                </p>
                <div className={styles.lcard}>
                    <form onSubmit={handleSubmit}>
                        <label>username</label>
                        <input type="text" id="name" name="name" placeholder="username" />
                        <label>password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="password"
                        />

                        <button type="submit">login</button>
                    </form>
                </div>
                <Link href="/register">Register if you dont have an account</Link>

                <Footer />
            </main>
        </div>
    );
}
