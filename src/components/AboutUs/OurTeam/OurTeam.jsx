import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './OurTeam.css';

const teamMembers = [
  {
    id: 1,
    firstName: "Gilbert",
    lastName: "Yaw Sonny",
    role: "Co-Founder & CEO",
    bio: "Passionate herbal medicine innovator leading Peellnnova's vision, formulation research, and commercialization of sustainable community solutions.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    linkedin: "https://www.linkedin.com/in/gilbert-sonny-431450300?",
    email: "gilbertosonnybrown2001@gmail.com"
  },
  {
    id: 2,
    firstName: "Nafisah",
    lastName: "Hamidu Dauda",
    role: "Co-Founder & COO",
    bio: "Strategic operations professional driving business coordination, growth strategies, and impactful community partnerships.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    linkedin: "https://www.linkedin.com/in/nafisah-dauda-17536323a",
    email: "nafisahdauda99@gmail.com"
  },
  {
    id: 3,
    firstName: "Enoch",
    lastName: "Siekaah",
    role: "Co-Founder & UX Officer",
    bio: "Development planning innovator focused on user-centered product research, community engagement, and sustainable agricultural waste solutions.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    linkedin: "https://www.linkedin.com/in/enoch-siekaah-47aa26221",
    email: "esiekaah@gmail.com"
  },
  {
    id: 4,
    firstName: "Benedette",
    lastName: "Naame",
    role: "Lead Research Scientist",
    bio: "Manages HR, financial systems, and organizational planning to ensure operational efficiency and accountability during growth.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    linkedin: "https://www.linkedin.com/in/benedette-naame-658150172",
    email: "benedettewnaame@gmail.com"
  }
];

const OurTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredId, setHoveredId] = useState(null);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth <= 768 ? 1 : 3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const maxIndex = Math.max(0, teamMembers.length - itemsPerView);
  const safeIndex = Math.min(currentIndex, maxIndex);

  const renderCard = (member) => {
    const isHovered = hoveredId === member.id;
    return (
      <div
        key={member.id}
        className="team-member-card"
        onMouseEnter={() => setHoveredId(member.id)}
        onMouseLeave={() => setHoveredId(null)}
      >
        <img src={member.image} alt={`${member.firstName} ${member.lastName}`} className="team-member-img" />

        <div className={`team-member-default-info ${isHovered ? 'hidden' : ''}`}>
          <h4 className="card-name-text">{member.firstName} {member.lastName}</h4>
          <p className="card-role-text">{member.role}</p>
        </div>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="team-card-blue-slide"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="blue-slide-content">
                <h3 className="blue-card-name">{member.firstName} {member.lastName}</h3>
                <p className="blue-card-role">{member.role}</p>
                <p className="blue-card-bio">{member.bio}</p>
              </div>
              <div className="blue-card-socials">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href={`mailto:${member.email}`} aria-label="Email">
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section className="our-team-section" id='our-team-section'>
      <div className="team-container">

        {/* Section Header */}
        <div className="team-header-row">
          <div className="team-header-titles">
            <span className="team-tag">EXECUTIVE TEAM</span>
            <h2 className="team-main-title">Meet the Visionary Minds <br/> Behind Peellnnova</h2>
            <p className="team-header-description">
            Get to know the executives guiding our vision—dedicated innovators committed to advancing sustainable development and empowering communities.
            </p>
          </div>
          <div className="team-nav-buttons">
            <button className="team-arrow-btn" onClick={handlePrev} aria-label="Previous">
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button className="team-arrow-btn active" onClick={handleNext} aria-label="Next">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

        {/* Slider Viewport Track */}
        <div className="team-slider-viewport">
          {itemsPerView === 1 ? (
            <div className="team-mobile-fade-container">
              <AnimatePresence mode="wait">
                <motion.div
                  key={teamMembers[currentIndex].id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ width: '100%' }}
                >
                  {renderCard(teamMembers[currentIndex])}
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            <motion.div
              className="team-cards-track"
              animate={{ x: `calc(-${safeIndex * (100 / itemsPerView)}% - ${safeIndex * 20}px)` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {teamMembers.map((member) => renderCard(member))}
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
};

export default OurTeam;