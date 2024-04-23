import React from "react";

const About = () => {
  return (
    <>
      <section className="section_about">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-12">
              <div className="section_text">
                <h2>About CBD City</h2>
                <p>
                  CBD City LLC was established jan 2021 in Atlanta Georgia as
                  part of Black Brown and Green Organics LLC vertically
                  integrated Hemp and Cannabis company as retail flagship
                  holistic health and wellness center.
                </p>
                <p>
                  Inspired by Dr. Rapheal Mechoulam Known as Father of Cannabis
                  Research from Israel was the first to isolate the psychoactive
                  compound of the cannabis plant -tetrahydrocannabinol or THC.
                  Which led to thousands of clinical studies throughout the
                  world.{" "}
                </p>
                <p>
                  As early as 2737 B.C. the mystical Emperor Shen Neng of China
                  was prescribing majuana tea for treatment of gout,rheumatism,
                  malaria and for memory loss. Based on years of clinical
                  studies of the whole body medical benefits from the hemp and
                  cannabis plants.
                </p>
                <p>
                  Black Brown Green Organics LLC co-founders Johnny Mims and
                  Lance Robertson have partnered with some of the top cannabis
                  and hemp formulations researchers to provide and manufacture a
                  premier organics grown cannabinoid product line. Black Brown
                  Green Organics LLC's vertically integrated business model
                  opened up CBD CiTY LLC the flagship holistic health and
                  wellness center retail storefront in the heart of our African
                  American legacy community residents with the focus on
                  providing our community holistic health options. With
                  overwhelming community success we now offer our top tier
                  premium organic product line along with some of our hemp and
                  cannabis industry respected affiliates with our e-commerce
                  site.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <img src={require("../assets/imgs/coffee2.jpg")} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
