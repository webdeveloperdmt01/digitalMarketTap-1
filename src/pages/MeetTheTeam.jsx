import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Meettheteam from '../assets/meet-the-tean.jpg';

function MeetTheTeam() {
  return (
    <main className='bg-gradient-to-b from-[#fdf1e7] to-white px-5 md:px-15 lg:px-30'>
      <div className="pt-4 md:pt-8 lg:pt-12 pb-4">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30">
          <div>
            <h5 className="text-sm md:text-base lg:text-md font-semibold text-black pt-4 md:pt-6 lg:pt-10">Meet the Team</h5>
            <h1 className='text-2xl md:text-4xl lg:text-6xl font-semibold pt-3 md:pt-8 leading-tight'>Meet the <br/> Numerique <br/> revenue <br/> revolutionaries</h1>
            <p className="text-md lg:text-lg font-base pt-4 md:pt-8 pb-6 md:pb-8">We believe in having a talented team of self-starters that want to deliver the best results for our clients</p>
          </div>
          <div className="flex lg:justify-end">
            <img
              src={Meettheteam}
              alt="Marketing Visual"
              className="w-full h-[250px] md:h-[440px] object-cover rounded-[30px] md:rounded-[60px]"
            />
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
          <div className="mt-8 md:mt-10 lg:mt-15 max-w-8xl mx-auto">
            <div className="relative flex justify-between items-center border-t border-dashed border-gray-300">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-4 h-4 rounded-full bg-[#6754E9] relative -top-2" />
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
    </main>
  );
}

export default MeetTheTeam;
