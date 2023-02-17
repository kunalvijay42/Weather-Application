import React from "react";
import Image from "next/image";
import Link from "next/link";

// import images
import VelloreImage from "../public/images/Vellore.jpg";
import DelhiImage from "../public/images/Delhi.jpg";
import MumbaiImage from "../public/images/Mumbai.jpg";
import HyderabadImage from "../public/images/Hyderabad.jpg";

const places = [
  {
    name: "Vellore",
    image: VelloreImage,
    url: "/location/vellore-1253286",
  },
  {
    name: "Delhi",
    image: DelhiImage,
    url: "/location/delhi-1273294",
  },
  {
    name: "Mumbai",
    image: MumbaiImage,
    url: "/location/mumbai-1275339",
  },
  {
    name: "Hyderabad",
    image: HyderabadImage,
    url: "/location/hyderabad-1269843",
  },
];

const a = {
  marginLeft: "45.5px"
}

const s = {
  textAlign: "Center",
  fontSize: "20px",
  marginTop: "150px"
}

export default function FamousPlaces() {
  return (
    <div className="places">
      <h1 style={s}>Click to view Weather of some Famous Indian Cities</h1>
      <div className="places__row">
        {places.length > 0 &&
          places.map((place, index) => (
            <div className="places__box" key={index}>
              <Link href={place.url}>
                <a>
                  <div className="places__image-wrapper">
                    <Image
                      src={place.image}
                      alt={`${place.name} Image`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>

                  <span style={a}>{place.name}</span>
                </a>
              </Link>
            </div>
          ))}
      </div>
      {/* <h1 style={s}>Click to view Weather of some Famous Indian Cities</h1> */}
    </div>
  );
}
