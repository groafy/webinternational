import './styleSwitcher.scss';

export default function StyleSwitcher() {
    return (
        <section className='styleSwitcher__base'>
            <div className='styleSwitcher__titleContainer'>
                <h1 className="h1 styleSwitcher__titleText">
                    Don&apos;t like our style ? <br /><span className="text--primary d1 textcontentshadow" data-title="Switch it up !">Swith it up !</span>
                </h1>
                <p className='introText styleSwitcher__titleSubtext'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, vitae? Rem provident ab, architecto nihil, suscipit accusantium reiciendis dolor maiores tempora laborum aspernatur earum cumque nisi culpa, laboriosam fugit quibusdam?
                </p>
            </div>
            <div className='styleSwitcher__container'>
        
            </div>
        </section>
    )
}