import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(ScrollTrigger, Flip);

let initialized = false;
let flipCtx;

if (!initialized) {
  initialized = true;

  const createTween = () => {
    const galleryElement = document.querySelector("#gallery-8");
    if (!galleryElement) return;

    const galleryItems = galleryElement.querySelectorAll(".gallery__item");

    flipCtx && flipCtx.revert();
    galleryElement.classList.remove("gallery--final");

    flipCtx = gsap.context(() => {
      galleryElement.classList.add("gallery--final");
      const flipState = Flip.getState(galleryItems);
      galleryElement.classList.remove("gallery--final");

      const flip = Flip.to(flipState, {
        simple: true,
        ease: "expoScale(1, 5)",
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: galleryElement,
          start: "center center",
          end: "+=100%",
          scrub: true,
          pin: galleryElement.parentNode,
        },
      }).add(flip);
    });
  };

  requestAnimationFrame(createTween);
  window.addEventListener("resize", createTween);
}
