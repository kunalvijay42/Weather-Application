import Head from "next/head";
import SearchBox from "../components/SearchBox";
import FamousPlaces from "../components/FamousPlaces";
import Navbar from "../components/Navbar";
import Img from "../public/images/cloudy.png";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Weather App</title>
        <link rel="icon" href="https://i.pinimg.com/originals/06/c4/f7/06c4f70ec5931e2342e703e8a3f0a253.png" />
      </Head>

      <div className="home">
        <div className="container">
          <Navbar />
          <SearchBox placeholder="Enter a city to search..." />

          <FamousPlaces />
        </div>
      </div>
    </div>
  );
}
