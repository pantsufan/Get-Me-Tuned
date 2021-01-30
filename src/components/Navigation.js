import React from "react";
import { AiFillCar } from "react-icons/ai";
export default function Navigation() {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div
      style={{
        background: "#091c29",
      }}
    >
      <div className="flex items-center justify-between w-10/12 mx-auto py-3 text-white cursor-pointer">
        <h1 className="text-xl font-bold flex" onClick={refreshPage}>
          <AiFillCar
            size="38"
            className="bg-yellow-500 p-1 rounded-full"
            color="black"
          />
          <span className="my-1 mx-2">Get Me Tuned</span>
        </h1>
        <div>
          {/* <p className=" mr-4 hover:text-yellow-500 cursor-pointer">About Dev</p> */}
        </div>
      </div>
    </div>
  );
}
