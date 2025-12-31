// gallery-gsap.ts
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(ScrollTrigger, Flip);

export const initGalleryGSAP = (galleryId: string) => {
  const galleryElement = document.getElementById(galleryId);
  if (!galleryElement) return;

  const galleryItems = galleryElement.querySelectorAll<HTMLElement>(".gallery__item");

  const flipCtx = gsap.context(() => {
    galleryElement.classList.add("gallery--final");
    const flipState = Flip.getState(galleryItems);
    galleryElement.classList.remove("gallery--final");

    const flip = Flip.to(flipState, {
      simple: true,
      ease: "expoScale(1, 5)",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: galleryElement,
        start: "center center",
        end: "+=100%",
        scrub: true,
        pin: galleryElement.parentNode instanceof HTMLElement ? galleryElement.parentNode : undefined,
      },
    });

    tl.add(flip);

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
      gsap.set(galleryItems, { clearProps: "all" });
    };
  });

  const handleResize = () => {
    galleryElement.classList.remove("gallery--final");
    const flipState = Flip.getState(galleryItems);
    Flip.to(flipState, { simple: true, ease: "expoScale(1, 5)" });
  };

  window.addEventListener("resize", handleResize);

  // Функция для очистки при размонтировании
  return () => {
    flipCtx.revert();
    window.removeEventListener("resize", handleResize);
  };
};
