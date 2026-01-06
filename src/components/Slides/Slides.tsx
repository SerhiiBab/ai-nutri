import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Slides.css";
import { Rocket, Target, User } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Slides = () => {
  return (
    <div className="slides-wrapper">
      <section className="section section-1 max-xl:mt-20">
        <div className="section-content bg-[#8C6765] w-full pt-20 pb-30">
          <div className="section-inner flex max-w-[1280px] gap-10 max-xl:flex-col">
            <section className="w-full flex justify-center px-4">
              <div className="w-full max-w-[1280px] max-xl:justify-center max-xl:flex">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex flex-col gap-6 flex-1 justify-center">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center m-auto">
                        <h1>Einfach</h1>
                        <Rocket size={46} className="text-orange-500" />
                      </div>
                      <div className="flex items-center">
                        <p className="text-[40px] md:text-[40px] font-medium leading-tight text-center">
                          Trage deine Mahlzeiten per Text oder Foto ein und
                          erhalte sofort eine verständliche Auswertung.
                        </p>
                      </div>
                      <div className="flex-1 rounded-xl overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1535914254981-b5012eebbd15?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                          className="w-200 h-60 object-cover max-xl:w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="w-full flex justify-center px-4">
              <div className="w-full max-w-[1280px] max-xl:justify-center max-xl:flex">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex flex-col gap-6 flex-1 justify-center">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center m-auto">
                        <h1>Präzise</h1>
                        <Target size={46} className="text-orange-500" />
                      </div>
                      <div className="flex items-center">
                        <p className="text-[40px] md:text-[40px] font-medium leading-tight text-center">
                          Die Analyse basiert auf Nährwertdaten und berücksichtigt Alter,
              Gewicht, Geschlecht und Aktivität.
                        </p>
                      </div>
                      <div className="flex-1 rounded-xl overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1543362906-acfc16c67564?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                          className="w-200 h-60 object-cover max-xl:w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="w-full flex justify-center px-4">
              <div className="w-full max-w-[1280px] max-xl:justify-center max-xl:flex">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex flex-col gap-6 flex-1 justify-center">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center m-auto">
                        <h1>Persönlich</h1>
              <User size={46} className="text-orange-500" />
                      </div>
                      <div className="flex items-center">
                        <p className="text-[40px] md:text-[40px] font-medium leading-tight text-center">
                          Empfehlungen und Tagesziele werden individuell auf deinen Körper und deinen Lebensstil abgestimmt.
                        </p>
                      </div>
                      <div className="flex-1 rounded-xl overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1484627147104-f5197bcd6651?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                          className="w-200 h-60 object-cover max-xl:w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Slides;
