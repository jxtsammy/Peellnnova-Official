import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProductsInfo.css';
import MosquitoCoil from '../../../assets/IMG_20250930_090503_778.jpg'
import MosquitoSpray from '../../../assets/IMG_20260722_211224_590.png'

const productsData = [
  {
    id: '01.',
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
    id: '02.',
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
    id: '03.',
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
    id: '04.',
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
    id: '05.',
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
    id: '06.',
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
    id: '07.',
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
    id: '08.',
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

const filledSquareCells = [
  { top: '80px', left: '160px' },
  { top: '240px', right: '240px' },
  { top: '400px', left: '80px' },
  { top: '560px', right: '400px' }
];

const ProductSection = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [cardWidth, setCardWidth] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (cardRef.current) {
        const width = cardRef.current.offsetWidth;
        const gap = 24;
        setCardWidth(width + gap);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % productsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + productsData.length) % productsData.length);
  };

  const product = productsData[currentIndex];

  return (
    <section className="product-accordion-section" id='product-accordion-section'>
      <div className="slanted-bg-layer" aria-hidden="true">
        <div className="square-grid-pattern"></div>
        {filledSquareCells.map((pos, idx) => (
          <div key={idx} className="filled-grid-square" style={pos} />
        ))}
      </div>

      <div className="product-accordion-container">
        <div className="product-accordion-header">
          <div className="product-header-left">
            <span className="product-header-sub">Our Solutions</span>
            <h2 className="product-header-title">Discover Our Products</h2>
          </div>

          <div className="product-nav-controls">
            <button
              type="button"
              className="carousel-nav-btn"
              onClick={handlePrev}
              aria-label="Previous product"
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button
              type="button"
              className="carousel-nav-btn"
              onClick={handleNext}
              aria-label="Next product"
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

        {/* DESKTOP VIEWPORT (Sliding Track) */}
        <div className="carousel-viewport desktop-only-carousel">
          <motion.div
            className="carousel-track"
            animate={{ x: -currentIndex * cardWidth }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {productsData.map((item, index) => (
              <div
                key={item.id}
                ref={index === 0 ? cardRef : null}
                className="custom-product-card"
              >
                <div className="card-media-side">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="card-media-img"
                  />
                </div>

                <div className="card-content-side">
                  <div className="card-grid-overlay" aria-hidden="true"></div>

                  <div className="card-inner-top">
                    <span className="pill-badge">Product by Peellnnova</span>
                    <p className="card-main-quote">{item.description}</p>

                    <div className="card-benefits-block">
                      <span className="card-benefits-title">Key Benefits:</span>
                      <ul className="card-benefits-list">
                        {item.benefits.map((benefit, bIndex) => (
                          <li key={bIndex}>
                            <span className="benefit-dot">•</span> {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="card-inner-bottom">
                    <div>
                      <h3 className="card-author-name">{item.name}</h3>
                      <span className="card-author-role">{item.category}</span>
                    </div>

                    <div className="card-accent-star" aria-hidden="true">
                      ★
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* MOBILE VIEWPORT (Fade-in / Fade-out Crossfade) */}
        <div className="fade-carousel-viewport mobile-only-carousel">
          <AnimatePresence mode="wait">
            <motion.div
              key={product.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="custom-product-card"
            >
              <div className="card-media-side">
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-media-img"
                />
              </div>

              <div className="card-content-side">
                <div className="card-grid-overlay" aria-hidden="true"></div>

                <div className="card-inner-top">
                  <span className="pill-badge">Product by Peellnnova</span>
                  <p className="card-main-quote">{product.description}</p>

                  <div className="card-benefits-block">
                    <span className="card-benefits-title">Key Benefits:</span>
                    <ul className="card-benefits-list">
                      {product.benefits.map((benefit, bIndex) => (
                        <li key={bIndex}>
                          <span className="benefit-dot">•</span> {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="card-inner-bottom">
                  <div>
                    <h3 className="card-author-name">{product.name}</h3>
                    <span className="card-author-role">{product.category}</span>
                  </div>

                  <div className="card-accent-star" aria-hidden="true">
                    ★
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default ProductSection;