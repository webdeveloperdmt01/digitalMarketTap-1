import React, { useState } from 'react';
import EnterpriseSeo from "../assets/enterpriseSeo.jpg";
import EnterpriseSeo2 from "../assets/enterpriseSeo2.jpg";
import EnterpriseSeo3 from "../assets/enterpriseSeo3.jpg";
import { FaArrowRight, FaPlus, FaMinus, FaGamepad, FaHeartbeat, FaPiggyBank, FaBalanceScale, FaHome, FaBus } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const EnterpriseSeoPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const services = [
    {
      icon: <FaHeartbeat className="text-[#f89e1b] text-2xl hover:text-[#6754E9]" />,
      title: "Insurance and wellness benefits",
      description:
        "Our comprehensive benefits package includes health, dental, and vision coverage, designed to prioritize your well-being. With employer-supported deductibles, low copays, and low deductibles, we ensure that your healthcare needs are met affordably and conveniently.",
    },
    {
      icon: <FaPiggyBank className="text-[#f89e1b] text-2xl hover:text-[#6754E9]" />,
      title: "Retirement & student loan assistance",
      description:
        "Starting from day one, we make an automatic 3% contribution to your 401(k) retirement plan, which is fully vested immediately. Additionally, we set aside a portion of our pre-tax profits to contribute to your 401(k), which gradually vests over three years, further enhancing your retirement savings.",
    },
    {
      icon: <FaBalanceScale className="text-[#f89e1b] text-2xl hover:text-[#6754E9]" />,
      title: "Unlocking work-life balance",
      description:
        "At Numerique, we recognize the value of face-to-face interactions and the power of mentorship that comes from working side-by-side with colleagues. Our office-first approach ensures that you have ample opportunities to engage in meaningful collaboration, foster connections, and receive personalized mentorship.",
    },
    {
      icon: <FaHome className="text-[#f89e1b] text-2xl hover:text-[#6754E9]" />,
      title: "Balanced living starts here",
      description:
        "Experience a competitive PTO package that goes beyond the basics at Numerique. We understand the importance of work-life balance and community engagement. That's why we offer a comprehensive PTO package that includes not only vacation and sick time but also dedicated volunteer days.",
    },
    {
      icon: <FaBus className="text-[#f89e1b] text-2xl hover:text-[#6754E9]" />,
      title: "Enhancing your commuting experience",
      description:
        "Experience the convenience of public transportation at Numerique, with our prime location near Back Bay Station and the Arlington T stop. We understand the value of hassle-free commuting, which is why we provide a commuter stipend to help alleviate the costs associated with public transportation.",
    },
    {
      icon: <FaGamepad className="text-[#f89e1b] text-2xl hover:text-[#6754E9]" />,
      title: "Making work enjoyable",
      description:
        "Embrace your competitive spirit by joining our summer softball league or engaging in our thrilling fantasy football league. These activities foster team spirit, friendly competition, and lasting memories.",
    },
  ];

  const faqs = [
    {
      question: "What is paid search management?",
      answer: "Paid search management involves creating, managing, and optimizing pay-per-click (PPC) advertising campaigns on search engines like Google and Bing to drive targeted traffic to your website."
    },
    {
      question: "How much does paid search management cost?",
      answer: "The cost varies depending on your budget, industry, and campaign complexity. We offer flexible pricing models to suit different business needs and budgets."
    },
    {
      question: "How long does it take to see results?",
      answer: "You can start seeing traffic immediately once campaigns are live, but meaningful results and optimization typically occur within 2-4 weeks of continuous management."
    },
    {
      question: "Do you provide reporting and analytics?",
      answer: "Yes, we provide detailed monthly reports showing campaign performance, key metrics, and recommendations for improvement."
    }
  ];
  const headers = ["#", "TABLE HEADER 1", "TABLE HEADER 2", "TABLE HEADER 3", "TABLE HEADER 4"];
  const data = [
    ["Content 1", "Content 2", "Content 3", "Content 4"],
    ["Content 1", "Content 2", "Content 3", "Content 4"],
  ];

  return (
    <main className='bg-gradient-to-b from-[#fdf1e7] to-white px-5 md:px-15 lg:px-30'>
      <div className="pt-4 md:pt-8 lg:pt-12 pb-4">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30">
          <div>
            <h5 className="text-sm md:text-base lg:text-md font-semibold text-black pt-4 md:pt-6 lg:pt-10">
              Enterprise SEO
            </h5>
            <h1 className='text-2xl md:text-4xl lg:text-6xl font-semibold pt-3 md:pt-8'>Elevating<br /> Enterprise SEO <br />Services</h1>
            <p className="text-sm lg:text-[16px] font-base text-[#545e5b] pt-4 md:pt-8 pb-6 md:pb-8">Join us and become the trusted expert relied upon by the world's biggest brands, venues, and entertainers to solve their most complex challenges.</p>
            <NavLink to="/" className="text-sm group relative inline-flex items-center gap-2 rounded-[15px] bg-black px-8 py-3 text-white transition duration-300 hover:bg-[#6754E9]">VIEW OPEN POSITIONS <FaArrowRight /><span className="absolute bottom-1.5 left-6 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-[calc(100%-3rem)]"></span></NavLink>
          </div>
          <div className="flex lg:justify-end">
            <img
              src={EnterpriseSeo}
              alt="Marketing Visual"
              className="w-full h-[250px] md:h-[440px] object-cover rounded-[30px] md:rounded-[60px]"
            />
          </div>
        </div>
      </div>

      <div className="pt-12 md:pt-28 lg:pt-38">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-15 items-center">
          <div className="flex lg:justify-end">
            <img
              src={EnterpriseSeo2}
              alt="Marketing Visual"
              className="w-full h-[250px] md:h-[470px] object-cover rounded-[30px] md:rounded-[60px]"
            />
          </div>
          <div className="pl-2 md:pl-8 lg:pl-20">
            <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold text-black mb-2 md:mb-6 lg:mb-8">Comapanies and their Digital Reach</h3>
            <p className="text-sm lg:text-[16px] font-base text-[#545e5b] pt-2 pb-6">
              Combining search engine marketing with conversion rate optimization (CRO)
              The secret to a successful SEM campaign is much more than just making your website appear on Google. Other SEM agencies in Singapore would just set your ads to appear on Google, and leave it there. These campaigns are not performing up to its optimal level. <br /> <br />

              The secret to achieving optimal SEM results lies in the ability to get as many people as possible to call/contact you after they click on your ad and land on your website. For example, your current SEM ads are getting 2% conversion rate on your landing page. That means out of 100 people that visit your page, 2 people contact you.
            </p>
            <a href="#" className="group inline-block text-sm font-semibold relative border-b-2 border-[#4118d2]">MEET OUR TEAM<span className="block absolute left-0 -bottom-.5 h-0.5 w-0 bg-orange-500 group-hover:w-full transition-all duration-300"></span></a>
          </div>
        </div>
      </div>

      <div className="pt-10 md:pt-20 lg:pt-28 pb-16">
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
            <div>
              <p className="text-sm font-semibold uppercase mb-6">Company Values</p>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                We firmly believe in the power of collaboration to achieve greatness
              </h1>
            </div>
            <div className="text-gray-700 pl-0 md:pl-16 lg:pl-22">
              <p>
                At Numerique, continuous improvement is ingrained in our DNA. Each day, we dedicate ourselves to honing our skills and excelling in every aspect of our work. We not only strive for excellence but also prioritize cultivating a diverse and inclusive community that values and respects a wide array of backgrounds, experiences, and ideas. Through our Employee Resource Groups, our team actively celebrates and embraces the unique qualities that define each of us.
              </p>
            </div>
          </div>
          <div className="mt-10 md:mt-16 lg:mt-20 max-w-8xl mx-auto">
            <div className="relative flex justify-between items-center border-t border-dashed border-gray-300">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-4 h-4 rounded-full bg-[#f89e1b] relative -top-2" />
              ))}
            </div>
            <div className="flex justify-between mt-3 md:mt-5 max-w-8xl mx-auto text-sm font-semibold text-black">
              <span className='text-xs md:text-sm'>Celebrate creativity</span>
              <span className='text-xs md:text-sm'>Honest & integrity</span>
              <span className='text-xs md:text-sm'>Teamwork & collaboration</span>
              <span className='text-xs md:text-sm'>Social responsibility</span>
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 md:py-6 lg:py-8">
        <div className="max-w-7xl mx-auto rounded-[40px] overflow-hidden mb-8 md:mb-12">
          <img src={EnterpriseSeo3} alt="Team Collaboration" className="w-full object-cover" />
        </div>
      </div>

      <div className="py-4 md:py-6 lg:py-8">
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-center font-semibold pb-4 lg:pb-14">Benefits</h1>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 text-black flex flex-col justify-between h-full">
              <div>
                <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-left">{service.title}</h3>
                <p className="text-md text-[#57595b] text-left">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 md:pt-8 lg:pt-12 pb-4">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30">
          <div>
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold pt-3 md:pt-8">
              Get the updated <br />
              Data Across <br /> <span className="text-[#f89e1b]"> All Platforms </span>
            </h1>
            <p className="text-sm lg:text-[16px] font-base text-[#545e5b] pt-4 md:pt-8 pb-6 md:pb-8">You can also reduce the extra loading time in your WordPress websites. Leverage the best addons pack for the Elementor page builder.</p>
            <p className="text-sm lg:text-[16px] font-base pt-1 md:pt-3 pb-1 md:pb-3">Sync to Cloud</p>
            <p className="text-sm lg:text-[16px] font-base pt-1 md:pt-3 pb-1 md:pb-3">Create Your Own Palylist</p>
            <p className="text-sm lg:text-[16px] font-base pt-1 md:pt-3 pb-1 md:pb-3">Share Instantly</p>
          </div>
          <div className="flex lg:justify-end">
            <div style={{ overflowX: "auto", maxWidth: "100%", borderRadius: 4 }}>
              <table style={{ borderCollapse: "collapse", width: "100%", minWidth: 600 }}>
                <thead>
                  <tr style={{ backgroundColor: "#f28c00", color: "#fff" }}>
                    {headers.map((header, idx) => (
                      <th
                        key={idx}
                        style={{
                          padding: "12px 20px",
                          fontWeight: "bold",
                          fontSize: "14px",
                          whiteSpace: "nowrap",
                          borderRight: idx !== headers.length - 1 ? "1px solid rgba(255, 255, 255, 0.5)" : "none",
                          textAlign: idx === 0 ? "center" : "left",
                        }}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      style={{
                        backgroundColor: rowIndex % 2 === 0 ? "#ffffff" : "#f2f2f2",
                        color: "#555",
                        fontSize: "14px",
                      }}
                    >
                      <td
                        style={{
                          padding: "12px 20px",
                          textAlign: "center",
                          fontWeight: "600",
                          color: "#999",
                          borderRight: "1px solid #ddd",
                        }}
                      >
                        {rowIndex + 1}
                      </td>
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          style={{
                            padding: "12px 20px",
                            borderRight: cellIndex !== row.length - 1 ? "1px solid #ddd" : "none",
                          }}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-4 pt-8 md:pt-12 lg:pt-18">
        <p className="text-center text-md font-semibold uppercase pb-4">FAQ</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold pb-4">FAQs about paid search <br /> management</h1>
        <p className="text-center text-md font-base text-gray-500 pb-4">Looking to learn more about paid search management for your business? Browse our FAQs</p>
        <div className="max-w-5xl mx-auto pt-8 space-y-2 md:space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-t border-gray-300 pb-2 md:pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left font-bold text-sm md:text-lg lg:text-xl md:font-medium hover:text-[#6754E9] focus:outline-none pt-5"
              >
                {faq.question}
                {openIndex === index ? (
                  <FaMinus className="text-[#000000]" />
                ) : (
                  <FaPlus className="text-[#f89e1b]" />
                )}
              </button>
              {openIndex === index && (
                <p className="mt-3 text-gray-500 text-xs font-semibold md:text-md">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default EnterpriseSeoPage;
