import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_074jhbg",
        "template_h5bbx3i",
        form.current,
        "NHrZ_Wua8LU96vAom"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email sended", {
            id: "success",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div id="contact" className="container mx-auto py-10">
      <div>
        <h1 className="text-4xl text-center mb-2 font-semibold">
          <span className="text-[#A16207]">Contact</span> forms
        </h1>
        <div className="h-1 w-60 bg-gray-600 mx-auto"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-x-5">
        <div className="flex flex-col gap-y-1.5 p-3">
          <h1 className="uppercase text-3xl font-semibold font-sans pb-1">
            Contact info
          </h1>
          <div className="flex gap-x-2 items-center">
            <i className="fa-solid fa-envelope text-[#A16207] text-2xl"></i>
            <a
              href="mailto:rayhanmujumdar0177@gamil.com"
              target="blank"
              className="text-xl font-medium justify-center"
            >
              rayhanmujumdar0177gmail.com
            </a>
          </div>
          <div className="flex gap-x-2 items-center">
            <i className="fa-solid fa-phone text-[#A16207] text-2xl"></i>
            <a
              href="tel:01776464695"
              target="blank"
              className="text-xl font-medium justify-center"
            >
              01776464695
            </a>
          </div>
          <div className="flex gap-x-2 items-center">
            <i className="fa-solid fa-location-dot text-[#A16207] text-2xl"></i>
            <a
              href="https://goo.gl/maps/rrWfETTUKk4Msr2N6"
              target="blank"
              className="text-xl font-medium justify-center"
            >
              Hajigonj,Chandpur
            </a>
          </div>
          {/* <div className="h-60 overflow-hidden"> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.783107859891!2d90.8525233!3d23.2509784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754f3b9919d5569%3A0xd87754c8be9a68ca!2sR140%2C%20Hajiganj!5e0!3m2!1sen!2sbd!4v1655320759260!5m2!1sen!2sbd"
            title="location"
            className="w-full"
            height={200}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          {/* </div> */}
        </div>
        <div className="block p-6  rounded-lg shadow-lg bg-white md:max-w-md md:mx-0 mx-8">
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group mb-6">
              <input
                name="name"
                type="text"
                className="form-control block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-[#112B3C] focus:outline-none"
                id="exampleInput7"
                placeholder="Name"
              />
            </div>
            <div className="form-group mb-6">
              <input
                name="email"
                type="email"
                className="form-control block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-[#112B3C] focus:outline-none"
                id="exampleInput8"
                placeholder="Email address"
              />
            </div>
            <div className="form-group mb-6">
              <input
                name="subject"
                type="text"
                className="form-control block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-[#112B3C] focus:outline-none"
                id="exampleInput8"
                placeholder="Subject"
              />
            </div>
            <div className="form-group mb-6">
              <textarea
                name="message"
                className="
                h-28
                resize-none
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-[#112B3C] focus:outline-none
                "
                id="exampleFormControlTextarea13"
                rows={3}
                placeholder="Message"
                defaultValue={""}
              />
            </div>
            <button
              type="submit"
              className="
                w-full
                px-6
                py-2.5
                bg-[#112B3C]
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-blue-700 hover:shadow-lg
                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-blue-800 active:shadow-lg
                transition
                duration-150
                ease-in-out"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
