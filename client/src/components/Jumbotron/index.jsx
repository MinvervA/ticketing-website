import "./Jumbotron.css";

const Jumbotron = () => {
  return (
    <div className="Jumbotron">
      <div className="Jumbotron-container pt-[90px] md:pb-[70px] pb-[30px] md:pt-[140px] mb-12 flex justify-center items-center flex-col">
        <div className="Jumbotron-Title text-white font-semibold md:text-[62px] md:max-w-[1250px] md:mx-auto text-[28px] max-w-md px-2 text-shadow-md">
          Experience the ultimate event platform designed for event enthusiasts like you.
        </div>
        <div className="Jumbotron-sub text-white md:text-[20px] text-[15px] md:mt-10 mt-6">
          it's just around the corner.
          <br />
          And we've got the tickets to make it happen.
        </div>
        <div className="Jumbotron-Button md:mt-[30px] mt-[20px]">
          <button className="rounded-lg text-white font-semibold text-xl active:scale-95">
            See more!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
