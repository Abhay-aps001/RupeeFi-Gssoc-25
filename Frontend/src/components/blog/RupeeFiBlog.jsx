import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

const RupeeFiBlog = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 50;
      setIsAtBottom(bottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleScrollClick = () => {
    if (isAtBottom) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 pt-32 relative">
      { }
      <button
        onClick={handleScrollClick}
        className="fixed left-6 bottom-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
      >
        {isAtBottom ? <FaArrowUp size={20} /> : <FaArrowDown size={20} />}
      </button>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="prose prose-lg max-w-none"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Building RupeeFi: A Journey into Digital Currency Innovation
        </motion.h1>



        <section className="mb-12 bg-white p-8 rounded-xl shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(59,130,246,0.4)]">
          <h2 className="text-2xl font-bold relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-500 after:mt-1 after:rounded-full after:transition-all hover:after:w-24 mb-4">
            Introduction
          </h2>

          <p className="text-gray-700 leading-relaxed">
            RupeeFi represents a groundbreaking approach to digital payments in India,
            combining the power of e-Rupee (CBDC) with modern financial technology.
            Our journey began with a simple mission: to make digital currency
            transactions accessible, secure, and rewarding for everyone.
          </p>
        </section>



        <section className="mb-12 bg-white p-8 rounded-xl shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(59,130,246,0.4)]">
          <h2 className="text-2xl font-bold relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-500 after:mt-1 after:rounded-full after:transition-all hover:after:w-24 mb-4">
            Technical Architecture
          </h2>

          <h3 className="text-2xl font-medium mb-4">Frontend Development</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Built with React and Vite, our frontend architecture focuses on
            performance and user experience. We implemented a component-based
            structure with key features including:
          </p>
          <ul className="list-disc marker:text-blue-500 pl-6 mb-6 text-gray-700">
            <li>Real-time transaction tracking with WebSocket integration</li>
            <li>Custom blockchain visualization using Canvas API</li>
            <li>Framer Motion for smooth animations</li>
            <li>Tailwind CSS for responsive design</li>
          </ul>

          <h3 className="text-2xl font-medium mb-4">Backend Infrastructure</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our Node.js and Express backend handles complex operations including:
          </p>
          <ul className="list-disc marker:text-blue-500 pl-6 mb-6 text-gray-700">
            <li>Custom blockchain implementation for transaction tracking</li>
            <li>JWT-based authentication system</li>
            <li>MongoDB integration for user data and transactions</li>
            <li>Real-time payment processing with UPI integration</li>
          </ul>
        </section>


        <section className="mb-12 bg-white p-8 rounded-xl shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(59,130,246,0.4)]">
          <h2 className="text-2xl font-bold relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-500 after:mt-1 after:rounded-full after:transition-all hover:after:w-24 mb-4">
            Key Features Deep Dive
          </h2>

          <h3 className="text-2xl font-medium mb-4">Blockchain Implementation</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our custom blockchain solution ensures transparent and secure
            transaction tracking. Each block contains up to three transactions,
            with automatic block creation and validation.
          </p>

          <h3 className="text-2xl font-medium mb-4">Reward System</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            The gamified reward system includes:
          </p>
          <ul className="list-disc marker:text-blue-500 pl-6 mb-6 text-gray-700">
            <li>Scratch cards after every third transaction</li>
            <li>Daily login bonuses</li>
            <li>Transaction-based reward points</li>
            <li>Special merchant rewards</li>
          </ul>
        </section>


        <section className="mb-12 bg-white p-8 rounded-xl shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(59,130,246,0.4)]">
          <h2 className="text-2xl font-bold relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-500 after:mt-1 after:rounded-full after:transition-all hover:after:w-24 mb-2">
            Security Measures
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Security is paramount in financial applications. We implemented:
          </p>
          <ul className="list-disc marker:text-blue-500 pl-6 mb-6 text-gray-700">
            <li>Google OAuth for secure authentication</li>
            <li>JWT token-based API protection</li>
            <li>Rate limiting to prevent DDoS attacks</li>
            <li>Encrypted transaction data</li>
          </ul>
        </section>


        <section className="mb-12 bg-white p-8 rounded-xl shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(59,130,246,0.4)]">
          <h2 className="text-2xl font-bold relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-500 after:mt-1 after:rounded-full after:transition-all hover:after:w-24 mb-2">
            Future Roadmap
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Looking ahead, we plan to:
          </p>
          <ul className="list-disc marker:text-blue-500 pl-6 mb-6 text-gray-700">
            <li>Implement AI-powered fraud detection</li>
            <li>Expand merchant services</li>
            <li>Add cross-border transaction support</li>
            <li>Enhance the reward system</li>
          </ul>
        </section>


        <section className="mb-12 bg-white p-8 rounded-xl shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(59,130,246,0.4)]">
          <h2 className="text-2xl font-bold relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-500 after:mt-1 after:rounded-full after:transition-all hover:after:w-24 mb-2">
            Conclusion
          </h2>
          <p className="text-gray-700 leading-relaxed">
            RupeeFi represents the future of digital payments in India,
            combining security, user experience, and innovation. We continue
            to evolve and improve our platform based on user feedback and
            technological advancements.
          </p>
        </section>

      </motion.article>
    </div>
  );
};

export default RupeeFiBlog; 