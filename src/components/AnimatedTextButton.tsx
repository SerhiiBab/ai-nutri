import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function AnimatedTextButton() {
  const textRef = useRef<HTMLDivElement>(null);
  const splitRef = useRef<SplitText | null>(null);

  useEffect(() => {
    if (!textRef.current) return;

    // Создаем SplitText один раз
    splitRef.current = new SplitText(textRef.current, { type: "chars" });

    // Анимация только при загрузке
    gsap.from(splitRef.current.chars, {
      y: 10,
      opacity: 0,
      duration: 0.5,
      ease: "power4.out",
      stagger: 0.035,
    });

    return () => {
      splitRef.current?.revert();
    };
  }, []);

  return (
    <div ref={textRef} className="max-xl:max-w-9/10 hero-block--text__2 text-6xl text-black text-center transition max-md:text-4xl max-xl:text-5xl" id="words">
          AI-gestützte <br />
          Ernährungsanalyse
    </div>
  );
}
