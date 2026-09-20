import './JoinCommunity.css';
import img from '../../../assets/enactusworldcup252-53.jpg';
import { motion } from 'framer-motion';

export default function CommunitySection() {
  return (
    <section className="community-section" id='community-section'>
      {/* Left Dark Card (30% width) */}
      <motion.div
        className="community-card-left"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >

        <div className="card-content">
          <motion.h2
            className="community-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Let’s grow together as a Community!
          </motion.h2>

          <motion.p
            className="community-desc"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            Connect, collaborate, and grow alongside innovators building the future with Peellnnova.
          </motion.p>

          <motion.div
            className="card-action-row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            {/* Non-clickable button/badge */}
            <div className="join-badge">Join the Community</div>

            {/* Clickable Hyperlink Arrow Button with hover scale */}
            <motion.a
              href="https://chat.whatsapp.com/IGuLo14dAxN7DDfL1nQ4WG?s=cl&p=a&mlu=4&ilr=4"
              target="_blank"
              rel="noopener noreferrer"
              className="arrow-btn"
              aria-label="Navigate link"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
          </motion.div>
        </div>

      </motion.div>

      {/* Right Image Card (70% width) */}
      <motion.div
        className="community-card-right"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      >
        <motion.img
          src={img}
          alt="Community growth representation"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </motion.div>
    </section>
  );
}