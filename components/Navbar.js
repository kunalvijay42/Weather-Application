import Head from "next/head";
// import SearchBox from "../components/SearchBox";
// import FamousPlaces from "../components/FamousPlaces";
// import cloud from "../public/images/cloudy";
import Img from "../public/images/cloudy.png";
import Image from "next/image";
// import React from 'react'

// import "../navbar.css";

const s = {
    textAlign: "Center",
    fontSize: "40px"
}
export default function Navbar() {
    return (
        <div>
            <nav>
                <h1 style={s}>Weather App <Image
                    src={Img}
                    width={50}
                    height={45}

                /></h1>

            </nav>
        </div >
    )
}
