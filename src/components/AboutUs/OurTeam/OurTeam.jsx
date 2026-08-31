import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './OurTeam.css';

const teamMembers = [
  {
    id: 1,
    firstName: "Gilbert",
    lastName: "Yaw Sonny",
    role: "Co-Founder & CEO. Administration",
    bio: "Gilbert Yaw Sonny is a herbal medicine innovator and entrepreneur passionate about turning African scientific knowledge and agricultural waste into practical solutions for healthier communities. As Co-Founder and CEO of Peellnnova Limited Company, he leads the company's vision, formulation research, product development and commercialization. He has led multidisciplinary projects and represented Ghana on major national and international innovation platforms. His ambition is to build scalable African health innovations that create value from local resources while improving lives and livelihoods.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    linkedin: "https://www.linkedin.com/in/gilbert-sonny-431450300?",
    email: "gilbertosonnybrown2001@gmail.com",
    isHighlighted: true
  },
  {
    id: 2,
    firstName: "Nafisah",
    lastName: "Hamidu Dauda",
    role: "Co-Founder & COO. Operations",
    bio: "An entrepreneur and strategic operations professional passionate about building impactful businesses that create sustainable opportunities for communities. As Co-Founder and COO of Peellnnova Limited Company, she supports business operations, coordination, partnerships and the execution of the company's growth strategy. Her experience spans entrepreneurship, project leadership, sales and marketing, and innovation ecosystems. She has participated in entrepreneurial and leadership programmes strengthening her ability to translate ideas into practical impact.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    linkedin: "https://www.linkedin.com/in/nafisah-dauda-17536323a",
    email: "nafisahdauda99@gmail.com",
    isHighlighted: false
  },
  {
    id: 3,
    firstName: "Enoch",
    lastName: "Siekaah",
    role: "Co-Founder & User Experience Officer",
    bio: "Siekaah is a development planning professional and sustainability-focused innovator passionate about transforming environmental challenges into practical community solutions. As Co-Founder and User Experience Officer at Peellnnova Limited Company, he contributes to user-centered product development, research, community engagement and the integration of sustainability into the company's solutions. His experience includes research, project planning, community engagement and working with agricultural waste to develop value-added solutions.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    linkedin: "https://www.linkedin.com/in/enoch-siekaah-47aa26221",
    email: "esiekaah@gmail.com",
    isHighlighted: false
  },
  {
    id: 4,
    firstName: "Benedette",
    lastName: "Naame",
    role: "Lead Research Scientist",
    bio: "Benedette leads Peellnnova's human resources and financial management, helping build the people, systems and financial discipline needed for sustainable growth. She supports budgeting, resource allocation, team development and organizational planning, ensuring that Peellnnova's operations remain efficient and accountable as the company expands. With a strong background in project management and team leadership, Benedette plays an important role in strengthening Peellnnova's internal capacity.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    linkedin: "https://www.linkedin.com/in/benedette-naame-658150172",
    email: "benedettewnaame@gmail.com",
    isHighlighted: false
  }
];

export default function OurTeam() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollContainerRef = useRef(null);

  const handleOpenModal = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section className="our-team-section">
      <div className="team-container">

        <motion.div
          className="team-header-col"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="team-tag">• OUR TEAM</span>
            <h2 className="team-main-title">Innovative Team Behind PeelInnova</h2>
            <p className="team-description">
              Our team consists of skilled professionals with expertise in strategy, operations, analytics, and sustainable innovation.
            </p>
          </div>

          <div className="team-carousel-controls">
            <motion.button
              className="control-btn dark-btn"
              onClick={scrollLeft}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll left"
            >
              <i className="fa-solid fa-arrow-left" style={{ color: '#bcf800' }}></i>
            </motion.button>
            <motion.button
              className="control-btn neon-btn"
              onClick={scrollRight}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll right"
            >
              <i className="fa-solid fa-arrow-right" style={{ color: '#112211' }}></i>
            </motion.button>
          </div>
        </motion.div>

        <div className="team-cards-track" ref={scrollContainerRef}>
          {teamMembers.map((member, index) => (
            <motion.div
              className="team-card"
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={member.image} alt={`${member.firstName} ${member.lastName}`} className="team-card-img" />

              <motion.button
                className="card-arrow-btn"
                onClick={() => handleOpenModal(member)}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                aria-label="View member details"
              >
                <i className="fa-solid fa-arrow-up-right-from-square" style={{ color: '#112211', fontSize: '14px' }}></i>
              </motion.button>

              <div className="team-card-overlay">
                <span className="card-role-text">{member.role.split('.')[0]}</span>
                <h3 className="card-name-text">{member.firstName} {member.lastName}</h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <AnimatePresence>
        {isModalOpen && selectedMember && (
          <motion.div
            className="team-modal-backdrop"
            onClick={handleCloseModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="team-modal-box"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <motion.button
                className="modal-close-btn"
                onClick={handleCloseModal}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close modal"
              >
                <i className="fa-solid fa-xmark" style={{ color: '#333' }}></i>
              </motion.button>

              <div className="modal-grid-layout">
                <div className="modal-img-wrapper">
                  <img src={selectedMember.image} alt={selectedMember.firstName} className="modal-img" />
                </div>

                <div className="modal-info-wrapper">
                  <span className="modal-role">{selectedMember.role}</span>
                  <h3 className="modal-name">{selectedMember.firstName} {selectedMember.lastName}</h3>

                  <div className="modal-bio-container">
                    <p className="modal-bio">{selectedMember.bio}</p>
                  </div>

                  <div className="modal-socials-row">
                    <motion.a
                      href={selectedMember.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-circle-btn"
                      whileHover={{ scale: 1.1, backgroundColor: '#d1fae5' }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="LinkedIn profile"
                    >
                      <i className="fa-brands fa-linkedin-in" style={{ color: '#007a3f' }}></i>
                    </motion.a>

                    <motion.a
                      href={`mailto:${selectedMember.email}`}
                      className="social-circle-btn"
                      whileHover={{ scale: 1.1, backgroundColor: '#d1fae5' }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Send email"
                    >
                      <i className="fa-solid fa-envelope" style={{ color: '#007a3f' }}></i>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}