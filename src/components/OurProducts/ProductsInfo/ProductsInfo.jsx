import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProductsInfo.css';

import MosquitoCoil from '../../../assets/IMG_20250930_090503_778.jpg';
import MosquitoSpray from '../../../assets/IMG_20260722_211224_590.png';

const productsData = [
  {
    id: '01',
    tag: 'Product by Night Angel',
    category: 'Mosquito Coil',
    name: 'Night Angel Mosquito Coils',
    description: 'Eco-conscious coils developed from upcycled fruit peels and plant extracts. They offer sustainable, low-smoke protection for homes and outdoor spaces.',
    benefits: [
      'Chemical-free, low-irritant formula',
      'Synergistic botanical blend',
      'Long-lasting performance'
    ],
    image: MosquitoCoil
  },
  {
    id: '02',
    tag: 'Product by Night Angel',
    category: 'Insect Repellent Spray',
    name: 'Night Angel Insect Repellent Spray',
    description: 'A fine mist spray combining plant-derived repellents for quick-drying insect defense. It provides long-lasting protection while leaving a fresh fragrance.',
    benefits: [
      'Extended protection window',
      'Quick-drying, non-sticky feel',
      'Pleasant lingering fragrance'
    ],
    image: MosquitoSpray
  },
  {
    id: '03',
    tag: 'Product by Night Angel',
    category: 'Insect Repellent Cream',
    name: 'Night Angel Insect Repellent Cream',
    description: 'A nourishing skin cream blending plant-based repellents with effective moisturizers. It keeps unwanted insects away while leaving skin smooth and soft.',
    benefits: [
      'Deeply moisturizing & skin-softening',
      'Non-greasy, smooth application',
      'Subtle, fresh daily fragrance'
    ],
    image: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '04',
    tag: 'Product by PureGlow',
    category: 'Body Soap',
    name: 'PureGlow Body Soap',
    description: 'A botanical-rich cleansing bar designed to refresh skin during every bath. It creates a rich lather while adding a gentle layer of natural insect protection.',
    benefits: [
      'Gentle daily cleansing',
      'Rich, moisturizing lather',
      'Infused botanical protection'
    ],
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '05',
    tag: 'Product by Neat',
    category: 'Laundry Care',
    name: 'Neat Laundry Soap',
    description: 'A high-performance laundry soap engineered to lift tough stains and grime. It effectively eliminates odors while keeping your everyday fabrics soft and fresh.',
    benefits: [
      'Tackles tough stains & grime',
      'Deodorizes and refreshes fabrics',
      'Gentle on clothes, rich lather'
    ],
    image: 'https://images.unsplash.com/photo-1608248597266-c89050df2c1c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '06',
    tag: 'Product by AiraBloom',
    category: 'Liquid Air Freshener',
    name: 'AiraBloom Liquid Air Freshener',
    description: 'A balanced fragrance spray designed to instantly transform rooms and vehicles. Its refined mist spreads easily to create a fresh, inviting atmosphere.',
    benefits: [
      'Instant odor elimination',
      'Fine, even mist distribution',
      'Versatile for home and office'
    ],
    image: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '07',
    tag: 'Product by AiraBloom',
    category: 'Solid Air Freshener',
    name: 'AiraBloom Solid Air Freshener',
    description: 'A compact, no-spray solid format built for effortless freshness. It provides continuous, steady fragrance release ideal for enclosed spaces and wardrobes.',
    benefits: [
      'Continuous all-day freshness',
      'Effortless no-spray format',
      'Ideal for small spaces & wardrobes'
    ],
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '08',
    tag: 'Product by AiraBloom',
    category: 'Gel Air Freshener',
    name: 'AiraBloom Gel Air Freshener',
    description: 'A slow-release gel air freshener built for consistent performance. It maintains a pleasant, welcoming atmosphere over an extended period without daily maintenance.',
    benefits: [
      'Gradual slow-release formula',
      'Maintenance-free operation',
      'Space-saving design'
    ],
    image: 'https://images.unsplash.com/photo-1608248597266-c89050df2c1c?auto=format&fit=crop&w=800&q=80',
  }
];

const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const sliderRef = useRef(null);

  // Triple array to allow smooth, infinite looping in both directions
  const duplicatedProducts = [...productsData, ...productsData, ...productsData];

  // Instantly jump back to the center block if user scrolls into the outer cloned boundaries
  const handleScroll = () => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const singleSetWidth = container.scrollWidth / 3;

    if (container.scrollLeft <= 50) {
      container.scrollLeft += singleSetWidth;
    } else if (container.scrollLeft >= singleSetWidth * 2 - 50) {
      container.scrollLeft -= singleSetWidth;
    }
  };

  // Center the scroll position on initial load
  useEffect(() => {
    if (sliderRef.current) {
      const singleSetWidth = sliderRef.current.scrollWidth / 3;
      sliderRef.current.scrollLeft = singleSetWidth;
    }
  }, []);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -344, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 344, behavior: 'smooth' });
    }
  };

  return (
    <section className="products-section">
      <div className="products-container">

        <div className="products-header-row">
          <motion.div
            className="products-title-wrapper"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="products-badge">Innovation & Catalog</span>
            <h2 className="products-main-title">Sustainable Solutions<br />From Nature’s Wastes</h2>
          </motion.div>

          <div className="products-header-right">
            <motion.p
              className="products-header-desc"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Explore Peellnnova’s cutting-edge lineup of eco-friendly household essentials—expertly crafted from upcycled agricultural by-products to deliver powerful, chemical-free protection and everyday freshness.
            </motion.p>

            {/* Control Arrows */}
            <div className="products-nav-buttons">
              <button onClick={scrollLeft} aria-label="Previous Slide">
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button onClick={scrollRight} aria-label="Next Slide">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Viewport stretches edge-to-edge with no padding restrictions */}
      <div className="products-carousel-viewport">
        <div
          className="products-slider-wrapper"
          ref={sliderRef}
          onScroll={handleScroll}
        >
          {duplicatedProducts.map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              className="product-card"
              style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.05) 100%), url(${product.image})` }}
            >
              <div className="product-card-top">
                <div style={{ width: '1px' }}></div>
                <button
                  className="product-action-btn"
                  onClick={() => setSelectedProduct(product)}
                  aria-label="View Product Details"
                >
                  <i className="fa-solid fa-arrow-up"></i>
                </button>
              </div>

              <div className="product-card-info">
                <span className="product-category-tag">{product.category}</span>
                <h3>{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <div className="product-modal-backdrop" onClick={() => setSelectedProduct(null)}>
            <motion.div
              className="product-modal-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <button className="modal-close-btn" onClick={() => setSelectedProduct(null)}>
                <i className="fa-solid fa-xmark"></i>
              </button>

              <div className="modal-image-wrapper">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>

              <div className="modal-details-wrapper">
                <span className="modal-tag">{selectedProduct.tag}</span>
                <span className="modal-category">{selectedProduct.category}</span>
                <h2>{selectedProduct.name}</h2>
                <p className="modal-desc">{selectedProduct.description}</p>

                <div className="modal-benefits-section">
                  <h4>Key Benefits & Highlights:</h4>
                  <ul>
                    {selectedProduct.benefits.map((benefit, i) => (
                      <li key={i}>
                        <i className="fa-solid fa-check"></i> {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="modal-cta-btn" onClick={() => setSelectedProduct(null)}>
                  Close Details
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductsSection;