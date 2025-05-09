import React from "react";
import Hero from "./component/Hero";
import InfoSection from "./component/Infosection";
import ZoomImageOnScroll from "./component/Image";
import ChooseUs from "./component/ChooseUs";
import ReviewSection from "./component/Review";
import ContactForm from "./component/ContactForm";
import Footer from "./component/Footer";

const App = () => {
  return (
    <div>
      <Hero />
      <ZoomImageOnScroll />
      <InfoSection />
      <ChooseUs />
      <ReviewSection />
      <ContactForm />
      <Footer />

      
    </div>
  );
};

export default App;
