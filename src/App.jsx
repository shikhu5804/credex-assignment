import React from "react";
import Hero from "./component/Hero";
import InfoSection from "./component/Infosection";
import ZoomImageOnScroll from "./component/Image";
import ChooseUs from "./component/ChooseUs";
import ReviewSection from "./component/Review";
import ContactForm from "./component/ContactForm";
import Footer from "./component/Footer";
import ChatWidget from "./component/Chat";
import DarkModeToggle from "./component/Toogle";

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
      <ChatWidget />
      <DarkModeToggle />

      
    </div>
  );
};

export default App;
