import React from "react";
import { FaShieldAlt, FaBolt, FaUsers } from "react-icons/fa";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaShieldAlt className="text-green-500 text-4xl" />,
      title: "Secure Process",
      description: "We ensure your license transactions are safe, verified, and fully protected."
    },
    {
      icon: <FaBolt className="text-green-500 text-4xl" />,
      title: "Fast Transactions",
      description: "Our system guarantees quick evaluation and prompt payment turnaround."
    },
    {
      icon: <FaUsers className="text-green-500 text-4xl" />,
      title: "Trusted by Many",
      description: "Hundreds of satisfied users trust SoftSell for seamless license resale."
    }
  ];

  return (
    <div id="why" className="bg-gray-50 py-16 px-6 md:px-16 lg:px-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Why Choose Us
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
        Discover what makes SoftSell the go-to platform for secure, fast, and trustworthy license reselling.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="border rounded-lg p-8 shadow-md hover:shadow-xl transition duration-300 text-center"
          >
            <div className="mb-6 flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyChooseUs;
