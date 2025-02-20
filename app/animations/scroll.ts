import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function animateScroll() {
  const scrollConfig = {
    trigger: ".animate-scroll",
    start: "top top",
    end: "+=10000",
    scrub: true,
    pin: true,
  };

  const timeline = gsap.timeline({
    scrollTrigger: scrollConfig,
    ease: "none"
  });

  gsap.set(".section", {
    position: "absolute",
    top: 0,
    left: 0,
    yPercent: 100
  });

  const sections = gsap.utils.toArray(".section");

  timeline
    .to(sections[0]!, { yPercent: 0 })
    .to(sections[1]!, { yPercent: 0 })
    .to('.content2', { yPercent: -30 })
    .to(sections[2]!, { yPercent: 0 })
    .to('.content3', { yPercent: -30 });
}
