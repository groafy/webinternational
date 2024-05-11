"use client"
import './targetAudience.scss'
import { InView } from "react-intersection-observer"

export default function TargetAudience(){
    const items = [
        "You want to elevate you online presence with a new website",
        "You have a website, but want to improve it.",
        "You have a design and are looking for someone to implement it.",
        "You have a website and want to improve the user experience and make it accessible."
    ]
    return (
        <section className="targetAudience__base">
            <h1 className="d1">Who&apos;s it <span className="text--primary">for</span> ?</h1>
            <ul className='targetAudience__grid'>
                {items.map((item, index) => (
                    <InView triggerOnce threshold={1} key={index}>
                        {({ inView, ref }) => (
                        <li className={inView ? 'targetAudience__gridItem targetAudience__gridItem--scrolled' : 'targetAudience__gridItem'} ref={ref}>
                            <h3 className='h2 targetAudience__gridItemTitle'>
                                {item}
                            </h3>
                        </li>
                        )}
                    </InView>
                ))}
            </ul>
        </section>
    )
}