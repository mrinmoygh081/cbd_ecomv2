import React from "react";
import YtIfram from "../components/YtIfram";
import { checkTypeArr } from "../utils/smailFun";
import { vidData } from "../data/data";

const Testimonials = () => {
  return (
    <>
      <div className="container my-5">
        <section className="testimonials">
          <div className="container">
            <div className="section_header">
              <h2>Testimonials</h2>
            </div>
            <div className="product-cards__slider">
              <div className="row">
                {checkTypeArr(vidData) &&
                  vidData
                    .filter((it) => it.type === "testimonial")
                    .map((item, i) => (
                      <div className="col-md-4" key={i}>
                        <YtIfram id={item?.urlId} />
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Testimonials;
