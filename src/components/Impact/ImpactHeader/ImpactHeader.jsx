import './ImpactHeader.css';

const ImpactHeader = () => {
  return (
    <section className="impact-header-section">
      <div className="impact-header-container">

        {/* Top Row: Header Title & Image Banner side-by-side */}
        <div className="impact-header-top-row">
          <div className="impact-header-title-group">
            <h1 className="impact-header-main-title">
              <span className="impact-header-title-top">Sustainable</span>
              <span className="impact-header-title-bottom">Impact through  <br/>quality innovation </span>
            </h1>
          </div>
        </div>

        {/* Bottom Row: Plus Decor & Description */}
        <div className="impact-header-bottom-row">
          <div className="impact-header-decor-crosses">
            <span>+</span>
            <span>+</span>
            <span>+</span>
          </div>

          <p className="impact-header-description">
            Discover how PeelInnova advances wellness and healthcare—upcycling organic peel derivatives into high-value bio-compounds and formulation standards that elevate human health and personal well-being.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ImpactHeader;