import StartPageHero from "./modules/startPageHero/startPageHero";
import WhyChooseUs from "./modules/whyChooseUs/whyChooseUs";
import Principles from "./modules/principles/principles";
import TargetAudience from "./modules/targetAudience/targetAudience";
import HowItWorks from "./modules/howItWorks/howItWorks";
import CodeSolutions from "./modules/codeSolutions/codeSolutions";
import WhyItsImportant from "./modules/whyItsImportant/whyItsImportant";
import StyleSwitcher from "./modules/styleSwitcher/styleSwitcher";
import SeoImportance from "./modules/seoImportance/seoImportance";

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
        <div className="container">
          The right pick
        </div>
      </div>
      <div className="componentMargin__top--2xl componentMargin__bottom--2xl">
        <div className="container">
          faq
        </div>
      </div>
      <div className="componentMargin__top--2xl componentMargin__bottom--2xl">
        <div className="container">
          contact form
        </div>
      </div>
      {/* <div className="componentMargin__top--2xl componentMargin__bottom--2xl">
        <div className="container">
          <WhyChooseUs />
        </div>
      </div>
      <div className="componentMargin__top--2xl componentMargin__bottom--2xl">
        <div className="container">
          <Principles />
        </div>
      </div>
      <div className="componentMargin__top--2xl componentMargin__bottom--2xl">
        <div className="container">
          <TargetAudience />
        </div>
      </div>
      <div className="componentMargin__top--2xl componentMargin__bottom--2xl">
        <div className="container">
          <HowItWorks />
        </div>
      </div>
      <div className="componentMargin__top--2xl componentMargin__bottom--2xl">
        <div className="container">
          <CodeSolutions />
        </div>
      </div>
      <div className="componentMargin__top--2xl componentMargin__bottom--2xl">
        <div className="container">
          <h1 className="d1">Contact form</h1>
        </div>
      </div> */}
    </main>
  );
}
