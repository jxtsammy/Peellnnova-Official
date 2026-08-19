import { motion } from 'framer-motion';
import './ValueProposition.css';
import circular from '../../../assets/circular.jpg';
import science from '../../../assets/lab.jpg';
import innovation from '../../../assets/innovation.jpg'

const ValueProposition = () => {
  const cards = [
    {
      id: 1,
      title: 'Circular Products',
      description: 'We seek to transform underutilized agricultural resources into valuable products.',
      image: circular,
      isDark: false,
    },
    {
      id: 2,
      title: 'Science & Formulation',
      description: 'We combine formulation knowledge, research and product development.',
      image: science,
      isDark: true, // Black highlighted card in middle
    },
    {
      id: 3,
      title: 'African Innovation',
      description: 'We develop solutions inspired by the realities, resources and needs of African communities.',
      image: innovation,
      isDark: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section className="value-prop-section">
      {/* Background Image with Dark Gradient Overlay */}
      <div className="value-prop-bg-overlay"></div>

      <div className="value-prop-container">

        {/* Header Block */}
        <div className="value-prop-header">
          <div className="value-prop-header-left">
            <span className="value-prop-tag">Unique Value Proposition</span>
            <h2 className="value-prop-title">
              What makes <br />
              Peellnnova different?
            </h2>
          </div>
          <div className="value-prop-header-right">
            <p className="value-prop-lead">
              We empower sustainable innovation by turning organic waste into eco-friendly products, driving environmental impact and long-term economic growth.
            </p>
          </div>
        </div>

        {/* 3 Column Cards Grid */}
        <motion.div
          className="value-prop-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              className={`value-prop-card ${card.isDark ? 'card-dark' : 'card-light'}`}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="card-top-content">
                <div className="card-header-row">
                  <h3 className="card-title">{card.title}</h3>
                  <div className="card-arrow-icon">
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </div>
                </div>
                <p className="card-desc">{card.description}</p>
              </div>

              <div className="card-img-wrapper">
                <img src={card.image} alt={card.title} className="card-img" />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ValueProposition;