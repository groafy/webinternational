import StartPageHero from "./modules/startPageHero/startPageHero";
import WhyChooseUs from "./modules/whyChooseUs/whyChooseUs";
import Principles from "./modules/principles/principles";

export default function Home() {
  return (
    <main>
      <div className="componentMargin__top--lg componentMargin__bottom--xl">
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
    </main>
  );
}
