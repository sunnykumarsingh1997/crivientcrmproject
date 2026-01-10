// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import CustomerStories from "./components/CustomerStories"
import Products from "./components/Products"
import Overview from "./components/Overview"
import Resources from "./components/Resources"
import HelpCenter from "./components/HelpCenter"
import TermsServices from "./components/TermsServices"
import RefundPolicy from "./components/RefundPolicy"
import PrivacyPolicy from "./components/PrivacyPolicy"
import RequestDemo from "./components/RequestDemo"
import ScrollToTop from "./components/ScrollToTop";
import ApplyForm from "./components/ApplyForm";

export default function App() {
  return (
    <Router>
      <div className="font-sans min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Features />
                <Pricing />
                <Testimonials />
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/customer-stories" element={<CustomerStories />} />
            <Route path="/products" element={<Products />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/terms-services" element={<TermsServices />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/request-demo" element={<RequestDemo />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/apply/:plan" element={<ApplyForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}