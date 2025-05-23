import React from "react";
import { FaUpload, FaSearchDollar, FaMoneyCheckAlt } from "react-icons/fa";

function HowItWorks() {
  const steps = [
    {
      icon: <FaUpload className="text-green-500 text-4xl" />,
      title: "Upload License",
      description: "Submit your unused software license with a few easy clicks.",
    },
    {
      icon: <FaSearchDollar className="text-green-500 text-4xl" />,
      title: "Get Valuation",
      description: "Our system evaluates your license and gives you a competitive quote.",
    },
    {
      icon: <FaMoneyCheckAlt className="text-green-500 text-4xl" />,
      title: "Get Paid",
      description: "Accept the offer and receive fast, secure payment.",
    },
  ];

  return (
    <div
      id="how"
      className="bg-white dark:bg-black py-16 px-6 md:px-16 lg:px-32 transition-colors duration-300"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black dark:text-white">
        How It Works
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 text-lg">
        A simple, step-by-step process to help you sell your unused software
        licenses easily and confidently.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-8 shadow-md hover:shadow-xl transition duration-300 text-center bg-white dark:bg-gray-800"
          >
            <div className="mb-6 flex justify-center">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
              {step.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowItWorks;
