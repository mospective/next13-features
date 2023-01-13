import Link from "next/link";
import Nav from "../Nav";
import style from "./index.module.css";

export default function Header () {
    return (
        <header className={style.header}>
            <p>header element</p>
            <Nav />
        </header>
    )
}