import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Blogs.css';

const BlogSection = () => {
  const blogPages = [
    [
      {
        id: 1,
        category: "KNUST",
        title: "KNUST Startup Peellnnova Sweeps National and Global Awards for Eco-Friendly Mosquito Repellent Innovation",
        description: "The Ghanaian health-focused venture has won a string of prestigious awards this year, including a bronze medal at the SDG Summer School in Geneva, winning project for the National Hult Prize competition, and the Enactus Ghana National Championship, where the team represented Ghana at the global finals in Thailand.",
        readTime: "4 min read",
        image: "https://www.knust.edu.gh/sites/default/files/2025-10/IMG_20251005_154835_308.jpg",
        featured: true
      },
      {
        id: 2,
        category: "KNUST",
        title: "KNUST Startup Peellnnova Wins GHC 100,000 in GreenTech Challenge for Sustainable Innovation",
        description: "Peellnnova Limited Company, emerged as one of the top winners at the GreenTech Innovation Challenge 2025 (GTIC), receiving ₵100,000 in support of its groundbreaking innovation.",
        readTime: "3 min read",
        image: "https://www.knust.edu.gh/sites/default/files/2025-10/IMG-20251018-WA0019.jpg",
        featured: false
      },
      {
        id: 3,
        category: "KNUST",
        title: "Fidelity Bank Invests GH₵1 Million to Boost Climate-Smart Enterprises",
        description: "Peellnnova is featured among the top three winners of the GreenTech Innovation Challenge and received GHC 100,000.",
        readTime: "5 min read",
        image: "https://www.graphic.com.gh/images/2025/sept/30/fidel.jpg",
        featured: false
      },
      {
        id: 4,
        category: "Graphic Online",
        title: "President Mahama Honours Enactus KNUST National Champions at Jubilee House",
        description: "The 2025 Enactus Ghana National Champions, Enactus KNUST, has been honoured by President John Dramani Mahama at a special ceremony held at the Jubilee House in Accra.",
        readTime: "4 min read",
        image: "https://www.knust.edu.gh/sites/default/files/inline-images/image-1000x607%20-%202025-07-07T194747.394.jpg",
        featured: false
      }
    ],
    // Page 2 (Another set of 4 items)
    [
      {
        id: 5,
        category: "KNUST",
        title: "Ghana clinches top 16 spot at Enactus World Cup",
        description: "Ghana’s flag was flown with immense pride and distinction at the just-ended Enactus World Cup 2025, as the national champion team from the Kwame Nkrumah University of Science and Technology (KNUST) secured a coveted place in the competition’s Top 16.",
        readTime: "6 min read",
        image: "https://media.licdn.com/dms/image/v2/D4E22AQHaQgb2eA8_8g/feedshare-image-high-res/B4EZn_wIdUJgAs-/0/1760932470674?e=1791417600&v=beta&t=ngQAjHsVvHSAeKK7ttmbDP2zpRjFHwiVwlMykJZJCYg",
        featured: true
      },
      {
        id: 6,
        category: "Graphic Online",
        title: "Youth-led Promising Project Supported by ALBATROSS Partner KNUST: Peellnnova",
        description: "Peellnnova is gaining rapid visibility through its innovative mosquito-repelling products created from fruit peel waste and wood residues. Won the bronze medal at the 2025 SDG Olympiad in Geneva and became a top winner of the 2025 GreenTech Innovation Challenge.",
        readTime: "4 min read",
        image: "https://albatross-project.eu/wp-content/uploads/2025/12/Peellnnova-coil.jpg",
        featured: false
      },
      {
        id: 7,
        category: "Peellnnova News",
        title: "Peellnnova at the Enactus National Competition",
        description: "Look back at our inspiring journey at the Enactus National Competition, where we showcased Peellnnova's innovative agricultural upcycling solutions and celebrated a major milestone together.",
        readTime: "3 min read",
        image: "https://media.licdn.com/dms/image/v2/D5622AQG6IUA_sJDlWg/feedshare-shrink_800/B56Z_bX2qbHYAc-/0/1786091891723?e=1791417600&v=beta&t=KeNzMyrWdcvOcIwb6WkHyl33a-I-2TJkTvuRVYexAeA",
        featured: false
      },
      {
        id: 8,
        category: "Peellnnova News",
        title: "Empowering Farmers Through Training and Education",
        description: "See how we equipped local farmers with hands-on training and modern education to boost their crop yields, improve daily practices, and secure a brighter future.",
        readTime: "5 min read",
        image: "https://images.pexels.com/photos/20371811/pexels-photo-20371811.jpeg",
        featured: false
      }
    ]
  ];

  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % blogPages.length);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + blogPages.length) % blogPages.length);
  };

  const currentBlogs = blogPages[currentPage];
  const featuredPost = currentBlogs.find(b => b.featured) || currentBlogs[0];
  const gridPosts = currentBlogs.filter(b => b !== featuredPost).slice(0, 3);

  return (
    <section className="peellnnova-blog-section">
      <div className="peellnnova-blog-container">

        {/* Header with Title on Left & Circular Arrows on Right */}
        <div className="peellnnova-blog-header">
          <div className="peellnnova-blog-title-wrap">
            <h2>
              Insights & stories to <br />help you grow<br />
              <span>sustainably</span>.
            </h2>
          </div>
          <div className="peellnnova-blog-nav-buttons">
            <button className="nav-arrow-btn" onClick={handlePrev} aria-label="Previous posts">
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button className="nav-arrow-btn" onClick={handleNext} aria-label="Next posts">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

        {/* Animated Wrapper for Fading Grid Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="peellnnova-blog-content-wrapper"
          >
            {/* Top Large Featured Card */}
            <div className="peellnnova-featured-blog-card">
              <div className="featured-blog-image">
                <img src={featuredPost.image} alt={featuredPost.title} />
              </div>
              <div className="featured-blog-info">
                <div>
                  <span className="blog-badge">{featuredPost.category}</span>
                  <h3>{featuredPost.title}</h3>
                  <p>{featuredPost.description}</p>
                </div>
                <div className="blog-footer-meta">
                  <span className="read-time"><i className="fa-regular fa-clock"></i> {featuredPost.readTime}</span>
                  <span className="brand-author">by Peellnnova</span>
                </div>
              </div>
            </div>

            {/* Bottom 3 Grid Cards */}
            <div className="peellnnova-grid-blogs">
              {gridPosts.map((post) => (
                <div key={post.id} className="peellnnova-small-blog-card">
                  <div className="small-blog-image">
                    <img src={post.image} alt={post.title} />
                    <span className="blog-badge">{post.category}</span>
                  </div>
                  <div className="small-blog-info">
                    <h4>{post.title}</h4>
                    <p>{post.description}</p>
                    <div className="blog-footer-meta small-meta">
                      <span className="read-time"><i className="fa-regular fa-clock"></i> {post.readTime}</span>
                      <span className="brand-author">Peellnnova</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default BlogSection;