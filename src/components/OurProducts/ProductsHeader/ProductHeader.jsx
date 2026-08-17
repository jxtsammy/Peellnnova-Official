import { motion } from 'framer-motion';
import './ProductHeader.css';

const ProductHeader = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
    },
  };

  return (
    <section className="product-header-section">
      <motion.div
        className="product-header-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >

        {/* Hero Title Block */}
        <motion.h1 className="product-header-main-title" variants={itemVariants}>
          <span className="product-header-title-dark">
          Upcycling organic peels into quality products
          </span>
          <span className="product-header-title-muted">
             crafted for essential care.
          </span>
        </motion.h1>

        {/* Bottom Dual Description Columns */}
        <motion.div className="product-header-bottom-row" variants={itemVariants}>
          <p className="product-header-desc-left">
            We turn agricultural waste into essential bio-compounds and health formulations made for everyday living.
          </p>

          <p className="product-header-desc-right">
            Every product combines scientific precision with local sourcing to deliver safe, effective, and zero-waste solutions.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProductHeader;