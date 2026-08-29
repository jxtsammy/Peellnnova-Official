
import './Hero.css';

const CreativeHeroEdge = () => {
  return (
    <section className="creative-hero-edge">
      <div className="center-hero-content">

        {/* Background Radial Sunburst Effect */}
        <div className="sunburst-graphic"></div>

        {/* Giant Edge-to-Edge Neon Lime Text */}
        <h1 className="giant-neon-text">peellnnova <br/> limited <br/> company</h1>

        {/* Overlaid Dark Typography Box */}
        <div className="hero-overlay-box">
          <h2>
            We're a creative <br />
            digital agency
          </h2>
          <div className="lime-dot"></div>
        </div>

      </div>
    </section>
  );
};

export default CreativeHeroEdge;