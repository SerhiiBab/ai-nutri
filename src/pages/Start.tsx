import HeroBild from "../components/HeroBild/HeroBild";
import AnimatedTextButton from "../components/AnimatedTextButton";
import Slides from "../components/Slides/Slides";

const Start = () => {
  return (
    <>
    <div className="hero-block main-width flex max-xl:justify-center ">
      <div className="hero-block--text flex flex-col items-center justify-center max-w-1/2 gap-12 max-xl:max-w-9/10">
        <div className="hero-block--text__1 text-white text-2xl text-center">
          Verstehe, was dein Körper wirklich bekommt
        </div>
        <AnimatedTextButton />
        <div className="hero-block--text__3 text-xl text-center text-white max-w-2/3 max-xl:max-w-9/10">
          AI-Nutri analysiert deine tägliche Ernährung und zeigt dir, welche
          Vitamine fehlen – basierend auf deinen persönlichen Daten.
        </div>
        <div
          className="
    hero-block--text__4
    h-14
    px-10
    flex items-center gap-4
    rounded-3xl
    text-white text-xl
    cursor-pointer
    bg-linear-to-r from-[#FE572E] to-[#FF4C80]
    transition-all duration-300 ease-out
    hover:-translate-y-1
    hover:shadow-[0_10px_30px_rgba(255,76,128,0.45)]
    hover:scale-[1.03]
    active:scale-[0.98]
    group
  "
        >
          <span className="relative z-10">Ernährung analysieren</span>

          <svg
            className="
      transition-transform duration-300 ease-out
      group-hover:translate-x-2
    "
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.3763 15.8078L4.65137 15.8457"
              stroke="white"
              strokeWidth="2"
            />
            <path
              d="M18.7462 6.8175L27.3763 15.8831L18.7751 24.1675"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div className="hero-block--bild max-w-1/2">
        <HeroBild />
      </div>
    </div>

    <Slides  />
    </>
  );
};

export default Start;
