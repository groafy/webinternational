"use client"
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import './header.scss';

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()

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
                    <div className='header__quickLinksContactContainer'>
                        <span className='header__quickLinksContactContainerItem'>(+420) 601 187 121</span>
                        <span className='header__quickLinksContactContainerItem'>dverezlin@email.cz</span>
                    </div>
                    <button className='btn header__ctaButton'>Contact Us</button>
                    <button className="header__menuBtn">
                        <svg aria-hidden="true" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z"></path></svg>
                    </button>
                </div>
                {/* <nav className='header__nav'>
                    <a href="#" className='header__navItem'>Dveře</a>
                    <a href="#" className='header__navItem'>Okna</a>
                    <a href="#" className='header__navItem'>Interiéry</a>
                    <a href="#" className='header__navItem'>O nás</a>
                    <a href="#" className='header__navItem'>Dveře</a>
                </nav>
                <div className='header__quickLinksContainer'>
                    <div className='header__quickLinksContactContainer'>
                        <span className='header__quickLinksContactContainerItem'>(+420) 601 187 121</span>
                        <span className='header__quickLinksContactContainerItem'>dverezlin@email.cz</span>
                    </div>
                    <button className='btn header__ctaButton'>Vytvořit poptávku</button>
                    <button className="header__menuBtn">
                        <svg aria-hidden="true" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z"></path></svg>
                    </button>
                </div> */}
            </div>
        </header>
    )
}