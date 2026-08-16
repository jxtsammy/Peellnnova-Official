import './ImpactMetrics.css';

const impactMetrics = [
  {
    number: '2,00+',
    label: 'Products Distributed',
    description: 'High-value health and wellness formulations delivered to households and health partners'
  },
  {
    number: '175+',
    label: 'Farmers Reached',
    description: 'Local agricultural partners empowered through organic waste upcycling initiatives.'
  },
  {
    number: '60+',
    label: 'Jobs Created',
    description: 'Direct, sustainable employment opportunities generated across processing and distribution networks.'
  },
  {
    number: '45+',
    label: 'Farmers trained',
    description: 'Agricultural workers upskilled in sustainable sourcing and sustainable waste recovery practices.'
  },
  {
    number: '1,500+',
    label: 'Community Members Impacted',
    description: 'Individuals benefiting directly from improved health access and local economic growth.'
  },
  {
    number: '15,000+',
    label: 'People Reached',
    description: 'Broad public engagement achieved through wellness awareness, health programs, and outreach.'
  }
];

const ImpactNumbers = () => {
  return (
    <section className="impact-numbers-section">
      <div className="impact-numbers-container">

        {/* Background Grid Pattern */}
        <div className="impact-numbers-grid-bg"></div>

        {/* Decorative Asterisk Star Icons */}
        <div className="impact-numbers-star star-left">✳</div>
        <div className="impact-numbers-star star-right">✳</div>

        {/* Header Content */}
        <div className="impact-numbers-header">
          <span className="impact-numbers-pill">Pioneering Health Through Bio-Innovation</span>
          <h2 className="impact-numbers-title">Our Impact Continues to Grow Through Innovation</h2>
        </div>

        {/* 6 Metrics Grid (2 rows x 3 columns) */}
        <div className="impact-numbers-grid">
          {impactMetrics.map((metric, index) => (
            <div key={index} className="impact-metric-card">
              <h3 className="impact-metric-number">{metric.number}</h3>
              <p className="impact-metric-label">{metric.label}</p>
              <p className="impact-metric-desc">{metric.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ImpactNumbers;