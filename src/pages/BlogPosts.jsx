import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogData from '../data/BlogData';
import { FaTwitter } from "react-icons/fa";

const BlogPost = () => {
  const { id } = useParams();
  const blogId = parseInt(id, 10);
  const blog = blogData.find(post => post.id === blogId);

  if (!blog) {
    return (
      <Link
        to="/blog"
        className="mt-6 inline-block text-[#6754E9] font-semibold relative
        after:block after:absolute after:left-0 after:-bottom-1 after:h-[2px]
        after:w-0 after:bg-[#8E81FA] after:transition-all after:duration-300
        hover:after:w-full hover:text-[#8E81FA] p-5"
      >
        Back to Blogs
      </Link>
    );
  }

  return (
     <>
    <article className="max-w-4xl mx-auto px-5 md:px-10 py-8 md:py-16 text-[#1a1a1a]">
      <p className="text-sm text-gray-500 font-semibold mb-5 md:mb-12 text-center">{blog.date}</p>
      <h1 className="text-2xl md:text-5xl font-bold mb-5 md:mb-10 text-left">{blog.title}</h1>

      {blog.tag && (
        <span className="text-xs font-bold hover:text-[#6754E9] text-gray-500 mb-6 flex justify-center">
          {blog.tag}
        </span>
      )}

      <img
        src={blog.heroImage}
        alt={blog.title}
        className="w-full rounded-3xl mb-12 shadow-lg object-cover"
      />

      <section className="space-y-7 text-[15px] leading-relaxed">
        {blog.content.map((block, index) => {
          switch (block.type) {
            case "paragraph":
              return <p key={index} className="text-justify">{block.text}</p>;
            case "heading":
              return (
                <h2 key={index} className="text-2xl md:text-3xl font-semibold mt-14 mb-5 text-[#000]">
                  {block.text}
                </h2>
              );
            case "image":
              return (
                <img
                  key={index}
                  src={block.src}
                  alt={block.alt || "Blog related image"}
                  className="w-full rounded-2xl mt-14 md:mt-28 mb-16 shadow-md"
                  loading="lazy"
                />
              );
            case "quote":
              return (
                <blockquote
                  key={index}
                  className="bg-[#f4f4fb] text-center text-[#5e5eac] font-semibold text-lg p-8 rounded-3xl italic mx-4 md:mx-0"
                >
                  “{block.text}”
                </blockquote>
              );
            default:
              return null;
          }
        })}
      </section>

      <div className="bg-[#eee9ff] text-center rounded-[50px] p-6 md:p-16 max-w-4xl mx-auto my-10">
        <p className="text-lg md:text-2xl italic text-[#1a1a2e]">
          “Just remember that you can test different video lengths until you find
          what works best –– the sweet spot. Pay attention to your video
          performance and adjust until you see success.”
        </p>
        <div className="mt-6 text-purple-600 text-2xl flex justify-center hover:text-black">
          <FaTwitter />
        </div>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold mb-5 text-left">
        Hire a team of expert marketers to handle the research and video creation process for you
      </h1>
      <p className="text-[15px] mb-10 text-left">
        Just because something worked for one type of video doesn’t mean it will always work.
        Your video marketing strategy needs to be flexible and adjust to people’s viewing
        behaviors for maximum impact.
      </p>

      <div className="mt-5 md:mt-16 text-center">
        <Link
          to="/blog"
          className="relative text-[#6754E9] font-semibold hover:text-orange-500
          before:block before:absolute before:-bottom-1 before:left-0
          before:h-[2px] before:w-0 before:bg-orange-500
          before:transition-[width] before:duration-300 before:ease-in-out
          hover:before:w-full"
        >
          ← Back to Blog
        </Link>
      </div>
    </article>

    <section className="bg-white py-4 lg:py-20 px-5 md:px-10 lg:px-30 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-10 text-center">What to read next</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogData
            .filter(post => post.id !== blogId)
            .slice(0, 3)
            .map((blog, index) => (
              <Link
                key={index}
                to={`/blog/${blog.id}`}
                className="bg-white rounded-[30px] overflow-hidden border border-[#ededed] text-left hover:shadow-md transition"
              >
                <img
                  src={blog.image || blog.heroImage}
                  alt={blog.title}
                  className="w-full h-60 object-cover"
                />
                <div className="p-8 hover:bg-[#F1F3F6]">
                  <p className="text-sm text-[#666666] mb-2">{blog.date}</p>
                  <h3 className="text-lg font-semibold leading-snug hover:text-[#8E81FA]">
                    {blog.title}
                  </h3>
                </div>
              </Link>
            ))}
        </div>
    </section>
    </>
  );
};

export default BlogPost;
