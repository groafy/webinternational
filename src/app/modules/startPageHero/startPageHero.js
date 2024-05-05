import './startPageHero.scss'

export default function StartPageHero() {
    return (
        <section className='startPageHero__base'>
            <div className='startPageHero__headingContainer'>
                <h1 className='d1 startPageHero__gridItemHeading'>Websites that just <br /><span className='text--primary'>WORK</span></h1>
                <p className='introText startPageHero__gridItemHeadingText'>
                    Elevate Your Digital Presence with Seamless Website Design: Where Functionality Reigns. Discover intuitive navigation, unmatched performance, and superior user experience. Join us in setting new standards for digital excellence. Let's build websites that drive results effortlessly.
                </p>
                <button className='btn startPageHero__gridItemHeadingButton'>Lets elevate your website</button>
            </div>
            <div className='startPageHero__grid'>
                <div className='startPageHero__gridItem startPageHero__gridItem--cta'>
                    <div className='startPageHero__gridItemHeadingContainer'>
                        <h1 className='d2 startPageHero__gridItemHeading'>Small team, <br /><span className='d1'>big results</span></h1>
                        <p className='introText startPageHero__gridItemHeadingText'>
                            Elevate Your Digital Presence with Seamless Website Design: Where Functionality Reigns. Discover intuitive navigation, unmatched performance, and superior user experience. Join us in setting new standards for digital excellence. Let's build websites that drive results effortlessly.
                        </p>
                    </div>
                    <a className='introText a startPageHero__gridItemHeadingLink'>
                        <span>Book a free consultation</span>
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#FFFF" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M6.13 4.27 9.87 8l-3.74 3.73"/></svg>
                    </a>
                </div>
                <div className='startPageHero__gridItem startPageHero__gridItem--image'>
                    <div className='startPageHero__gridItemImageContainer'>
                        <span className='d2 text--white startPageHero__gridItemChangingText'>
                            <span className='startPageHero__gridItemChangingTextInner'>Creative</span>
                        </span>
                        <span className='d2 text--white startPageHero__gridItemChangingText'>
                            <span className='startPageHero__gridItemChangingTextInner'>Modern</span>
                        </span>
                        <span className='d2 text--white startPageHero__gridItemChangingText'>
                            <span className='startPageHero__gridItemChangingTextInner'>Beautiful</span>
                        </span>
                        <span className='d2 text--white startPageHero__gridItemChangingText'>
                            <span className='startPageHero__gridItemChangingTextInner'>Functional</span>
                        </span>
                    </div>
                    <a className='introText a a--white startPageHero__gridItemHeadingLink'>
                        <span>Learn more about our values</span>
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#FFFF" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M6.13 4.27 9.87 8l-3.74 3.73"/></svg>
                    </a>
                </div>
            </div>
            <div className='startPageHero__linksGrid'>
                <div className='startPageHero__linksGridItem'>
                    <svg fill="#ffff" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 32 32"><path d="m30 16-8.48 8.48-2.83-2.82L24.34 16l-5.65-5.66 2.82-2.82L30 16zM2 16l8.48-8.48 2.83 2.82L7.66 16l5.65 5.66-2.82 2.82L2 16z"/></svg>
                    <span className='h1 startPageHero__linksGridItemTitle'>Web dev</span>
                </div>
                <div className='startPageHero__linksGridItem'>
                    <svg fill="#ffff" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 30 30"><path d="M8.28 5.45 5.45 8.28l1.07 1.06 1.41-1.41.7.7-1.4 1.42 1.4 1.41 1.42-1.4.7.7-1.4 1.41 1.4 1.42 2.84-2.83zm13 .44-2.66 2.66 2.83 2.83 2.66-2.66a11.98 11.98 0 0 0-2.83-2.83ZM17.2 9.97 6.6 20.57l-.71 3.54 3.53-.7L20.03 12.8Zm2.04 6.44-2.83 2.83 1.42 1.42 1.41-1.42.7.7-1.4 1.42 1.4 1.42 1.42-1.42.71.71-1.41 1.41 1.06 1.07 2.83-2.83z"/></svg>
                    <span className='h1 startPageHero__linksGridItemTitle'>Redesign</span>
                </div>
                <div className='startPageHero__linksGridItem'>
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 20 20"><path fill="#ffff" fill-rule="evenodd" d="m3.42 10.24-.2-.24a16.8 16.8 0 0 1 1.81-2.02C6.43 6.64 8.2 5.5 10 5.5c1.81 0 3.57 1.15 4.97 2.48a16.82 16.82 0 0 1 1.8 2.02 16.9 16.9 0 0 1-1.8 2.02c-1.4 1.33-3.16 2.48-4.97 2.48-1.81 0-3.57-1.15-4.97-2.48a16.8 16.8 0 0 1-1.62-1.78zm15.42-.79L18 10l.84.55-.02.02-.03.05a17.12 17.12 0 0 1-.63.86 18.8 18.8 0 0 1-1.81 2C14.85 14.9 12.6 16.5 10 16.5s-4.85-1.6-6.35-3.02a18.8 18.8 0 0 1-2.44-2.86 6.01 6.01 0 0 1-.03-.05l-.01-.02L2 10l-.84-.55.02-.02a6.84 6.84 0 0 1 .17-.24 18.8 18.8 0 0 1 2.3-2.66C5.15 5.1 7.4 3.5 10 3.5s4.85 1.6 6.35 3.02a18.8 18.8 0 0 1 2.44 2.86l.03.05.01.02zM18 10l.84-.55.35.55-.35.55L18 10zM1.16 9.45 2 10l-.84.55L.81 10l.35-.55zM9 10a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm1-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/></svg>
                    <span className='h1 startPageHero__linksGridItemTitle'>UX &WCAG</span>
                </div>
                <div className='startPageHero__linksGridItem startPageHero__linksGridItemCta'>
                    <h3 className='h2 startPageHero__linksGridItemCtaTitle'>Have a project in mind ? </h3>
                    <span className='introText startPageHero__linksGridItemCtaText'>Let's discuss your project</span>
                    <button className='btn startPageHero__linksGridItemCtaBtn'>info@webnexa.com</button>
                </div>
            </div>
        </section>
    );
}