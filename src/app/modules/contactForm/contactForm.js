import './contactForm.scss';

export default function ContactForm() {
    return (
        <section className='contactForm__base'>
            <div className='contactForm__textContainer'>
                <h1 className='h1'>
                    Your future success is just <br />
                    <span className='d1 text--primary textcontentshadow' data-title="ONE EMAIL AWAY">ONE EMAIL AWAY</span> 
                </h1>
            </div>
            <div className='contactForm__container'>
                <div className='contactForm__teaserContainer'>
                    <h2 className='h2'>We are happy you wanna work with us</h2>
                    <p className='introText'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur necessitatibus cumque voluptates laborum dolorem asperiores facere alias aliquid atque, tenetur officia rerum, harum culpa saepe impedit beatae nam. Maiores, similique!
                    </p>
                </div>
                <div className='contactForm__formContainer'>
                    <form className='contactForm__form'>
                        <div className='contactForm__formRow'>
                            <label className='contactForm__formLabel'>Name</label>
                            <input type="text" className='contactForm__formInput' />
                        </div>
                        <div className='contactForm__formRow'>
                            <label className='contactForm__formLabel'>Email</label>
                            <input type="text" className='contactForm__formInput' />
                        </div>
                        <div className='contactForm__formRow'>
                            <label className='contactForm__formLabel'>Company</label>
                            <input type="text" className='contactForm__formInput' />
                        </div>
                        <div className='contactForm__formRow'>
                            <label className='contactForm__formLabel'>Message</label>
                            <textarea className='contactForm__formInput'></textarea>
                        </div>
                        <button className='btn btn--primary'>Send</button>
                    </form>
                </div>
            </div>
        </section>
    )
}