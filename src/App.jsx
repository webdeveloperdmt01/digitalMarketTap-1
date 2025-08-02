import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPosts';
import Layout from './components/Layout';
import Seo from "./pages/Seo";
import AboutUs from './pages/AboutUs';
import OnPageOffPageSeo from './pages/OnPageOffPageSeo';
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
import PaidMarketing from "./pages/PaidMarketing";
import Marketing from "./pages/Marketing";
import EcommerceWebsiteDevelopment from "./pages/EcommerceWebsiteDevelopment";
import BlogNewsWebsite from "./pages/BlogNewsWebsite";
import EducationalWebsite from "./pages/EducationalWebsite";
import BuisnessWebsite from "./pages/BuisnessWebsite";
import VernacularSeo from "./pages/VernacularSeo";
import HyperLocalSeo from "./pages/HyperLocalSeo";
import VoiceSeo from "./pages/VoiceSeo";
import GoogleAD from "./pages/GoogleAD";
import AmazonAD from "./pages/AmazonAD";
import Error from "./pages/Error";
import DigitalMarketing from "./pages/DigitalMarketing";
import ComingSoon from "./pages/ComingSoon";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/contact-us" element={<Layout><ContactUs /></Layout>} />
        <Route path="/blog" element={<Layout><Blog /></Layout>} />
        <Route path="/blog/:id" element={<Layout><BlogPost /></Layout>} />
        <Route path="/brand/:brandName" element={<Layout><ProjectDetailPage /></Layout>} />
        <Route path="/marketing-solution" element={<Layout><Marketing /></Layout>} />
        <Route path="/website-development" element={<Layout><WebsiteDesign /></Layout>} />
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
        <Route path="/paid-marketing" element={<Layout><PaidMarketing/></Layout>} />
        <Route path="/marketing" element={<Layout><Marketing/></Layout>} />
        <Route path="/e-commerce-website-development" element={<Layout><EcommerceWebsiteDevelopment/></Layout>} />
        <Route path="/blog-news-website" element={<Layout><BlogNewsWebsite/></Layout>} />
        <Route path="/education-website" element={<Layout><EducationalWebsite/></Layout>} />
        <Route path="/buisness-website" element={<Layout><BuisnessWebsite/></Layout>} />
        <Route path="/vernacular-seo" element={<Layout><VernacularSeo/></Layout>} />
        <Route path="/hyperlocal-seo" element={<Layout><HyperLocalSeo/></Layout>} />
        <Route path="/voice-seo" element={<Layout><VoiceSeo/></Layout>} />
        <Route path="/google-ads" element={<Layout><GoogleAD/></Layout>} />
        <Route path="/amazon-ads" element={<Layout><AmazonAD/></Layout>} />
        <Route path="/404-error" element={<Layout><Error/></Layout>} />
        <Route path="/digital-marketing" element={<Layout><DigitalMarketing/></Layout>} />
        <Route path="/coming-soon" element={<Layout><ComingSoon/></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
