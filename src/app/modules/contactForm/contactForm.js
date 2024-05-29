import './contactForm.scss';

export default function ContactForm() {
    return (
        <section className='contactForm__base'>
            <div className='contactForm__textContainer'>
                <h1 className='h1 animate' data-animate-key="text-stagger" data-animate-delay="0">
                    Your future success is just <br />
                    <span className='d1 text--primary textcontentshadow animate' data-title="ONE EMAIL AWAY" data-animate-key="text-stagger" data-animate-delay="0.1">ONE EMAIL AWAY</span> 
                </h1>
            </div>
            <div className='contactForm__container'>
                <div className='contactForm__teaserContainer'>
                    <h2 className='h2 animate' data-animate-key="text-stagger" data-animate-delay="0">We are happy you wanna work with us</h2>
                    <p className='introText animate' data-animate-key="text-stagger" data-animate-delay="0.1">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur necessitatibus cumque voluptates laborum dolorem asperiores facere alias aliquid atque, tenetur officia rerum, harum culpa saepe impedit beatae nam. Maiores, similique!
                    </p>
                </div>
                <div className='contactForm__formContainer'>
                    <form className='contactForm__form'>
                        <div className='contactForm__formRow animate' data-animate-key="text-stagger" data-animate-delay="0">
                            <label className='contactForm__formLabel'>Name</label>
                            <input type="text" className='contactForm__formInput' />
                        </div>
                        <div className='contactForm__formRow animate' data-animate-key="text-stagger" data-animate-delay="0.1">
                            <label className='contactForm__formLabel'>Email</label>
                            <input type="text" className='contactForm__formInput' />
                        </div>
                        <div className='contactForm__formRow animate' data-animate-key="text-stagger" data-animate-delay="0.2">
                            <label className='contactForm__formLabel'>Company</label>
                            <input type="text" className='contactForm__formInput' />
                        </div>
                        <div className='contactForm__formRow animate' data-animate-key="text-stagger" data-animate-delay="0.3">
                            <label className='contactForm__formLabel'>Message</label>
                            <textarea className='contactForm__formInput'></textarea>
                        </div>
                        <button className='btn btn--primary animate' data-animate-key="text-stagger" data-animate-delay="0.4">Send</button>
                    </form>
                </div>
            </div>
        </section>
    )
}