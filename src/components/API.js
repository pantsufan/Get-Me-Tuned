import React from "react";
import Axios from "axios";
import { useEffect, useState } from "react";
import { CgWebsite, CgInstagram, CgPhone } from "react-icons/cg";
import { HiOutlineMail } from "react-icons/hi";
import { css } from "@emotion/core";
//React Spinners: https://www.npmjs.com/package/react-spinners
import HashLoader from "react-spinners/HashLoader";
const override = css`
  display: block;
  padding-top: 50px;
  margin-left: auto;
  margin-right: auto;
  border-color: yellow;
`;
function API() {
  const [tuners, setTuners] = useState([]);
  const [searchTuner, setSearchTuner] = useState("");
  const [filterTuners, setFilterTuners] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "https://get-me-tuned-api.herokuapp.com/";
  useEffect(() => {
    Axios.get("https://get-me-tuned-api.herokuapp.com/tuners").then(
      (response) => {
        setTuners(response.data);
        setLoading(false);
      }
    );
  }, []);
  // Tutorial: https://invidious.kavin.rocks/watch?v=Q8JyF3wpsHc
  useEffect(() => {
    setFilterTuners(
      tuners.filter((tuner) => {
        return tuner.name.toLowerCase().includes(searchTuner.toLowerCase());
      })
    );
  }, [searchTuner, tuners]);

  return (
    <div>
      <div className="overflow-y-auto h-screen bg-gray-900 max-h-full md:max-h-screen md:object-contain text-black p-4 ">
        <h1 className="bg-yellow-500 text-center text-2xl rounded text-black p-2">
          <b>Meet Tuner Gang</b>
        </h1>

        <input
          class="my-4 focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-yellow-500 rounded-md py-2 pl-10"
          type="text"
          aria-label="Filter Tuner"
          placeholder="Find Tuner"
          onChange={(e) => setSearchTuner(e.target.value)}
        />
        {loading ? (
          <HashLoader
            color="white"
            loading={loading}
            css={override}
            size={150}
          />
        ) : (
          filterTuners.map((value, key) => {
            return (
              <figure
                class="md:flex bg-gray-200 rounded-xl p-4 my-4 mx-5"
                key={key}
              >
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
          })
        )}
      </div>
    </div>
  );
}

export default API;
