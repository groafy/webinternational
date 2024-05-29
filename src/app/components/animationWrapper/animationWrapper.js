"use client";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function AnimationWrapper({children}) {
    const callback = function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.timeline.play();
                observer.unobserve(entry.target);
            }
        });
    };

    const observerOptions = {
        rootMargin: '100px',
        threshold: 0.2
    };

    useEffect(() => {
        const observer = new IntersectionObserver(callback, observerOptions);
        const animationEls = document.querySelectorAll('.animate');
        animationEls.forEach(el => {
            let action;
            let delay = 0;

            const key = el.getAttribute("data-animate-key");
            const delayVal = el.getAttribute("data-animate-delay");

            if(delayVal) {
                delay = parseFloat(delayVal);
            }

            switch(key) {
                case "text-stagger":
                    action = gsap.timeline({paused:true}).fromTo(el, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 0.5, ease: 'expo.inOut', delay: delay });
                    break;
                case "panel-out":
                    action = gsap.timeline({paused:true}).fromTo(el, { scale: 0.8 }, { scale: 1,  duration: 0.5, ease: 'expo.inOut' });
                    break;
                case "shift-up":
                    action = gsap.timeline({paused:true}).fromTo(el, { y: 50, scale: 0.8 }, { y: 0, scale: 1,  duration: 0.2, ease: 'expo.inOut', delay: delay });
                    break;
                case "shift-up-scaled":
                    action = gsap.timeline({paused:true}).fromTo(el, { y: 50, scale: 0.8 }, { y: -20, scale: 2,  duration: 0.5, ease: 'expo.inOut', delay: delay });
                    break;
                default:
                    console.warn("now key found");
            }
            el.timeline = action;
            observer.observe(el);
        });
    }, []);

    return (
        <main>
            {children}
        </main>
    )
}