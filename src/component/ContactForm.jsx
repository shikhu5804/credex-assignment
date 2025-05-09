import React, { useState } from "react";
import { toast } from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    license: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const err = {};
    if (!formData.name.trim()) err.name = "Name is required";
    if (!formData.email.trim()) err.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      err.email = "Email is invalid";
    if (!formData.license) err.license = "Please select a license type";
    if (!formData.message.trim()) err.message = "Message is required";
    else if (formData.message.length < 10)
      err.message = "Message should be at least 10 characters";
    return err;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);

    if (Object.keys(err).length === 0) {
      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);

      toast.success(
        "Thank you for your inquiry! Our sales team will get back to you within 24 hours."
      );

      setFormData({
        name: "",
        email: "",
        company: "",
        license: "",
        message: "",
      });
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section
      id="contact"
      className="mt-28 mb-10 px-6 bg-white dark:bg-black relative overflow-hidden transition-colors duration-300"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 dark:text-white">
        Contact Form
      </h2>

      <div className="absolute top-10 left-10 text-gray-300 dark:text-gray-600 text-6xl font-bold opacity-20 dark:opacity-10">
        $
      </div>
      <div className="absolute bottom-20 right-10 text-gray-300 dark:text-gray-600 text-8xl font-bold opacity-20 dark:opacity-10">
        €
      </div>
      <div className="absolute top-1/3 right-1/4 text-gray-300 dark:text-gray-600 text-5xl font-bold opacity-20 dark:opacity-10">
        £
      </div>
      <div className="absolute bottom-1/4 left-1/3 text-gray-300 dark:text-gray-600 text-7xl font-bold opacity-20 dark:opacity-10">
        ¥
      </div>

      <div className="max-w-4xl mx-auto bg-black dark:bg-gray-800 text-white dark:text-gray-100 p-10 rounded-xl shadow-2xl relative z-10 border-l-4 border-yellow-500 dark:border-yellow-400 transition-colors duration-300">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-yellow-400 dark:text-yellow-300">
              MAXIMIZE YOUR EARNINGS
            </h2>
            <p className="text-gray-300 dark:text-gray-300 mb-6">
              Join 15,000+ businesses already scaling their revenue with our
              platform. Get a personalized consultation today.
            </p>

            <div className="bg-gray-900 dark:bg-gray-700 p-6 rounded-lg mb-6 transition-colors duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500 dark:bg-yellow-400 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  <span className="text-black font-bold">1</span>
                </div>
                <h3 className="font-bold">High-Converting Solutions</h3>
              </div>
              <p className="text-gray-400 dark:text-gray-300 text-sm">
                Our clients see an average 37% increase in conversion rates
                within 30 days.
              </p>
            </div>

            <div className="bg-gray-900 dark:bg-gray-700 p-6 rounded-lg transition-colors duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500 dark:bg-yellow-400 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  <span className="text-black font-bold">2</span>
                </div>
                <h3 className="font-bold">24/7 Support</h3>
              </div>
              <p className="text-gray-400 dark:text-gray-300 text-sm">
                Dedicated account managers to help you maximize your earnings
                potential.
              </p>
            </div>
          </div>

          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-medium mb-2 text-gray-300 dark:text-gray-300">
                  Full Name*
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-gray-800 dark:bg-gray-700 border ${
                    errors.name
                      ? "border-red-500"
                      : "border-gray-700 dark:border-gray-600"
                  } rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-400 focus:border-transparent text-white dark:text-gray-100 transition-colors duration-300`}
                  placeholder="John Smith"
                />
                {errors.name && (
                  <p className="text-red-400 dark:text-red-300 text-sm mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label className="block font-medium mb-2 text-gray-300 dark:text-gray-300">
                  Business Email*
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-gray-800 dark:bg-gray-700 border ${
                    errors.email
                      ? "border-red-500"
                      : "border-gray-700 dark:border-gray-600"
                  } rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-400 focus:border-transparent text-white dark:text-gray-100 transition-colors duration-300`}
                  placeholder="ceo@yourcompany.com"
                />
                {errors.email && (
                  <p className="text-red-400 dark:text-red-300 text-sm mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="block font-medium mb-2 text-gray-300 dark:text-gray-300">
                  Company Name
                </label>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`w-full bg-gray-800 dark:bg-gray-700 border border-gray-700 dark:border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-400 focus:border-transparent text-white dark:text-gray-100 transition-colors duration-300`}
                  placeholder="Your Company Inc."
                />
              </div>

              <div>
                <label className="block font-medium mb-2 text-gray-300 dark:text-gray-300">
                  License Type*
                </label>
                <select
                  name="license"
                  value={formData.license}
                  onChange={handleChange}
                  className={`w-full bg-gray-800 dark:bg-gray-700 border ${
                    errors.license
                      ? "border-red-500"
                      : "border-gray-700 dark:border-gray-600"
                  } rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-400 focus:border-transparent text-white dark:text-gray-100 transition-colors duration-300`}
                >
                  <option value="">Select subscription type</option>
                  <option value="personal">
                    Personal (For individual use)
                  </option>
                  <option value="freelancer">
                    Freelancer (Individual license)
                  </option>
                  <option value="small-team">Small Team (2–10 users)</option>
                  <option value="business">Business (11–50 users)</option>
                  <option value="enterprise">Enterprise (50+ users)</option>
                  <option value="educational">Educational / Non-Profit</option>
                </select>
                {errors.license && (
                  <p className="text-red-400 dark:text-red-300 text-sm mt-1">
                    {errors.license}
                  </p>
                )}
              </div>

              <div>
                <label className="block font-medium mb-2 text-gray-300 dark:text-gray-300">
                  How can we boost your sales?*
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-gray-800 dark:bg-gray-700 border ${
                    errors.message
                      ? "border-red-500"
                      : "border-gray-700 dark:border-gray-600"
                  } rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-400 focus:border-transparent text-white dark:text-gray-100 transition-colors duration-300`}
                  placeholder="Tell us about your current revenue and goals..."
                />
                {errors.message && (
                  <p className="text-red-400 dark:text-red-300 text-sm mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-yellow-600 dark:bg-yellow-500 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 dark:hover:bg-yellow-400 transition-colors duration-300 ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Calculating ROI...
                  </span>
                ) : (
                  "GET MY CUSTOM QUOTE →"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
