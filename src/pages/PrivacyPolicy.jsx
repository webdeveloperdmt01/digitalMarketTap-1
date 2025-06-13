import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gradient-to-b from-[#fdf1e7] to-white px-5 md:px-15 lg:px-30 py-12 text-black">
      <div className="max-w-3xl">
        <p className="uppercase text-sm font-semibold tracking-wide mb-2">Privacy Policy</p>
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold py-2 md:py-5 lg:py-8">Privacy Policy</h1>
        <p className="font-semibold mb-10">for <span className="font-bold">Numerique LLC</span></p>

        <section className="mb-10">
          <h2 className="text-2xl md:text-2xl lg:text-4xl font-semibold mb-2">What information do we collect?</h2>
          <p className="text-gray-700 text-sm md:text-base">
            When you interact with us, we may collect your name, address, email address(es),
            telephone number(s), and, where appropriate, date of birth.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl md:text-2xl lg:text-4xl font-semibold mb-2">How do we collect information?</h2>
         <p className="text-gray-700 text-sm md:text-base">
            We may collect information about you whenever you interact with us. For example, when
            you contact regarding our activities, register as a supporter, send or receive
            information or sign a petition, you specifically and knowingly provide us with your
            personal information. We may also receive information about you from third parties –
            but only if you have given them permission to share your information.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl md:text-2xl lg:text-4xl font-semibold mb-2">Confidentiality</h2>
         <p className="text-gray-700 text-sm md:text-base">
            We will not be responsible for the privacy of data collected by websites not owned or
            managed by Charity, including those linked through our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-2xl lg:text-4xl font-semibold mb-2">Making a complaint</h2>
         <p className="text-gray-700 text-sm md:text-base">
            If you are not satisfied with the response, please contact us at
            <a href="mailto:konstruktion@email.com" className="text-blue-600 hover:underline"> konstruktion@email.com</a>
            {" "}with the details explaining your concerns. We will review your complaint and
            investigate if the right procedures have been followed and respond back to you as
            appropriate. We aim to complete this investigation within 15 working days of receiving
            your complaint, however, in some cases it may take longer. If you are still
            unsatisfied with the response, you may contact us.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
