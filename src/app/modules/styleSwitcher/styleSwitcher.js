import './styleSwitcher.scss';

export default function StyleSwitcher() {
    return (
        <section className='styleSwitcher__base'>
            <div className='styleSwitcher__titleContainer'>
                <h1 className="h1 styleSwitcher__titleText animate" data-animate-key="text-stagger" data-animate-delay="0">
                    Don&apos;t like our style ? <br />
                    <span className="text--primary d1 textcontentshadow animate" data-title="Switch it up !" data-animate-key="text-stagger" data-animate-delay="0.1">Swith it up !</span>
                </h1>
                <p className='introText styleSwitcher__titleSubtext animate' data-animate-key="text-stagger" data-animate-delay="0.2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, vitae? Rem provident ab, architecto nihil, suscipit accusantium reiciendis dolor maiores tempora laborum aspernatur earum cumque nisi culpa, laboriosam fugit quibusdam?
                </p>
            </div>
            <div className='styleSwitcher__container animate' data-animate-key="panel-out" data-animate-delay="0">
        
            </div>
        </section>
    )
}