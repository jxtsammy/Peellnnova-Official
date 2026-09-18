import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Partners.css';
import KIC from '../../../assets/partnerLogos/KIC.png';
import Fidelity from '../../../assets/partnerLogos/FidelityBankGhana.png';
import Innohub from '../../../assets/partnerLogos/innohub.png';
import Enactus from '../../../assets/partnerLogos/enactus.png';
import HultPrize from '../../../assets/partnerLogos/hultPrize.png';
import SDGOlympiad from '../../../assets/partnerLogos/sdgOlympaid.png';
import KNUST from '../../../assets/partnerLogos/knust.png';
import Beautex from '../../../assets/partnerLogos/Beatex.png';
import AGEA from '../../../assets/partnerLogos/agea.png';
import ClimateLaunchpad from '../../../assets/partnerLogos/climateLaunchpad.png';
import UNU from '../../../assets/partnerLogos/unuFlores.png';
import GhanaPresidency from '../../../assets/partnerLogos/ghanaPresidency.png';
import ECOWAS from '../../../assets/partnerLogos/ecowas.png';

const partnersData = [
  {
    name: "Kosmos Innovation Center (KIC)",
    category: "Innovation & Agribusiness",
    description: "Empowering young entrepreneurs and driving agricultural innovation across Ghana.",
    logo: KIC
  },
  {
    name: "Fidelity Bank Ghana",
    category: "Financial Partner",
    description: "Providing financial support, banking solutions, and strategic business growth mentorship.",
    logo: Fidelity
  },
  {
    name: "Innohub",
    category: "Accelerator & Hub",
    description: "Accelerating early-stage startups with business incubation and technical assistance.",
    logo: Innohub
  },
  {
    name: "Enactus Ghana / Enactus KNUST",
    category: "Entrepreneurship Network",
    description: "Global network of student leaders using entrepreneurial action to transform communities.",
    logo: Enactus
  },
  {
    name: "Hult Prize",
    category: "Global Competition",
    description: "Inspiring the next generation of social entrepreneurs to solve world challenges.",
    logo: HultPrize
  },
  {
    name: "SDG Olympiad",
    category: "Sustainability",
    description: "Advancing global sustainable development goals through youth-led innovations.",
    logo: SDGOlympiad
  },
  {
    name: "Kwame Nkrumah University of Science and Technology (KNUST)",
    category: "Academic Institution",
    description: "Our foundational academic hub for research, engineering, and product incubation.",
    logo: KNUST
  },
  {
    name: "PWG Farms",
    category: "Agricultural Partner",
    description: "Collaborating on raw material sourcing, waste-to-resource pipelines, and field testing.",
    logo: "https://via.placeholder.com/120x40?text=PWG+Farms"
  },
  {
    name: "Presidential Pitch Initiative / Office of the President",
    category: "Government & National Support",
    description: "Recognizing and backing high-impact national youth-led startup innovations.",
    logo: GhanaPresidency
  },
  {
    name: "Beatex Enterprise",
    category: "Manufacturing & Production",
    description: "Partnering on scale-up manufacturing operations and green product packaging.",
    logo: Beautex
  },
  {
    name: "African German Entrepreneurship Academy (AGEA)",
    category: "Capacity Building",
    description: "Connecting African startups with international entrepreneurship frameworks and training.",
    logo: AGEA
  },
  {
    name: "ECOWAS Startup Awards",
    category: "Regional Recognition",
    description: "Honoring top innovative startups driving economic and sustainable growth in West Africa.",
    logo: ECOWAS
  },
  {
    name: "ClimateLaunchpad",
    category: "Green Business",
    description: "The world's largest green business ideas competition, fostering clean-tech innovation.",
    logo: ClimateLaunchpad
  },
  {
    name: "United Nations University / UNU-FLORES",
    category: "Research & Development",
    description: "Collaborating on nexus-oriented research for sustainable resource management.",
    logo: UNU
  }
];

const PartnersSection = () => {
  const [showAll, setShowAll] = useState(false);

  const visiblePartners = showAll ? partnersData : partnersData.slice(0, 8);

  return (
    <section id="partners-section" className="partners-section">
      <div className="partners-container">

        {/* Header Row: Left Title, Right Description */}
        <div className="partners-header-row">
          <motion.div
            className="partners-title-wrapper"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="partners-badge">Ecosystem & Collaboration</span>
            <h2 className="partners-main-title">Partners, Programmes &<br />Ecosystem Collaborators</h2>
          </motion.div>

          <motion.p
            className="partners-header-desc"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We are proud to collaborate with leading institutions, accelerators, and innovators shaping sustainable manufacturing and community impact.
          </motion.p>
        </div>

        {/* Partners Grid Container with AnimatePresence */}
        <div className="partners-grid-wrapper">
          <motion.div className="partners-grid" layout>
            <AnimatePresence>
              {visiblePartners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  className="partner-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  layout
                >
                  {/* Default State Content (Logo & Category Tag) */}
                  <div className="partner-front">
                    <div className="partner-logo-container">
                      <img src={partner.logo} alt={`${partner.name} logo`} className="partner-logo" />
                    </div>
                    <span className="partner-tag">{partner.category}</span>
                  </div>

                  {/* Hover State Content (Blue Card) */}
                  <div className="partner-hover-overlay">
                    <h3>{partner.name}</h3>
                    <p>{partner.description}</p>
                    <span className="partner-hover-action">Explore Collaboration <i className="fa-solid fa-arrow-right"></i></span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Faded gradient overlay when collapsed */}
          {!showAll && <div className="partners-fade-overlay" />}
        </div>

        {/* Show More / Show Less Toggle Button */}
        <div className="partners-toggle-wrapper">
          <button
            className="partners-toggle-btn"
            onClick={() => setShowAll(!showAll)}
          >
            <span>{showAll ? 'Show Less Partners' : 'Show All Partners'}</span>
            <i className={`fa-solid fa-chevron-down ${showAll ? 'rotate' : ''}`}></i>
          </button>
        </div>

      </div>
    </section>
  );
};

export default PartnersSection;