import React from 'react';
import Puedan from '/MP2_UtilizingReactTailwindCss/NewsWebsite/src/assets/Puedan.jpg';

export const AboutUsPage = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Website</h2>
        <p className="text-lg mb-4">
          Welcome to our news platform! We aim to provide reliable and diverse
          news coverage, delivering accurate and comprehensive stories from
          around the globe.
        </p>
        <p className="text-lg mb-4">
          Our team of dedicated journalists, editors, and content creators
          strives to present balanced and engaging content that resonates with
          our audience. We cover a wide range of topics, including politics,
          business, technology, culture, and more.
        </p>
        <p className="text-lg">
          We value integrity, factual accuracy, and ethical journalism in every
          story we bring to our readers. Your trust and engagement are at the
          core of our mission.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="border p-4 rounded-lg text-center">
          <img
            src="/person2.jpg" // Image for person 2
            alt="Person 2"
            className="rounded-full h-40 w-40 object-cover mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">
            Marrion Dean-Alexis Romero
          </h2>
          <p className="text-gray-600 mb-2">Website Owner</p>
          <p className="text-lg">
            As a news website owner and editor, Marrion Dean-Alexis Romero leads
            with a passion for impactful storytelling, guiding editorial
            strategies that resonate with our audience, ensuring top-notch news
            curation.
          </p>
        </div>

        <div className="border p-4 rounded-lg text-center">
          <img
            src={Puedan}
            alt="Puedan"
            className="rounded-full h-40 w-40 object-cover mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">
            Gabriel Angelo F. Puedan
          </h2>
          <p className="text-gray-600 mb-2">Website owner</p>
          <p className="text-lg">
            Gabriel Angelo F. Puedan, Co-owner and Editor of our news website,
            orchestrates compelling stories and ensures editorial excellence,
            guiding our platform with a passion for impactful storytelling.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-8 text-center">More from Us</h1>
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12">
          <div className="md:w-1/2 text-center">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg mb-4">
              We are dedicated to delivering high-quality and unbiased news
              content covering a wide range of topics. Our mission is to keep
              our readers informed and empowered with accurate and reliable
              information.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p className="text-lg mb-4">
              At our news website, we have a team of experienced journalists and
              editors who work tirelessly to bring you the latest news stories
              from around the world.
            </p>
          </div>

          <div className="md:w-1/2 text-center">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-lg mb-4">
              Founded in [year], our website was born from the vision of
              providing a platform for credible news and information. Since
              then, we have been committed to maintaining the highest standards
              in journalism.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <p className="text-lg mb-4">
              Integrity, accuracy, and independence are the cornerstones of our
              values. We strive to ensure that our readers receive news they can
              trust.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
