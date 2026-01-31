import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import CustomerStories from "./components/CustomerStories";
import Products from "./components/Products";
import Overview from "./components/Overview";
import Resources from "./components/Resources";
import HelpCenter from "./components/HelpCenter";
import TermsServices from "./components/TermsServices";
import RefundPolicy from "./components/RefundPolicy";
import PrivacyPolicy from "./components/PrivacyPolicy";
import RequestDemo from "./components/RequestDemo";
import ScrollToTop from "./components/ScrollToTop";
import ApplyForm from "./components/ApplyForm";
import Documentation from "./components/Documentation";
import KnowledgeBase from "./components/KnowledgeBase";

import { Toaster } from "react-hot-toast";

// CRM imports
import { AuthProvider } from "./crm/context/AuthContext";
import Login from "./crm/pages/auth/Login";
import Signup from "./crm/pages/auth/Signup";
import CrmLayout from "./crm/components/layout/CrmLayout";
import Dashboard from "./crm/pages/dashboard/Dashboard";
import CustomerList from "./crm/pages/customers/CustomerList";
import CallList from "./crm/pages/calls/CallList";
import LeadList from "./crm/pages/leads/LeadList";
import ProductList from "./crm/pages/products/ProductList";
import OrderList from "./crm/pages/orders/OrderList";
import FollowUpList from "./crm/pages/followups/FollowUpList";
import Reports from "./crm/pages/reports/Reports";
import UserManagement from "./crm/pages/admin/UserManagement";
import TrialExpired from "./crm/pages/trial/TrialExpired";

function MarketingLayout() {
  return (
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
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
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
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Toaster position="top-right" />
      <Router>
        <Routes>
          {/* Auth pages - standalone, no navbar/sidebar */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/trial-expired" element={<TrialExpired />} />

          {/* CRM routes - sidebar + header layout */}
          <Route path="/dashboard" element={<CrmLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="customers" element={<CustomerList />} />
            <Route path="calls" element={<CallList />} />
            <Route path="leads" element={<LeadList />} />
            <Route path="products" element={<ProductList />} />
            <Route path="orders" element={<OrderList />} />
            <Route path="followups" element={<FollowUpList />} />
            <Route path="reports" element={<Reports />} />
            <Route path="admin/users" element={<UserManagement />} />
          </Route>

          {/* Marketing routes - navbar + footer layout */}
          <Route path="/*" element={<MarketingLayout />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
