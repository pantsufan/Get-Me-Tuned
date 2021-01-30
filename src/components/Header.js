import React from "react";
import API from "./API";
import "./Header.css";
import Typical from "react-typical";
import Contact from "./Contact";
import rx7 from "../images/rx7.gif";
export default function Header() {
  return (
    <div
      style={{
        scrollBehavior: "smooth",
      }}
    >
      <div
        className="max-h-full md:max-h-screen text-white "
        style={{
          backgroundImage: `linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%)`,
          backgroundBlendMode: "multiply",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "relative",
          minHeight: "100%",
          minWidth: "100%",
          WebkitBackgroundSize: "cover",
        }}
      >
        <img
          className="mx-auto pt-0 md:pt-10 md:rounded py-4"
          src={rx7}
          alt="Mazada Rx7 Gif"
        />
        <h1
          className="text-5xl md:text-5xl lg:text-9xl text-center py-30 mx-2"
          style={{
            fontFamily: "Graduate",
          }}
        >
          <Typical
            className=" bg-black inline-block rounded-3xl p-5 mx-5 text-5xl md:text-4xl lg:text-9xl text-center text-yellow-500"
            steps={[
              "Meet Tuners",
              1000,
              "Find Tuners",
              500,
              "Get Tuned",
              500,
              ,
              "#Tuned Culture",
              1500,
            ]}
            //loop={Infinity}
            //wrapper="h1"
          />
        </h1>
        <br />
      </div>
      <API />
      <Contact />
    </div>
  );
}
