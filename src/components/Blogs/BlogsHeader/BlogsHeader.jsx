import { motion } from 'framer-motion';
import './BlogsHeader.css';

const BlogHeader = () => {
  return (
    <section className="peellnnova-blog-hero">
      <div className="peellnnova-blog-hero-container">

        {/* Main Title and Description Wrapper */}
        <div className="hero-content-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="hero-title-wrapper"
          >
            <h1 className="peellnnova-hero-main-title">
              Peellnnova <br/> blogs
            </h1>
          </motion.div>
        </div>

        {/* Bottom-left or side-aligned indicator icon */}
        <motion.div
          initial={{ opacity: 0, x: -20, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hero-arrow-box"
        >
          <i className="fa-solid fa-arrow-down-long"></i>
        </motion.div>

      </div>
    </section>
  );
};

export default BlogHeader;