import './principles.scss'

export default function Principles() {
    return (
        <section className="principles__base">
            <h1 className="d1 principles__heading">Our <span className="text--primary">values</span></h1>
            <div className="principles__grid">
                <div className="principles__gridItem">
                    <h2 className='h1'>Crafting Clean Code Solutions</h2>
                    <p className='introText'>
                        At Webnexa, we believe in the power of clean code. Our websites are built on a foundation of precision and efficiency, ensuring seamless functionality and easy maintenance.
                    </p>
                </div>
                <div className="principles__gridItem">
                    <h2 className='h1'>Prioritizing UX Above All</h2>
                    <p className='introText'>
                        User experience is at the heart of everything we do. With Webnexa, expect websites that not only look stunning but also deliver intuitive navigation and a delightful user journey.
                    </p>
                </div>
                <div className="principles__gridItem">
                    <h2 className='h1'>Timeless Designs for Lasting Impact</h2>
                    <p className='introText'>
                        Your website is an investment in your brand&apos;s future. That&apos;s why we focus on creating designs that stand the test of time, ensuring your online presence remains captivating and relevant for years to come.
                    </p>
                </div>
            </div>
        </section>
    )
}