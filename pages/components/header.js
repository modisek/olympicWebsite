import styles from "../../styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { getCookie, removeCookies } from "cookies-next";
import { useRouter } from "next/router";
export default function Header({ user }) {
  const cart = useSelector((state) => state.cart);
  const us = getCookie("user");
  const router = useRouter();

  // Getting the count of items
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };
  return (
    <div className={styles.header}>
      <div className={styles.bottomnav}>
        <div>
          <Link href="/">Fun olympics </Link>
        </div>
        <div>
          <Link href="/">home</Link>
          <Link href="/schedule">schedule</Link>
          <Link href="/games">live games</Link>
          {us === "user" ? (
            <Link href="/tickets">tickets</Link>
          ) : (
            <del>tickets</del>
          )}
          <Link href="/results">results</Link>
        </div>

        <div>
          {us === "admin" || us === "volunteer" || us === "user" ? (
            ""
          ) : (
            <button className={styles.lgnButton}>
              {" "}
              <Link href="/login">login</Link>
            </button>
          )}
          {us === "volunteer " ? (
            <Link href="user/loggedin">Volunteer</Link>
          ) : (
            ""
          )}
          {us === "admin" ? <Link href="/admin">Admin</Link> : ""}
          {us === "admin" || us === "volunteer" || us === "user" ? (
            <button
              onClick={() => {
                removeCookies("user");
                removeCookies("volunteer");
                removeCookies("admin");
                router.push("/");
              }}
            >
              logout
            </button>
          ) : (
            ""
          )}
          <div className={styles.cartt}>
            <div>
              {us === "user" ? (
                <Link href="/cart">
                  <p>Cart ({getItemsCount()})</p>
                </Link>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
