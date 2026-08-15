import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Navigations
import Navbar from './components/Navigations/NavBar/NavBar'
import Footer from './components/Navigations/Footer/Footer'

//Landing Page
import Hero from './components/Home/LandingPage/Hero'
import WhyWeExist from './components/Home/WhyWeExist/WhyWeExist'
import TheProblem from './components/Home/TheProblem/TheProblem'
import TheSolution from './components/Home/TheSolution/TheSolution'
import InsightsVideo from './components/Home/InsightsVideo/InsightsVideo'
import ProductsPreview from './components/Home/ProdutsPreview/ProductPreview'

function App() {
  return (
    <Router>
      {/* Navbar stays here to remain visible on every page */}
      <Navbar />

      <Routes>
        {/* HOME PAGE: The "Stacked" One-Page Layout*/}
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <WhyWeExist />
              <TheProblem />
              <TheSolution />
              <InsightsVideo />
              <ProductsPreview />
            </main>
          }
        />
      </Routes>

    <Footer />
    </Router>
  );
}

export default App;