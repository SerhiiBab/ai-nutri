import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Slides.css";
import { Rocket, Target, User } from "lucide-react";
import MealAnalysisBlock from "../../components/MealAnalysisBlock";
import MealAnalysisVisual from "../../components/MealAnalysisVisual";
import MealAnalysisImageText from "../../components/MealAnalysisImageText";

gsap.registerPlugin(ScrollTrigger);

const Slides = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const panels = gsap.utils.toArray<HTMLElement>(
      wrapperRef.current.querySelectorAll(".section")
    );

    panels.pop(); // как в оригинале

    panels.forEach((panel) => {
      const innerPanel = panel.querySelector<HTMLElement>(".section-inner");
      if (!innerPanel) return;

      const panelHeight = innerPanel.offsetHeight;
      const windowHeight = window.innerHeight;
      const difference = panelHeight - windowHeight;

      const fakeScrollRatio =
        difference > 0 ? difference / (difference + windowHeight) : 0;

      if (fakeScrollRatio) {
        panel.style.marginBottom = `${panelHeight * fakeScrollRatio}px`;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: "bottom bottom",
          end: fakeScrollRatio ? `+=${innerPanel.offsetHeight}` : "bottom top",
          pin: true,
          pinSpacing: false,
          scrub: true,
        },
      });

      if (fakeScrollRatio) {
        tl.to(innerPanel, {
          yPercent: -100,
          y: windowHeight,
          duration: 1 / (1 - fakeScrollRatio) - 1,
          ease: "none",
        });
      }

      tl.fromTo(
        panel,
        { scale: 1, opacity: 1 },
        { scale: 0.7, opacity: 0.5, duration: 0.9 }
      ).to(panel, { opacity: 0, duration: 0.1 });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={wrapperRef} className="slides-wrapper mt-[400px]">
      <section className="section section-1">
        <div className="section-content">
          <div className="section-inner bg-[#8C6765]">
            <div className="flex items-center justify-center">
              <h1>Einfach</h1>
              <Rocket size={46} className="text-orange-500" />
              
            </div>
            <MealAnalysisBlock image1={""} image2={""} image3={""} />
            

          </div>
        </div>
      </section>

      <section className="section section-2">
        <div className="section-content">
          <div className="section-inner bg-[#5C805C]">
            <div className="flex items-center justify-center">
            <h1>Präzise</h1>
            <Target size={46} className="text-orange-500" />
            </div>
            <MealAnalysisVisual imageLeft={""} imageBottom={""} />

          </div>
        </div>
      </section>

      <section className="section section-3">
        <div className="section-content">
          <div className="section-inner bg-[#87658C]">
            <div className="flex items-center justify-center">
            <h1>Persönlich</h1>
            <User size={46} className="text-orange-500" />
            </div>
            <MealAnalysisImageText image={""} text={""} />
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default Slides;
