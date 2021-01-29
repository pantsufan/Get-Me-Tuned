import React from "react";
import Axios from "axios";
import { useEffect, useState } from "react";
import { CgWebsite, CgInstagram, CgPhone } from "react-icons/cg";
import { HiOutlineMail } from "react-icons/hi";
function API() {
  const [tuners, setTuners] = useState([]);
  const url = "https://get-me-tuned-api.herokuapp.com/";
  useEffect(() => {
    Axios.get("https://get-me-tuned-api.herokuapp.com/tuners/random").then(
      (response) => {
        setTuners(response.data);
      }
    );
  }, []);
  return (
    <div>
      <div className="overflow-y-auto h-screen bg-gray-900 max-h-full md:max-h-screen md:object-contain text-black p-4 ">
        <h1 className="bg-yellow-500 text-center text-2xl rounded text-black p-2">
          <b>Meet Tuner Gang</b>
        </h1>
        {tuners.map((value) => {
          return (
            <figure class="md:flex bg-gray-200 rounded-xl p-4 my-4 mx-5">
              <img
                class="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto md:mx-0"
                src={url + value.image}
                alt={value.name}
                width="384"
                height="512"
              />
              <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                <figcaption class="font-medium">
                  <div className="text-xl text-cyan-600">
                    <b>{value.name}</b>
                  </div>
                  <div class="text-gray-500 flex-row md:flex">
                    <div class="grid grid-cols-2 gap-4 my-2 flex-row md:flex">
                      <div class="">
                        <a
                          href={value.website}
                          className=""
                          target="_blank"
                          rel="noreferrer"
                        >
                          <CgWebsite
                            size="38px"
                            className=" mx-auto md:mx-0"
                            color="blue"
                          />
                        </a>
                      </div>
                      <div class="">
                        <a
                          href={value.insta}
                          className=""
                          target="_blank"
                          rel="noreferrer"
                        >
                          <CgInstagram
                            size="38px"
                            className="mx-auto md:mx-0"
                            color="purple"
                          />
                        </a>
                      </div>
                      <div class="">
                        <a
                          href={`tel:+91` + value.phone}
                          className=""
                          target="_blank"
                          rel="noreferrer"
                        >
                          <CgPhone
                            size="38px"
                            className="mx-auto md:mx-0"
                            color="black"
                          />
                        </a>
                      </div>
                      <div class="">
                        <a
                          href={`mailto:` + value.email}
                          className=""
                          target="_blank"
                          rel="noreferrer"
                        >
                          <HiOutlineMail
                            size="38px"
                            className="mx-auto md:mx-0"
                            color="black"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </figcaption>
                <blockquote>
                  <p class="font-semibold">{value.location}</p>
                </blockquote>
              </div>
            </figure>
          );
        })}
      </div>
    </div>
  );
}

export default API;
