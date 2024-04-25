import React, { useState } from "react";

const FAQSection = ({ faqData }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleQuestion = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };
  return (
    <>
      <section className="product_section">
        <div className="section_head">
          <img src={require("../assets/imgs/124.png")} alt="" />
          <h2>FAQs</h2>
        </div>
        <div className="container">
          <div className="section_header">
            <h2>Which CBD Product is right for me?</h2>
            <p>
              Our expert guide will help you to select the correct product for
              you.
            </p>
          </div>
          <div className="faq-list">
            {faqData &&
              faqData.map((faq, index) => (
                <div key={index} className="faq-item">
                  <div
                    className={
                      expandedIndex === index
                        ? "faq-question expanded"
                        : "faq-question"
                    }
                    onClick={() => toggleQuestion(index)}
                  >
                    {faq.question}
                  </div>
                  {expandedIndex === index && (
                    <div className="faq-answer">{faq.answer}</div>
                  )}
                </div>
              ))}
          </div>
          {/* <div className="row">
      <div className="col-12 col-md-3">
        <div className="pr_card">
          <img src={require("../assets/images/cbd_oil.jpeg")} alt="" />
          <div className="p-1">
            <h2>CBD Oil</h2>
            <p>
              The most common way to take CBD is in the form of CBD Oil. A
              few drops under the tongue offers an excellent absorption
              rate through the sublingual gland and is also fast acting.
            </p>
          </div>
        </div>
      </div>
    </div> */}
        </div>
      </section>
    </>
  );
};

export default FAQSection;
