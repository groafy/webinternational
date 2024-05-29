import StartPageHero from "./modules/startPageHero/startPageHero";
import WhyChooseUs from "./modules/whyChooseUs/whyChooseUs";
import TargetAudience from "./modules/targetAudience/targetAudience";
import CodeSolutions from "./modules/codeSolutions/codeSolutions";
import WhyItsImportant from "./modules/whyItsImportant/whyItsImportant";
import StyleSwitcher from "./modules/styleSwitcher/styleSwitcher";
import SeoImportance from "./modules/seoImportance/seoImportance";
import FaqAccordion from "./modules/faqAccordion/faqAccordion";
import ContactForm from "./modules/contactForm/contactForm";

export default function Home() {
  return (
    <main>
      <div className="componentMargin__top--none componentMargin__bottom--2xl">
        <div className="container">
          <StartPageHero />
        </div>
      </div>
      <div className="componentMargin__top--2xl componentMargin__bottom--2xl">
        <div className="container">
          <WhyItsImportant />
        </div>
      </div>
      <div className="componentMargin__top--2xl componentMargin__bottom--2xl">
        <div className="container">
          <SeoImportance />
        </div>
      </div>
      <div className="componentMargin__top--2xl componentMargin__bottom--2xl">
        <div className="container">
          <StyleSwitcher />
        </div>
      </div>
      <div className="componentMargin__top--2xl componentMargin__bottom--2xl">
        <div className="container">
          <CodeSolutions />
        </div>
      </div>
      <div className="componentMargin__top--2xl componentMargin__bottom--2xl">
        <div className="container">
          <TargetAudience />
        </div>
      </div>
      <div className="componentMargin__top--2xl componentMargin__bottom--2xl">
        <WhyChooseUs />
      </div>
      <div className="componentMargin__top--2xl componentMargin__bottom--2xl">
        <div className="container">
          <FaqAccordion />
        </div>
      </div>
      <div className="componentMargin__top--2xl componentMargin__bottom--2xl" id='contact-form'>
        <div className="container">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
