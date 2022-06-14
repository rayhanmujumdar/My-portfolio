import React from "react";
import Modal from "react-modal";
import ReactOwlCarousel from "react-owl-carousel";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#112B3C",
    color: "white",
    overflow: "auto",
    maxWidth: "800px",
    position: "relative",
    border: "0",
    maxHeight: '700px'
  },
};
Modal.setAppElement("#root");
const Details = ({ modalIsOpen, setIsOpen, project }) => {
  // console.log(project)
  function closeModal() {
    setIsOpen(false);
  }
  const { title, images, description, technology,gitClient,gitServer,liveLink } = project;
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <h1 className="md:text-3xl text-xl text-center pb-4">{title}</h1>
          <div>
            <h4 className="text-xl font-semibold border-b border-gray-500 pb-1">
              Use Technology
            </h4>
            <ul className="flex flex-wrap gap-2 my-2">
              {technology.map((tech) => {
                return (
                  <li className="bg-[#A16207] p-0.5 rounded-md">{tech}</li>
                );
              })}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold border-b border-gray-500 pb-1">
              Description
            </h4>
            <ul className="my-2">
              {description.map((des, index) => (
                <li key={index}>
                  {index + 1}. {des}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <ReactOwlCarousel
            items={1}
            nav
            autoplay
            loop
            autoplayTimeout={3000}
            autoplayHoverPause={true}
          >
            {images.map((img, index) => {
              return <img key={index} src={img} alt="" className="w-96" />;
            })}
          </ReactOwlCarousel>
        </div>
        <div className="flex gap-x-3">
          <a href={liveLink} target="blank" className="flex gap-x-2 items-center border border-gray-500 px-2 py-1 rounded-md">
            <span>Live Link</span>
            <i class="fa-solid fa-globe"></i>
          </a>
          <a href={gitClient} target="blank" className="flex gap-x-2 items-center border border-gray-500 px-2 py-1 rounded-md">
            <span>Client side</span>
            <i class="fa-brands fa-github"></i>
          </a>
          <a href={gitServer} target="blank" className="flex gap-x-2 items-center border border-gray-500 px-2 py-1 rounded-md">
            <span>Server side</span>
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
      </Modal>
    </div>
  );
};

export default Details;
