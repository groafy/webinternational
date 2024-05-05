import StartPageHero from "./modules/startPageHero/startPageHero";
import WhyChooseUs from "./modules/whyChooseUs/whyChooseUs";
import Principles from "./modules/principles/principles";
import TargetAudience from "./modules/targetAudience/targetAudience";

export default function Home() {
  return (
    <main>
      <div className="componentMargin__top--lg componentMargin__bottom--2xl">
        <div className="container">
          <StartPageHero />
        </div>
      </div>
      <div className="componentMargin__top--xl componentMargin__bottom--xl">
        <div className="container">
          <WhyChooseUs />
        </div>
      </div>
      <div className="componentMargin__top--xl componentMargin__bottom--xl">
        <div className="container">
          <Principles />
        </div>
      </div>
      <div className="componentMargin__top--xl componentMargin__bottom--xl">
        <div className="container">
          <TargetAudience />
        </div>
      </div>
      <div className="componentMargin__top--xl componentMargin__bottom--xl">
        <div className="container">
          <h1 className="d1">Programming solutions</h1>
        </div>
      </div>
      <div className="componentMargin__top--xl componentMargin__bottom--xl">
        <div className="container">
          <h1 className="d1">Contact form</h1>
        </div>
      </div>
    </main>
  );
}
