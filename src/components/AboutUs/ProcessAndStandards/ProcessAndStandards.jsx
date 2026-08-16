import { motion } from 'framer-motion';
import './ProcessAndStandards.css';
import img from '../../../assets/maa.jpg';

const processPoints = [
  {
    id: '01',
    iconClass: 'fa-solid fa-leaf',
    title: 'Responsibly sourced agricultural inputs'
  },
  {
    id: '02',
    iconClass: 'fa-solid fa-flask-vial',
    title: 'Formulated and tested by our science team'
  },
  {
    id: '03',
    iconClass: 'fa-solid fa-industry',
    title: 'Manufactured to consistent quality standards'
  }
];

const ProcessSection = () => {
  return (
    <section className="process-section">
      <div className="process-container">

        {/* Left Side Image */}
        <motion.div
          className="process-image-wrapper"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={img}
            alt="Agricultural Innovation and Testing"
            className="process-img"
          />
        </motion.div>

        {/* Right Side Content */}
        <motion.div
          className="process-content"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="process-pill">OUR PROCESS & STANDARDS</span>

          <h2 className="process-title">Quality innovations you can trust</h2>

          {/* Paragraph Above Main Points */}
          <p className="process-lead">
          Every Peellnnova product goes through a defined process — sourced agricultural resources, formulation research,
           and manufacturing under consistent quality and safety standards. B
           efore a product reaches a home, it is tested for performance and safety. Three short points:

          </p>

          {/* 3 Main Points Grid */}
          <div className="process-points-grid">
            {processPoints.map((point) => (
              <div key={point.id} className="process-point-card">
                <div className="point-icon-badge">
                  <i className={point.iconClass}></i>
                </div>
                <h3 className="point-title">{point.title}</h3>
              </div>
            ))}
          </div>

          {/* Closing Line Below Points */}
          <div className="process-closing">
            <p className="closing-text">
              Delivering verified performance and reliability from lab formulation to final application.
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default ProcessSection;