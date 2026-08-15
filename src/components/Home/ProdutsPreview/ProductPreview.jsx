import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Preview.css';

const ProductPreview = () => {
  const products = [
    {
      id: 1,
      title: 'Night Angel',
      description: 'Insect-repelling solutions. Innovative insect-repelling products developed around our commitment to healthier homes and sustainable solutions',
      image: 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=800&q=80',
      isHighlighted: false
    },
    {
      id: 2,
      title: 'Peellnnova Air Refreshers',
      description: 'Freshness inspired by thoughtful formulation. Will include liquid, gel, and solid variants.',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
      isHighlighted: true
    },
    {
      id: 3,
      title: 'Repellent Creams',
      description: 'Protection made for daily life. Skin-applied repellent formulated for everyday comfort and extended protection, wherever the day takes you',
      image: 'https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?auto=format&fit=crop&w=800&q=80',
      isHighlighted: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };

  return (
    <section className="product-preview-section">
      <div className="product-preview-container">

        {/* Header Area */}
        <div className="product-preview-header">
          <div className="product-preview-header-left">
            <span className="product-preview-tag">
              <span className="product-preview-dot"></span> Our Products
            </span>
            <h2 className="product-preview-title">
              Solutions made for everyday <br />
              life, from Repurposed Waste
            </h2>
          </div>

          <div className="product-preview-header-right">
            <Link to="/products" className="product-preview-btn-top">
              <span>View All Products</span>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>

        {/* 3 Product Cards Grid */}
        <motion.div
          className="product-preview-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className={`product-preview-card ${
                product.isHighlighted ? 'product-preview-card-highlight' : 'product-preview-card-standard'
              }`}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {!product.isHighlighted ? (
                <>
                  <div className="product-preview-img-wrapper">
                    <img src={product.image} alt={product.title} className="product-preview-img" />
                  </div>
                  <div className="product-preview-card-content">
                    <h3 className="product-preview-card-title">{product.title}</h3>
                    <p className="product-preview-card-text">{product.description}</p>
                    <Link to="/products" className="product-preview-link">
                      <span>Learn more</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <div className="product-preview-card-content">
                    <h3 className="product-preview-card-title">{product.title}</h3>
                    <p className="product-preview-card-text">{product.description}</p>
                    <Link to="/products" className="product-preview-link">
                      <span>Learn more</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                  <div className="product-preview-img-wrapper">
                    <img src={product.image} alt={product.title} className="product-preview-img" />
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ProductPreview;