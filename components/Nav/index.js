import Link from "next/link";
import style from "./Nav.module.css";

export default function Nav () {
    return (
        <nav className={style.nav}>
            <li className={style.navitem}>
                <Link href={"/"}>
                    Home
                </Link>
            </li>
            <li className={style.navitem}>
                <Link href={"/about"}>
                   About
                </Link>
            </li>
            <li className={style.navitem}>
                <Link href={"/contact"}>
                   Contact
                </Link>
            </li>
        </nav>
    )
}