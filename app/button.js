"use client";

import About from "./about/page";
export default function Btn () {

    const btnHandler = () => {
        alert("You clicked fool!");
    } 

    return (
        <>
            <About />
            <button onClick={btnHandler}>Click</button>
        </>
    );
}