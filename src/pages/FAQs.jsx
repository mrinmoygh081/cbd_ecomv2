import React from "react";
import FAQSection from "../components/FAQSection";
import { faqData } from "../data/data";

const FAQs = () => {
  return (
    <div>
      <FAQSection faqData={faqData} />
    </div>
  );
};

export default FAQs;
