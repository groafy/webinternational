import './principles.scss'

export default function Principles() {
    return (
        <section className="principles__base">
            <h1 className="d1 principles__heading">Our <span className="text--primary">values</span></h1>
            <div className="principles__grid">
                <div className="principles__gridItem">
                    <h2 className='h1'>Clean code solutions</h2>
                </div>
                <div className="principles__gridItem">
                    <h2 className='h1'>UX over all</h2>
                </div>
                <div className="principles__gridItem">
                    <h2 className='h1'>Designs that will last</h2>
                </div>
            </div>
        </section>
    )
}