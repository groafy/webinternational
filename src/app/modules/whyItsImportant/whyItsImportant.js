import './whyItsImportant.scss'

export default function WhyItsImportant() {
    return (
        <section className="whyItsImportant__base">
            <div className='whyItsImportant__titleContainer'>
                <h1 className="h1 whyItsImportant__titleText">Importance of a <br /><span className="text--primary d1">Great design</span></h1>
                <p className='introText whyItsImportant__titleSubtext'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, vitae? Rem provident ab, architecto nihil, suscipit accusantium reiciendis dolor maiores tempora laborum aspernatur earum cumque nisi culpa, laboriosam fugit quibusdam?</p>
            </div>
            <div className='whyItsImportant__container'>
                <div className='whyItsImportant__toggleContainer'>
                    <button className='whyItsImportant__toggleButton'>Bad design</button>
                    <button className='whyItsImportant__toggleButton'>Good design</button>
                </div>
                <div className='whyItsImportant__exampleContainer'>
                    <div className='whyItsImportant__exampleBrowserNavBar'>
                        <div className='whyItsImportant__exampleBrowserNavBarItem'></div>
                        <div className='whyItsImportant__exampleBrowserNavBarItem'></div>
                        <div className='whyItsImportant__exampleBrowserNavBarItem'></div>
                    </div>
                    <div className='whyItsImportant__exampleBrowserInner'>

                        <div className='whyItsImportant__exampleHeader'>
                            <div className='whyItsImportant__exampleHeaderMeta'>
                                <span className='whyItsImportant__exampleHeaderMetaLink'>Example meta link 1</span>
                                <span className='whyItsImportant__exampleHeaderMetaLink'>Example meta link 2</span>
                            </div>
                            <div className='whyItsImportant__exampleHeaderMain'>
                                <span className='whyItsImportant__exampleHeaderLogo'>BadDesign</span>
                                <div className='whyItsImportant__exampleHeaderLinks'>
                                    <span className='whyItsImportant__exampleHeaderLinksItem'>Important link 1</span>
                                    <span className='whyItsImportant__exampleHeaderLinksItem'>Important link 2</span>
                                    <span className='whyItsImportant__exampleHeaderLinksItem'>CTA Link</span>
                                    <span className='whyItsImportant__exampleHeaderLinksItem'>Important link 3</span>
                                    <span className='whyItsImportant__exampleHeaderLinksItem'>Example link 4</span>
                                </div> 
                            </div>
                        </div>

                        <div className='whyItsImportant__exampleMainContent'>
                            <div className='whyItsImportant__exampleSideMenu'>
                                <span className='whyItsImportant__exampleSideMenuLink'>Not so important link 1</span>
                                <span className='whyItsImportant__exampleSideMenuLink'>Not so important link 2</span>
                                <span className='whyItsImportant__exampleSideMenuLink'>Not so important link 3</span>
                                <span className='whyItsImportant__exampleSideMenuLink'>Not so important link 4</span>
                                <span className='whyItsImportant__exampleSideMenuLink'>Not so important link 5</span>
                                <span className='whyItsImportant__exampleSideMenuLink'>Not so important link 6</span>
                                <span className='whyItsImportant__exampleSideMenuLink'>Not so important link 7</span>
                            </div>
                            <div className='whyItsImportant__exampleContentContainer'>
                                <div className='whyItsImportant__exampleContentBanner'>
                                    <span>Special Banner for promotion</span>
                                </div>
                                <span className='whyItsImportant__exampleContentHeading'>Main interesting title</span>
                                <span className='whyItsImportant__exampleContentSubHeading'>Subtext thats not too important</span>
                                <p className='whyItsImportant__exampleContentText'>Very long text Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum illum eos quibusdam consequatur aspernatur fugiat labore nostrum minus commodi impedit. Consectetur reprehenderit sapiente sunt nulla nam reiciendis iure aliquid labore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla veritatis facere error, voluptatem eum impedit delectus, doloremque officiis assumenda deleniti libero enim qui nostrum expedita hic consectetur quas exercitationem saepe?</p>
                                <div className='whyItsImportant__exampleContentImage'>Hero Image</div>
                                <div className='whyItsImportant__exampleSubContent'>
                                    <span className='whyItsImportant__exampleContentSubHeading'>Some other title</span>
                                    <p className='whyItsImportant__exampleContentText'>Very long text Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum illum eos quibusdam consequatur aspernatur fugiat labore nostrum minus commodi impedit. Consectetur reprehenderit sapiente sunt nulla nam reiciendis iure aliquid labore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla veritatis facere error, voluptatem eum impedit delectus, doloremque officiis assumenda deleniti libero enim qui nostrum expedita hic consectetur quas exercitationem saepe?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}