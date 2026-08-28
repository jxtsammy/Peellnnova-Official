import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import './ExistStyle.css';
import bgImage from '../../../assets/exist.png';
import farmer from '../../../assets/farmer.jpg';

const MotionLink = motion(Link);

const WhyWeExist = () => {
  const navigate = useNavigate();

  const highlights = [
    {
      icon: 'fa-solid fa-recycle',
      title: 'Waste Reduction & Recycling',
      text: "Waste shouldn't be the end of a resource. We transform waste into valuable products, reducing environmental impact."
    },
    {
      icon: 'fa-solid fa-seedling',
      title: 'Sustainable Agriculture',
      text: 'Agricultural by-products can become valuable inputs for new products and industries, promoting circular economy practices.'
    },
    {
      icon: 'fa-solid fa-heart-pulse',
      title: 'Community Health & Well-being',
      text: "Health shouldn't be at the expense of the environment."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };

  const leftCardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: 'easeOut' }
    }
  };

  const handleTeamClick = (e) => {
    e.preventDefault();
    navigate('/about');
    setTimeout(() => {
      const element = document.getElementById('team-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <section
      className="why-exist-section"
      id="why-exist-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="why-exist-overlay"></div>

      <motion.div
        className="why-exist-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div className="why-exist-card" variants={leftCardVariants}>
          <div className="card-badge">
            <i className="fa-solid fa-circle-info"></i>
            <span>Why We Exist</span>
          </div>
          <h2 className="exist-card-title">
            Africa has problems that <br />
            deserve African Solutions.
          </h2>

          <div className="card-image-wrapper">
            <motion.img
              src={farmer}
              alt="Farmer working in field"
              className="card-image"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </motion.div>

        <div className="why-exist-content">
          <div className="content-highlights">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="highlight-item"
                variants={itemFadeUp}
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
              >
                <div className="highlight-icon">
                  <i className={item.icon}></i>
                </div>
                <div className="highlight-text">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p className="content-description" variants={itemFadeUp}>
            Everyday solutions should consider both human wellbeing and environmental responsibility.
            Innovation shouldn't be limited to the places that already have everything. Africa has resources,
            talent and creativity to develop solutions for its own challenges. We are committed to supporting
            local communities and fostering sustainable development. <br />
            Peellnnova exists at the intersection of these three ideas.
          </motion.p>

          <motion.div className="action-group" variants={itemFadeUp}>
            <MotionLink
              to="/about"
              className="btn-learn-more"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Learn More</span>
              <span className="icon-circle">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </MotionLink>

            <motion.a
              href="/about#team-section"
              className="link-team"
              onClick={handleTeamClick}
              whileHover={{ x: 4 }}
            >
              <span>Our Team</span>
              <i className="fa-solid fa-arrow-right"></i>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhyWeExist;