'use client';
import { useState } from 'react';
import './whyItsImportant.scss'

export default function WhyItsImportant() {
    const [isGood, setIsGood] = useState(false);

    return (
        <section className="whyItsImportant__base">
            <div className='whyItsImportant__titleContainer'>
                <h1 className="h1 whyItsImportant__titleText">Importance of a <br /><span className="text--primary d1">Great design</span></h1>
                <p className='introText whyItsImportant__titleSubtext'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, vitae? Rem provident ab, architecto nihil, suscipit accusantium reiciendis dolor maiores tempora laborum aspernatur earum cumque nisi culpa, laboriosam fugit quibusdam?</p>
            </div>
            <div className='whyItsImportant__container'>
                <div className='whyItsImportant__toggleContainer'>
                    <button 
                        className={!isGood ? 'whyItsImportant__toggleButton whyItsImportant__toggleButton--selected' : 'whyItsImportant__toggleButton'} 
                        onClick={() => setIsGood(false)}
                    >
                        Bad design
                    </button>
                    <button 
                        className={isGood ? 'whyItsImportant__toggleButton whyItsImportant__toggleButton--selected' : 'whyItsImportant__toggleButton'}  
                        onClick={() => setIsGood(true)}
                    >
                        Good design
                    </button>
                </div>
                <div className='whyItsImportant__exampleContainer'>
                    <div className='whyItsImportant__exampleBrowserNavBar'>
                        <div className='whyItsImportant__exampleBrowserNavBarItem'></div>
                        <div className='whyItsImportant__exampleBrowserNavBarItem'></div>
                        <div className='whyItsImportant__exampleBrowserNavBarItem'></div>
                    </div>
                    <div className='whyItsImportant__exampleBrowserInner'>
                        { !isGood && (
                            <div className='whyItsImportant__example whyItsImportant__example--bad'>
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
                                            <span className='whyItsImportant__exampleHeaderLinksItem'>Not so important link 3</span>
                                            <span className='whyItsImportant__exampleHeaderLinksItem'>Not so important link 4</span>
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
                                        <span className='whyItsImportant__exampleContentHeading'>Main interesting title that is way too long for this section</span>
                                        <span className='whyItsImportant__exampleContentSubHeading'>Subtext for this section</span>
                                        <p className='whyItsImportant__exampleContentText'>Very long text Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum illum eos quibusdam consequatur aspernatur fugiat labore nostrum minus commodi impedit. Consectetur reprehenderit sapiente sunt nulla nam reiciendis iure aliquid labore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla veritatis facere error, voluptatem eum impedit delectus, doloremque officiis assumenda deleniti libero enim qui nostrum expedita hic consectetur quas exercitationem saepe?</p>
                                        <span className='whyItsImportant__exampleContentCtaLink'>This is a CTA link</span>
                                        <div className='whyItsImportant__exampleContentImage'>Hero Image</div>
                                        <div className='whyItsImportant__exampleSubContent'>
                                            <span className='whyItsImportant__exampleContentSubHeading'>Some other title</span>
                                            <p className='whyItsImportant__exampleContentText'>Very long text Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum illum eos quibusdam consequatur aspernatur fugiat labore nostrum minus commodi impedit. Consectetur reprehenderit sapiente sunt nulla nam reiciendis iure aliquid labore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla veritatis facere error, voluptatem eum impedit delectus, doloremque officiis assumenda deleniti libero enim qui nostrum expedita hic consectetur quas exercitationem saepe?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        { isGood && (
                            <div className='whyItsImportant__goodExample'>
                                <div className='whyItsImportant__goodExampleHeader'>
                                    <div className='whyItsImportant__goodExampleHeaderMeta'>
                                        <span className='whyItsImportant__goodExampleHeaderMetaItem'>Meta link 1</span>
                                        <span className='whyItsImportant__goodExampleHeaderMetaItem'>Meta link 2</span>
                                    </div>
                                    <div className='whyItsImportant__goodExampleHeaderMain'>
                                        <span className='whyItsImportant__goodExampleHeaderLogo'>
                                            <svg aria-hidden="true" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z"></path></svg>
                                            GoodDesign
                                        </span>
                                        <div className='whyItsImportant__goodExampleHeaderLinks'>
                                            <span className='whyItsImportant__goodExampleHeaderLinksItem'>Important link 1</span>
                                            <span className='whyItsImportant__goodExampleHeaderLinksItem'>Important link 2</span>
                                        </div> 
                                        <button className='whyItsImportant__goodExampleCTAButton'>CTA link</button>
                                    </div>
                                </div>
                                <div className='whyItsImportant__goodExampleInner'>
                                    <div className='whyItsImportant__goodExampleHero'>
                                        <div className='whyItsImportant__goodExampleHeroLeft'>
                                            <span className='whyItsImportant__goodExampleTitle'>Main interesting title</span>
                                            <span className='whyItsImportant__goodExampleSubtitle'>Subtext for this section</span>
                                            <p className='whyItsImportant__goodExampleText'>Very long text Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum illum eos quibusdam consequatur aspernatur fugiat labore nostrum minus commodi impedit. Consectetur reprehenderit sapiente sunt nulla nam reiciendis iure aliquid labore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla veritatis facere error, voluptatem eum impedit delectus, doloremque officiis assumenda deleniti libero enim qui nostrum expedita hic consectetur quas exercitationem saepe?</p>
                                            <button className='whyItsImportant__goodExampleCTAButton'>CTA link</button>
                                        </div>
                                        <div className='whyItsImportant__exampleContentImage'>Hero Image</div>
                                    </div>
                                    <div className='whyItsImportant__exampleContentBanner'>
                                        <span>Special Banner for promotion</span>
                                    </div>
                                    <div className='whyItsImportant__goodExampleSubContent'>
                                        <span className='whyItsImportant__goodExampleTitle'>Some other title</span>
                                        <p className='whyItsImportant__goodExampleText'>Very long text Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum illum eos quibusdam consequatur aspernatur fugiat labore nostrum minus commodi impedit. Consectetur reprehenderit sapiente sunt nulla nam reiciendis iure aliquid labore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla veritatis facere error, voluptatem eum impedit delectus, doloremque officiis assumenda deleniti libero enim qui nostrum expedita hic consectetur quas exercitationem saepe?</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}