import './howItWorks.scss'

export default function HowItWorks() {
    return (
        <section className='howItWorks__base'>
            <h2 className='d1 howItWorks__heading'>How it <span className='text--primary'>works</span></h2>
            <ol className='howItWorks__grid'>
                <li className='howItWorks__gridItem'>
                    <div className='howItWorks__gridItemTitleContainer'>
                        <span className='howItWorks__gridItemMarker'></span>
                        <h2 className='h1 howItWorks__gridItemTitle'>Contact Us</h2>
                    </div>
                </li>
                <li className='howItWorks__gridItem'>
                    <div className='howItWorks__gridItemTitleContainer'>
                        <span className='howItWorks__gridItemMarker'></span>
                        <h2 className='h1 howItWorks__gridItemTitle'>We give an offer</h2>
                    </div>
                </li>
                <li className='howItWorks__gridItem'>
                    <div className='howItWorks__gridItemTitleContainer'>
                        <span className='howItWorks__gridItemMarker'></span>
                        <h2 className='h1 howItWorks__gridItemTitle'>We start working</h2>
                    </div>
                </li>
                <li className='howItWorks__gridItem'>
                    <div className='howItWorks__gridItemTitleContainer'>
                        <span className='howItWorks__gridItemMarker'></span>
                        <h2 className='h1 howItWorks__gridItemTitle'>We deliver</h2>
                    </div>
                </li>
            </ol>
            <div>
                <h1 className='d2'>Work doesnt stop after we deliver</h1>
                <p className='introText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ipsum inventore blanditiis quaerat rerum minima ullam architecto maiores quidem velit ad similique accusamus consequatur sint ut vitae porro incidunt illo!</p>
            </div>
        </section>
    )
}