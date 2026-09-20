import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './ProductExtras.css';

const Counter = ({ target, suffix = '+' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const incrementTime = duration / target;

    const timer = setInterval(() => {
      start += 1;
      if (start > target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, Math.max(incrementTime, 10));

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const ProductExtras = () => {
  return (
    <section className="product-extras-section">
      <div className="product-extras-container">

        {/* Left Side: Badge & Stats matching the image reference layout */}
        <motion.div
          className="extras-left-col"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="extras-stats-row">
            <div className="stat-item">
              <h3><Counter target={10} suffix="+" /></h3>
              <p>Units Sold</p>
            </div>
            <div className="stat-item">
              <h3><Counter target={500} suffix="+" /></h3>
              <p>Lives Reached</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Main Text & Social Proof */}
        <motion.div
          className="extras-right-col"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="extras-main-text">
            Every Peellnnova product is purposefully formulated to build healthier lives—protecting
            individuals from harsh chemicals, nurturing safer environments for families, and
            fostering sustainable wellbeing across local communities.
          </p>

          <div className="extras-footer-row">
            <div className="extras-avatars">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Community Member" />
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Family User" />
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Individual Consumer" />
            </div>
            <span className="extras-quote-text">
              Peellnnova products helped us build healthier routines while protecting our environment. It changed how we live.
            </span>
          </div>
        </motion.div>

      </div>

      {/* Large Background Watermark at the Bottom */}
      <div className="extras-watermark">Our Products</div>
    </section>
  );
};

export default ProductExtras;