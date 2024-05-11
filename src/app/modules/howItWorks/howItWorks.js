import './howItWorks.scss'

export default function HowItWorks() {
    return (
        <section className='howItWorks__base'>
            <h2 className='d1 howItWorks__heading'>How it <span className='text--primary'>works</span></h2>
            <ol className='howItWorks__grid'>
                <li className='howItWorks__gridItem'></li>
                <li className='howItWorks__gridItem'></li>
                <li className='howItWorks__gridItem'></li>
                <li className='howItWorks__gridItem'></li>
            </ol>
        </section>
    )
}