import './whyChooseUs.scss'

export default function WhyChooseUs() {
    return (
        <section className="whyChooseUs__base">
            <div className='container whyChooseUs__container'>
                <div className='whyChooseUs__textContainer'>
                    <h1>The <br /><span className='d1 textcontentshadow textcontentshadow--primary' data-title="RIGHT FIT">RIGHT FIT</span></h1>
                    <p className='introText'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quidem ex cupiditate porro atque eaque, cum facere optio totam pariatur vero fuga! Atque nostrum iure dignissimos corrupti cupiditate est? Suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quidem ex cupiditate porro atque eaque, cum facere optio totam pariatur vero fuga! Atque nostrum iure dignissimos corrupti cupiditate est? Suscipit.
                    </p>
                    <button className='btn btn--primary'>Book a free consultation</button>
                </div>
                <div className='whyChooseUs__logoContainer'>
                    <img src="/mainlogo.svg" className='whyChooseUs__logo' />
                </div>
            </div>
        </section>
    )
}