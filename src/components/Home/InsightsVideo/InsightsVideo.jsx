import { motion } from 'framer-motion';
import './Insights.css';

const InsightVideo = () => {
  const youtubeVideoId = "U2d6M2mjNsI?si=etPR9Qt0N45pQ8Aa";

  return (
    <section className="insight-video-section">
      <div className="insight-video-container">

        {/* Header */}
        <motion.div
          className="insight-video-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="insight-video-title">
            Discover Peellnnova in Action
          </h2>
          <p className="insight-video-subtitle">
            Watch our executive interview for an in-depth look at our journey, technology, and mission to transform agricultural waste into sustainable products.
          </p>
        </motion.div>

        {/* Video Player */}
        <motion.div
          className="insight-video-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${youtubeVideoId}`}
            title="Peellnnova Executive Interview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="insight-video-iframe"
          ></iframe>
        </motion.div>

      </div>
    </section>
  );
};

export default InsightVideo;