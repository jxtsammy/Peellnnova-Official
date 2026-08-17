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

//About Page
import AboutHeader from './components/AboutUs/AboutHeader/AboutHeader'
import CompanyInfo from './components/AboutUs/AboutCompany/CompanyInfo'
import ValueProposition from './components/AboutUs/ValueProposition/ValueProposition'
import OurTeam from './components/AboutUs/OurTeam/OurTeam'
import ProcessAndStandards from './components/AboutUs/ProcessAndStandards/ProcessAndStandards'

//Impact Page
import ImpactHeader from './components/Impact/ImpactHeader/ImpactHeader'
import OurVision from './components/Impact/OurVision/OurVision'
import OurStory from './components/Impact/OurStory/OurStory'
import ImpactMetrics from './components/Impact/ImpactMetrics/ImpactMetrics'

//Products Page
import ProductHeader from './components/OurProducts/ProductsHeader/ProductHeader'
import ProductsInfo from './components/OurProducts/ProductsInfo/ProductsInfo'
import ProductsSummary from './components/OurProducts/ProductsSummary/ProductsSummary'

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

        {/*The About Page*/}
        <Route
          path="/about"
          element={
            <main>
              <AboutHeader />
              <CompanyInfo />
              <ValueProposition />
              <ProcessAndStandards />
              <OurTeam />
            </main>
          }
        />

        {/*The Impact Page*/}
        <Route
          path="/impact"
          element={
            <main>
              <ImpactHeader />
              <OurVision />
              <OurStory />
              <ImpactMetrics />
            </main>
          }
        />

        {/*The Products Page*/}
        <Route
        path="/products"
        element={
            <main>
              <ProductHeader />
              <ProductsInfo />
              <ProductsSummary />
            </main>
          }
        />
      </Routes>

    <Footer />
    </Router>
  );
}

export default App;