import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './OurTeam.css';

const teamMembers = [
  {
    id: 1,
    firstName: "Gilbert",
    lastName: "Yaw Sonny",
    role: "Co-Founder & CEO. Administration",
    bio: "Passionate about building seamless mobile and web applications with modern design systems.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    linkedin: "https://linkedin.com",
    email: "julie.salley@example.com",
    isHighlighted: true
  },
  {
    id: 2,
    firstName: "Nafisah",
    lastName: "Hamidu Dauda",
    role: "Co-Founder & COO. Operations",
    bio: "Driving strategic vision and sustainable growth across global circular economy markets.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    linkedin: "https://linkedin.com",
    email: "alex.rivera@example.com",
    isHighlighted: false
  },
  {
    id: 3,
    firstName: "Enoch",
    lastName: "Siekaah",
    role: "Co-Founder & User Experience Officer",
    bio: "Optimizing supply chains and scaling sustainable eco-cleaner production pipelines.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    linkedin: "https://linkedin.com",
    email: "sophia.chen@example.com",
    isHighlighted: false
  },
  {
    id: 4,
    firstName: "Benedette",
    lastName: "Naame",
    role: "Lead Research Scientist",
    bio: "Pioneering bio-fertilizer formulations derived directly from agricultural peel waste.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    linkedin: "https://linkedin.com",
    email: "marcus.vance@example.com",
    isHighlighted: false
  }
];

const TeamSection = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      checkScrollPosition();
      el.addEventListener('scroll', checkScrollPosition);
      window.addEventListener('resize', checkScrollPosition);
    }
    return () => {
      if (el) {
        el.removeEventListener('scroll', checkScrollPosition);
      }
      window.removeEventListener('resize', checkScrollPosition);
    };
  }, []);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="team-section" id='team-section'>
      <div className="team-container">

        {/* Header Controls */}
        <div className="team-header">
          <div>
            <span className="team-tagline">MEET THE TEAM</span>
            <h2 className="team-title">The Innovators <br/> Behind PeelInnova</h2>
          </div>

          <div className="team-nav-buttons">
            <button
              className={`team-nav-btn ${canScrollLeft ? 'active' : 'inactive'}`}
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button
              className={`team-nav-btn ${canScrollRight ? 'active' : 'inactive'}`}
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll right"
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

        {/* Carousel Grid */}
        <div className="team-cards-wrapper" ref={scrollRef}>
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className={`team-card ${member.isHighlighted ? 'highlighted-card' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Top Text Section */}
              <div className="card-top">
                <div className="card-pills-row">
                  <span className="role-pill">{member.role}</span>
                  <div className="icon-badge">
                    <i className="fa-solid fa-leaf"></i>
                  </div>
                </div>

                <h3 className="member-name">
                  <span className="first-name">{member.firstName}</span>
                  <span className="last-name">{member.lastName}</span>
                </h3>

                <p className="member-bio">{member.bio}</p>
              </div>

              {/* Bottom Image Box */}
              <div className="card-image-box">
                <img
                  src={member.image}
                  alt={`${member.firstName} ${member.lastName}`}
                  className="member-img"
                />

                {/* Dark Green Social Pill Aligned Left */}
                <div className="action-pill">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-icon-link"
                    aria-label={`${member.firstName} LinkedIn Profile`}
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <span className="action-divider"></span>
                  <a
                    href={`mailto:${member.email}`}
                    className="action-icon-link"
                    aria-label={`Send email to ${member.firstName}`}
                  >
                    <i className="fa-regular fa-envelope"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;