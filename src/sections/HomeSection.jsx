
import { hero } from "../data/companyData.js";

function HomeSection() {
  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <h1 className="hero__title">{hero.title}</h1>
        </div>

        <div className="hero__description">
          <p className="hero__desc">{hero.description}</p>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;