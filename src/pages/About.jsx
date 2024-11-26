import React from "react";

const About = () => {
  return (
    <>
      <section className="section_about">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-12">
              <div className="section_text">
                <h2>About Rosa and Mary CBD</h2>
                <p>
                  Rosa and Mary CBD LLC was established in January 2021 in
                  Atlanta, Georgia, as part of Black Brown and Green Organics
                  LLC—a vertically integrated hemp and cannabis company. Rosa
                  and Mary CBD serves as a flagship holistic health and wellness
                  center, committed to empowering communities through natural,
                  plant-based solutions.
                </p>
                <p>
                  Inspired by the groundbreaking work of Dr. Raphael Mechoulam,
                  renowned as the "Father of Cannabis Research" from Israel,
                  Rosa and Mary CBD draws on his pioneering studies. Dr.
                  Mechoulam was the first to isolate tetrahydrocannabinol (THC),
                  the psychoactive compound in cannabis, leading to thousands of
                  clinical studies worldwide on the medical potential of hemp
                  and cannabis.
                </p>
                <p>
                  The healing legacy of cannabis dates back to 2737 B.C., when
                  Emperor Shen Neng of China prescribed cannabis tea for
                  ailments such as gout, rheumatism, malaria, and memory loss.
                  Building on centuries of holistic practice and modern clinical
                  research, Rosa and Mary CBD is dedicated to offering the
                  highest quality cannabinoid products.
                </p>
                <p>
                  Co-founders Henry Ison and Ebony Ison work alongside top
                  cannabis and hemp formulation researchers to manufacture a
                  premier line of organically grown cannabinoid products. Rosa
                  and Mary CBD's retail storefront proudly serves Atlanta's
                  African American legacy community, offering premium holistic
                  health options that prioritize wellness and empowerment.
                </p>
                <p>
                  Due to overwhelming community support, Rosa and Mary CBD now
                  brings its top-tier organic product line to a wider audience
                  through its e-commerce platform. Customers can explore a
                  curated selection of premium products and trusted affiliate
                  brands from the hemp and cannabis industry, all designed to
                  support a holistic approach to health and well-being.
                </p>
                <p>
                  At Rosa and Mary CBD, health is not just a product—it’s a
                  mission.
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
