import React from "react";

const About = () => {
  return (
    <>
      <section className="section_about">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-12">
              <div className="section_text">
                <h2>CBD UK – The UK’s Most Trusted CBD Hemp Oil products</h2>
                <p>
                  At CBD UK, our mission is to offer our valued customers only
                  the finest quality CBD products, at great prices. With over 7
                  years of experience in the CBD industry, we like to think that
                  our expert team has some of the most helpful knowledge when it
                  comes to helping our customers find the right product for
                  them. Our passion shows in every single one of our products,
                  which is highlighted by the number of return customers we have
                  gained over the last 7 years. Our customer product reviews say
                  it all. Everything we do at CBD UK is done to the highest
                  standard. Quality Control and Testing ensure that every
                  product is exactly as described and completely safe. All our
                  products come with a 100% Money-Back Guarantee. If you are not
                  100% happy with any of your purchases, we will refund in full
                  (terms and conditions apply). All our products are sold as a
                  “Food Supplement” under the MHRA UK Regulations.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <img src={require("../assets/product1.webp")} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
