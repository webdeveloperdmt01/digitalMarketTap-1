import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
// import Blog from './pages/Blog';
// import BlogPost from './pages/BlogPosts';
import Layout from './components/Layout';
// import MarketingSolution from './pages/MarketingSolution';
// import Seo from "./pages/Seo";
import AboutUs from './pages/AboutUs';
// import OnPageOffPageSeo from './pages/OnPageOffPageSeo';
// import LocalSeo from './pages/LocalSeo';
// import EnterpriseSeo from './pages/EnterpriseSeo';
// import EcommerceSeo from './pages/EcommerceSeo';
// import MultilingualSeo from './pages/MultilingualSeo';
// import AISeo from './pages/AISeo';
// import FreeAudit from './pages/FreeAudit';
// import MeetTheTeam from './pages/MeetTheTeam';
// import Awards from "./pages/Awards"
// import TermsCondition from "./pages/TermsCondition";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
// import ContentWritingService from "./pages/ContentWritingService";
// import SocialMediaMarketing from "./pages/SocialMediaMarketing";
// import SocialMediaOptimisation from "./pages/SocialMediaOptimisation";
// import OnlineReputationManagement from "./pages/OnlineReputationManagement";
// import QuoraMarketing from "./pages/QuoraMarketing";
// import EmailMarketing from "./pages/EmailMarketing";
// import WebsiteDesign from './pages/WebsiteDesign';
// import GraphicDesign from './pages/GraphicDesign';
// import SeoTag from './pages/SeoTag';
// import PaidSocialTag from './pages/PaidSocialTag';
// import PaidSearchTag from './pages/PaidSearchTag';
// import OrganicSocialMedia from './pages/OrganicSocialMedia';
// import ProjectDetailPage from "./pages/ProjectDetailPage";
// import PaidMarketing from "./pages/PaidMarketing";
// import Marketing from "./pages/Marketing";
// import EcommerceWebsiteDevelopment from "./pages/EcommerceWebsiteDevelopment";
// import BlogNewsWebsite from "./pages/BlogNewsWebsite";
// import EducationalWebsite from "./pages/EducationalWebsite";
// import BuisnessWebsite from "./pages/BuisnessWebsite";
// import VernacularSeo from "./pages/VernacularSeo";
// import HyperLocalSeo from "./pages/HyperLocalSeo";
// import VoiceSeo from "./pages/VoiceSeo";
// import GoogleAD from "./pages/GoogleAD";
// import AmazonAD from "./pages/AmazonAD";
// import Error from "./pages/Error";
// import DigitalMarketing from "./pages/DigitalMarketing";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/contact-us" element={<Layout><ContactUs /></Layout>} />
        <Route path="/about-us" element={<Layout><AboutUs /></Layout>} />
  
        
    
        

      </Routes>
    </Router>
  );
}

export default App;
