import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function animateSection3(trigger: HTMLElement) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(".title, .paragraph", {
        opacity: 0,
        y: -50,
    })
    gsap.set(".item", {
        opacity: 0,
        x: -50,
    })
    gsap.set("img", {
        opacity: 0,
        x: -50,
    })

    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: trigger,
            start: "top center",
            end: "bottom top",
        }, duration: 0.5, ease: "power2.out",
    })

    timeline.to(".title", {
        opacity: 1,
        y: 0,
    }).to(".paragraph", {
        opacity: 1,
        y: 0,
    }).to("img", {
        opacity: 1,
        x: 0,
    }, '<').to(".item", {
        opacity: 1,
        duration: 1,
        x: 0,
        stagger: 0.1,
    }, '<')
}

