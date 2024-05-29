import './seoImportance.scss'

export default function SeoImportance() {
    return (
        <section className='seoImportance__base'>
            <div className='seoImportance__headingContainer'>
                <h1 className='h1 animate' data-animate-key="text-stagger" data-animate-delay="0">
                    You might not care <br />
                    <span className='text--primary d2 textcontentshadow animate' data-animate-key="text-stagger" data-animate-delay="0.1" data-title='But your metrics do'>
                        But your metrics do
                    </span>
                </h1>
            </div>
            <div className='seoImportance__container animate' data-animate-key="panel-out">
                <div className='seoImportance__metricsContainer'>
                    <div className='seoImportance__metricsItem animate' data-animate-key="shift-up" data-animate-delay="0.1">
                        <span>100</span>
                    </div>
                    <div className='seoImportance__metricsItem animate' data-animate-key="shift-up-scaled" data-animate-delay="0.2">
                        <span>100</span>
                    </div>
                    <div className='seoImportance__metricsItem animate' data-animate-key="shift-up" data-animate-delay="0.3">
                        <span>100</span>
                    </div>
                </div>
                <p className='introText seoImportance__metricsText animate' data-animate-key="text-stagger" data-animate-delay="0">
                    Good website UX (User Experience) and design, coupled with effective SEO (Search Engine Optimization), are critical components for online success. An intuitive and aesthetically pleasing website design enhances user engagement by making navigation easy and enjoyable, thereby reducing bounce rates and increasing time spent on the site. Good UX ensures that users can quickly find the information or products they need, which boosts customer satisfaction and loyalty. SEO, on the other hand, makes the website visible to search engines, driving organic traffic by ensuring that the site ranks high for relevant keywords. Together, excellent UX, design, and SEO create a seamless and efficient user journey from discovery to conversion, ultimately driving higher traffic, better user retention, and increased sales or conversions for businesses.
                </p>
            </div>
        </section>
    )
}