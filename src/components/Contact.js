import React from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import footer from "../images/footer.gif";
function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.REACT_APP_EMAILJS_SERVICE}`,
        `${process.env.REACT_APP_EMAILJS_TEMPLATE}`,
        e.target,
        `${process.env.REACT_APP_EMAILJS_USER}`
      )
      .then(
        (result) => {
          Swal.fire("Good job!", "Your request was submitted!", "success");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className=" bg-black max-h-full md:max-h-screen  p-4 text-white">
      <div class="grid grid-row-4 md:gird-cols-4 gap-4 m-2">
        <div
          class="bg-yellow-500 row-span-2 md:col-span-2 p-4 rounded-lg text-black"
          // style={{
          //   background: "#091c29",
          // }}
        >
          <h3
            className="font-extrabold text-2xl"
            style={{
              fontFamily: "Baloo Chettan 2",
            }}
          >
            About The Project:
          </h3>
          <hr
            className="py-2"
            style={{
              width: "0px",
            }}
          />
          <p className="font-blod ">
            This project began as a dream and then into reality within a month.
          </p>
        </div>
        <div
          class="bg-gray-400 row-span-2 md:col-span-2 text-gray-800 p-4 rounded-lg"
          style={{
            fontFamily: "Baloo Chettan 2",
          }}
        >
          <form className="contact-form" onSubmit={sendEmail}>
            <h3 className="font-extrabold text-2xl my-4">
              Missing Your Favourite Tuner? Send Us The Request
            </h3>
            <label className="font-bold text-xl my-4">Tuner name</label> <br />
            <input
              className="p-2 my-4 rounded-xl"
              type="text"
              name="tuner_name"
            />
            <br />
            <label className="font-bold text-xl my-2">Your Email</label> <br />
            <input
              className="p-2 my-4 rounded-xl"
              type="email"
              name="user_email"
            />
            <br />
            <span className="inline-block">* We Don't Send Spam emails</span>
            <br />
            <input
              className="font-bold text-xl rounded-xl my-2 py-2 px-10 bg-yellow-500 text-black hover:bg-black hover:text-yellow-500 cursor-pointer"
              type="submit"
              value="Send"
            />
            <br />
          </form>
        </div>
      </div>
      <div className="mx-auto text-center py-2 inline">
        <img src={footer} className="mx-auto w-32 h-full" alt="footer car" />
        <h3 className="font-bold">
          &#169;
          <a
            className="mx-1 text-center hover:text-yellow-500"
            href="https://github.com/pantsufan"
            target="_blank"
            rel="noreferrer"
          >
            Kninja
          </a>
          <span className="mx-1">| 2021</span>
        </h3>
      </div>
    </div>
  );
}

export default Contact;
