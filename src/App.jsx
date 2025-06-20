import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPosts';
import Layout from './components/Layout';
import MarketingSolution from './pages/MarketingSolution';
import Seo from "./pages/Seo";
import AboutUs from './pages/AboutUs';
import OnPageOffPageSeo from './pages/onPageOffPageSeo';
import LocalSeo from './pages/LocalSeo';
import EnterpriseSeo from './pages/EnterpriseSeo';
import EcommerceSeo from './pages/EcommerceSeo';
import MultilingualSeo from './pages/MultilingualSeo';
import AISeo from './pages/AISeo';
import FreeAudit from './pages/FreeAudit';
import MeetTheTeam from './pages/MeetTheTeam';
import Awards from "./pages/Awards"
import TermsCondition from "./pages/TermsCondition";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContentWritingService from "./pages/ContentWritingService";
import SocialMediaMarketing from "./pages/SocialMediaMarketing";
import SocialMediaOptimisation from "./pages/SocialMediaOptimisation";
import OnlineReputationManagement from "./pages/OnlineReputationManagement";
import QuoraMarketing from "./pages/QuoraMarketing";
import EmailMarketing from "./pages/EmailMarketing";
import WebsiteDesign from './pages/WebsiteDesign';
import GraphicDesign from './pages/GraphicDesign';
import SeoTag from './pages/SeoTag';
import PaidSocialTag from './pages/PaidSocialTag';
import PaidSearchTag from './pages/PaidSearchTag';
import OrganicSocialMedia from './pages/OrganicSocialMedia';
import ProjectDetailPage from "./pages/ProjectDetailPage";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/contact-us" element={<Layout><ContactUs /></Layout>} />
        <Route path="/blog" element={<Layout><Blog /></Layout>} />
        <Route path="/blog/:id" element={<Layout><BlogPost /></Layout>} />
        <Route path="/project/:id" element={<Layout><ProjectDetailPage /></Layout>} />
        <Route path="/marketing-solution" element={<Layout><MarketingSolution /></Layout>} />
        <Route path="/website-design" element={<Layout><WebsiteDesign /></Layout>} />
        <Route path="/about-us" element={<Layout><AboutUs /></Layout>} />
        <Route path="/search-engine-optimization" element={<Layout><Seo /></Layout>} />
        <Route path="/onpage-offpage-seo" element={<Layout><OnPageOffPageSeo /></Layout>} />
        <Route path="/local-seo" element={<Layout><LocalSeo /></Layout>} />
        <Route path="/enterprise-seo" element={<Layout><EnterpriseSeo /></Layout>} />
        <Route path="/ecommerce-seo" element={<Layout><EcommerceSeo/></Layout>} />
        <Route path="/multilingual-seo" element={<Layout><MultilingualSeo/></Layout>} />
        <Route path="/ai-seo" element={<Layout><AISeo/></Layout>} />
        <Route path="/free-audit" element={<Layout><FreeAudit/></Layout>} />
        <Route path="/meet-the-team" element={<Layout><MeetTheTeam/></Layout>} />
        <Route path="/awards" element={<Layout><Awards/></Layout>} />
        <Route path="/terms-and-conditions" element={<Layout><TermsCondition/></Layout>} />
        <Route path="/privacy-policy" element={<Layout><PrivacyPolicy/></Layout>} />
        <Route path="/content-writing-service" element={<Layout><ContentWritingService/></Layout>} />
        <Route path="/social-media-marketing" element={<Layout><SocialMediaMarketing/></Layout>} />
        <Route path="/social-media-optimisation" element={<Layout><SocialMediaOptimisation/></Layout>} />
        <Route path="/online-reputation-management" element={<Layout><OnlineReputationManagement/></Layout>} />
        <Route path="/quora-marketing" element={<Layout><QuoraMarketing/></Layout>} />
        <Route path="/email-marketing" element={<Layout><EmailMarketing/></Layout>} />
        <Route path="/graphic-design" element={<Layout><GraphicDesign/></Layout>} />
        <Route path="/seo-tag" element={<Layout><SeoTag/></Layout>} />
        <Route path="/paid-social-tag" element={<Layout><PaidSocialTag/></Layout>} />
        <Route path="/paid-search-tag" element={<Layout><PaidSearchTag/></Layout>} />
        <Route path="/organic-social-media" element={<Layout><OrganicSocialMedia/></Layout>} />
    
        

      </Routes>
    </Router>
  );
}

export default App;
