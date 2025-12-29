import HeroBild from "../components/HeroBild/HeroBild";

const Start = () => {
  return (
    <div className="hero-block main-width flex">
      <div className="hero-block--text flex flex-col items-center justify-center max-w-1/2 gap-12">
        <div className="hero-block--text__1 text-[#FC3A79] text-2xl">
          Verstehe, was dein Körper wirklich bekommt
        </div>
        <div className="hero-block--text__2 text-6xl text-center">
          AI-gestützte <br />
          Ernährungsanalyse
        </div>
        <div className="hero-block--text__3 text-xl text-center max-w-2/3">
          AI-Nutri analysiert deine tägliche Ernährung und zeigt dir, welche
          Vitamine fehlen – basierend auf deinen persönlichen Daten.
        </div>
        <div
          className="hero-block--text__4 h-14 bg-linear-to-r from-[#FE572E] to-[#FF4C80] 
        flex items-center rounded-3xl pt-8 pr-10 pb-8 pl-10 text-white text-xl"
        >
          Ernährung analysieren
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.3763 15.8078L4.65137 15.8457"
              stroke="white"
              stroke-width="2"
            />
            <path
              d="M18.7462 6.8175L27.3763 15.8831L18.7751 24.1675"
              stroke="white"
              stroke-width="2"
            />
          </svg>
        </div>
      </div>
      <div className="hero-block--bild max-w-1/2">
        <HeroBild />
      </div>
    </div>
  );
};

export default Start;
