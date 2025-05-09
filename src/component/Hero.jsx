import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Hero = () => {
  return (
    <motion.div
      id="home"
      className="bg-white dark:bg-black min-h-screen transition-colors duration-300"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* Header */}
      <motion.div
        className="flex justify-center items-center h-20 pt-10 mx-4"
        variants={itemVariants}
      >
        <motion.img
          src="https://cdn.prod.website-files.com/680f8f424673cd96bef24b1b/6810d0c6b85a065f1172ea37_YS6aVl01.svg"
          alt="SoftSell Logo"
          className="w-14 h-14 object-cover mr-2 dark:invert"
          initial={{ x: -200, rotate: 0, opacity: 0 }}
          animate={{ x: 0, rotate: 360, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <motion.span
          className="font-semibold text-3xl dark:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          SoftSell
        </motion.span>
      </motion.div>

      {/* Hero Section */}
      <motion.section
        className="max-w-5xl mx-auto py-24 -mt-4 relative -left-4 px-4"
        variants={itemVariants}
      >
        <motion.h1
          className="text-7xl md:text-8xl font-bold text-black dark:text-white leading-[0.95] mb-0 transition-colors duration-300"
          variants={itemVariants}
        >
          sell your unused <br className="md:hidden" />{" "}
          <span className="block">software licenses</span>
        </motion.h1>
      </motion.section>

      {/* Subtext + CTA */}
      <motion.section
        className="max-w-xl flex-col ml-auto -mt-3 font-mono relative right-0 md:right-72 px-4"
        variants={containerVariants}
      >
        <motion.p
          className="text-xl md:text-2xl text-black dark:text-gray-300 leading-[1.4] max-w-3xl transition-colors duration-300"
          variants={itemVariants}
        >
          SoftSell makes it easy for businesses to sell their unused or rarely
          used SaaS subscriptions safely and quickly, helping them earn extra{" "}
          <span className="bg-[#00FF00] text-black dark:bg-green-500 font-bold">
            revenue.
          </span>
        </motion.p>

        <motion.div className="mt-5" variants={itemVariants}>
          <a href="#contact">
            <motion.button
              className="px-8 py-3 bg-black dark:bg-gray-800 animate-bounce mt-6 duration-700 text-white text-lg border border-black dark:border-gray-700 hover:bg-gray-800 dark:hover:bg-gray-700 transition rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get a Quote
            </motion.button>
          </a>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default Hero;
