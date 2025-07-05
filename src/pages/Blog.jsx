import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import brainImage from '../assets/blueBrain.jpg';
import manWithModernSpecs from '../assets/manWithModernSpecs.jpg';
import yellowTopGirl from '../assets/yellow-top-girl.jpg';
import blogImg3 from '../assets/blogImg3.jpg';
import blogImg4 from '../assets/blogImg4.jpg';
import blogImg5 from '../assets/blogImg5.jpg';
import blogImg6 from '../assets/blogImg6.jpg';
import blogImg7 from '../assets/blogImg7.jpg';
import blogImg8 from '../assets/blogImg8.jpg';
import blogImg9 from '../assets/blogImg9.jpg';
import blogImg10 from '../assets/blogImg10.jpg';
// import ThemeToggle from '../components/ThemeToggle';

const blogsList = [
  {
    id: 1,
    title: "Google’s march 2023 core update: winners, losers & analysis",
    date: "June 06, 2025",
    image: blogImg3,
  },
  {
    id: 2,
    title: "The Metaverse boom: brands unite and Apple takes a rain check",
    date: "June 06, 2025",
    image: manWithModernSpecs,
  },
  {
    id: 3,
    title: "Verify your site is protecting your business",
    date: "June 06, 2025",
    image: yellowTopGirl,
  },
  {
    id: 4,
    title: "4 Insights for Smarter Short-Form Video",
    date: "June 06, 2025",
    image: blogImg4,
  },
  {
    id: 5,
    title: "Digital Marketing for Small Businesses: An Introduction",
    date: "June 06, 2025",
    image: blogImg5,
  },
  {
    id: 6,
    title: "Average ROAS by Industry: The Most Difficult Metric to Measure",
    date: "June 06, 2025",
    image: blogImg6,
  },
  {
    id: 7,
    title: "What is SEO in Digital Marketing & How Does It Work? The SEO Quick Beginner’s Guide",
    date: "June 06, 2025",
    image: blogImg7,
  },
  {
    id: 8,
    title: "SEO Vs. SEM: What is the Difference Between SEO and SEM?",
    date: "June 06, 2025",
    image: blogImg8,
  },
  {
    id: 9,
    title: "8 Steps to Launch a Powered-Up Instagram Content Strategy Social Media",
    date: "June 06, 2025",
    image: blogImg9,
  },
  {
    id: 10,
    title: "Average ROAS by Industry: The Most Difficult Metric to Measure",
    date: "June 06, 2025",
    image: blogImg10,
  },
];

const Blog = () => {
  const navigate = useNavigate();
  const [visibleBlogsCount, setVisibleBlogsCount] = useState(6);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleBlogsCount(blogsList.length);
      setLoading(false);
    }, 1500);
  };

  const openBlogPost = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <>
      {/* <ThemeToggle /> */}
      <div className="!bg-gradient-to-b from-[#fff7ee] to-[#FFFFFF] py-15 px-5 md:px-15 lg:px-30 flex items-center justify-center">
        <div className="bg-[#ffaa4c] dark:bg-[#ff944d] rounded-[50px] px-5 md:px-10 lg:px-20 py-10 flex max-w-7xl w-full shadow-lg flex-col md:flex-row gap-10 items-center">
          <div className="flex-1 text-left items-center">
            <p className="text-sm text-[#5c432d] mb-4 font-semibold">May 12, 2023</p>
            <h1 className="font-syne text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight mb-6 text-black dark:text-white hover:text-[#6754E9]">
              The evolution of live-stream content and short-form video: a look at the TikTok revolution
            </h1>
            <a
              href="#"
              className="relative text-black dark:text-white font-semibold text-sm inline-block mt-0 md:mt-4 border-b-2 border-white
                         after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-black dark:after:bg-white
                         after:transition-[width] after:duration-300 hover:after:w-full"
            >
              READ FULL STORY
            </a>
          </div>
          <div className="flex-1 flex justify-end">
            <img
              src={brainImage}
              alt="Brain Illustration"
              className="md:w-full lg:w-[80%] h-[300px] md:h-[350px] lg:h-[480px] object-cover rounded-4xl"
            />
          </div>
        </div>
      </div>

      <section className="bg-white dark:bg-[#1a1a1a] py-8 lg:py-20 px-5 md:px-10 lg:px-30 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {blogsList.slice(0, visibleBlogsCount).map((blog) => (
            <div
              key={blog.id}
              className="bg-white dark:bg-[#2a2a2a] rounded-[50px] overflow-hidden border border-[#ededed] dark:border-[#333] text-left cursor-pointer"
              onClick={() => openBlogPost(blog.id)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter') openBlogPost(blog.id);
              }}
            >
              <img src={blog.image} alt={blog.title} className="w-full h-60 object-cover" />
              <div className="p-8 hover:bg-[#F1F3F6] dark:hover:bg-[#333] transition-colors">
                <p className="text-sm font-semibold text-[#666666] dark:text-[#cccccc] mb-4 md:mb-6">{blog.date}</p>
                <h3 className="text-xl font-semibold leading-snug hover:text-[#8E81FA] text-black dark:text-white mb-2 md:mb-4">
                  {blog.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {visibleBlogsCount < blogsList.length && (
          <div className="mt-10">
            <button
              onClick={handleLoadMore}
              className="bg-black dark:bg-white text-white dark:text-black font-semibold px-8 py-3 rounded-[20px] shadow-md hover:bg-[#8E81FA] dark:hover:bg-[#6754E9] transition"
              disabled={loading}
              aria-label="Load more blog posts"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white dark:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                    />
                  </svg>
                  Loading...
                </span>
              ) : (
                "Load More"
              )}
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default Blog;
