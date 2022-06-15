import Button from "../../Components/Button/Button";
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
    background: "#181818",
    color: "white",
    overflow: "auto",
    maxWidth: "800px",
    position: "relative",
    border: "0",
    maxHeight: "700px",
  },
};
Modal.setAppElement("#root");
const Details = ({ modalIsOpen, setIsOpen, project }) => {
  // console.log(project)
  function closeModal() {
    setIsOpen(false);
  }
  const {
    title,
    images,
    description,
    technology,
    gitClient,
    gitServer,
    liveLink,
  } = project;
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div className="pt-10">
          <h1 className="md:text-3xl text-xl text-center pb-4">{title}</h1>
          <div>
            <h4 className="text-xl font-semibold border-b border-gray-500 pb-1">
              Use Technology
            </h4>
            <ul className="flex flex-wrap gap-2 my-2">
              {technology.map((tech,index) => {
                return (
                  <li key={index} className="bg-[#A16207] p-0.5 rounded-md">{tech}</li>
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
        <div className="flex flex-wrap gap-3">
          <Button target="_blank" className="mt-2" href={liveLink}>
            <span className="mr-3">Live Link</span>
            <i className="fa-solid fa-globe"></i>
          </Button>
          <Button target="_blank" className="mt-2" href={gitClient}>
            <span className="mr-3">Client side</span>
            <i className="fa-brands fa-github"></i>
          </Button>
          <Button target="_blank" className="mt-2" href={gitServer}>
            <span className="mr-3">Server side</span>
            <i className="fa-brands fa-github"></i>
          </Button>
        </div>
        <div onClick={closeModal} className="fixed top-4 right-5 w-10 h-10 bg-gray-600 text-center leading-10 rounded-full hover:bg-red-500 duration-200">
          <i className="fa-solid fa-x"></i>
        </div>
      </Modal>
    </div>
  );
};

export default Details;
