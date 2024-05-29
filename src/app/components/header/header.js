"use client"
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import './header.scss';

gsap.registerPlugin(useGSAP,ScrollToPlugin);

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname();

    const goToContact = () => {
        gsap.to(window, { duration: 2, scrollTo: "#contact-form" });
    }

	useEffect(() => {
		const handleScroll = () => {
			if(pathname === "/") {
				setScrolled(window.scrollY >= 45)
			}
		}

		handleScroll()

		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [pathname])

    return (
        <header className={`header__base ${scrolled? "header__base--scrolled" : "header__base--unscrolled"}`}>
            <div className={`header__wrapper ${scrolled? "header__wrapper--scrolled" : "header__wrapper--unscrolled"}`}>
                <span className='header__logo h2'>
                    <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" tabIndex={-1} className="user-none">
                        <g>
                            <rect strokeWidth="0" id="svg_1" stroke="currentColor" fill="currentColor" height="10" width="10" y="1" x="1"/>
                            <rect strokeWidth="0" id="svg_2" stroke="currentColor" fill="currentColor" height="10" width="10" y="1" x="13"/>
                            <rect strokeWidth="0" id="svg_3" stroke="currentColor" fill="currentColor" height="10" width="10" y="13" x="1"/>
                        </g>
                    </svg>
                    <span>WEBNEXA</span>
                </span>
                <div className='header__quickLinksContainer'>
                    <button className='btn btn--primary header__ctaButton' onClick={() => goToContact()}>Contact Us</button>
                </div>
            </div>
        </header>
    )
}