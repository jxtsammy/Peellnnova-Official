import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Blogs.css';

const BlogSection = () => {
  const blogPages = [
    [
      {
        id: 1,
        category: "Sustainability",
        title: "From Agricultural Waste to Eco-Friendly Homes: The Peellnnova Vision",
        description: "Discover how we harness discarded agricultural resources to engineer resilient, sustainable building materials that redefine green living.",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80",
        featured: true
      },
      {
        id: 2,
        category: "Innovation",
        title: "Scaling Green Technologies Across Local Communities",
        description: "An inside look at our latest bootcamps and workshops empowering youth to embrace circular economies.",
        readTime: "3 min read",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80",
        featured: false
      },
      {
        id: 3,
        category: "Impact",
        title: "Creating Economic Value Through Waste Upcycling",
        description: "How transforming crop residue into high-value everyday products drives job creation and sustainable growth.",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
        featured: false
      },
      {
        id: 4,
        category: "Partnerships",
        title: "Building Strategic Alliances for a Greener Future",
        description: "Collaborating with agricultural networks and environmental institutions to maximize community impact.",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=600&q=80",
        featured: false
      }
    ],
    // Page 2 (Another set of 4 items)
    [
      {
        id: 5,
        category: "Research",
        title: "Material Science Breakthroughs in Biomass Utilization",
        description: "A technical dive into how our lab processes organic byproducts into durable, weather-resistant structural components.",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80",
        featured: true
      },
      {
        id: 6,
        category: "Community",
        title: "Empowering Rural Farmers with Sustainable Practices",
        description: "Working hand-in-hand with local harvesters to turn agricultural surplus into economic opportunity.",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80",
        featured: false
      },
      {
        id: 7,
        category: "Design",
        title: "Aesthetics Meets Eco-Conscious Architecture",
        description: "Designing modern home interiors using circular waste solutions without compromising style or quality.",
        readTime: "3 min read",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80",
        featured: false
      },
      {
        id: 8,
        category: "Future Outlook",
        title: "The Roadmap to Zero-Waste Suburban Housing",
        description: "Our long-term goals for scaling waste-to-home infrastructure across emerging African markets.",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=600&q=80",
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