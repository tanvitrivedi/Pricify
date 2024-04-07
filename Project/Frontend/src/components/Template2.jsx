import React from "react";
import "./Template2.css";

const PricingPlan = ({ imgSrc, header, features, price, buttonText }) => {
  return (
    <div className="pricing-plan">
      <img src={imgSrc} alt="" className="pricing-img" />
      <h2 className="pricing-header">{header}</h2>
      <ul className="pricing-features">
        {features.map((feature, index) => (
          <li key={index} className="pricing-features-item">
            {feature}
          </li>
        ))}
      </ul>
      <span className="pricing-price">{price}</span>
      <a href="#/" className="pricing-button">
        {buttonText}
      </a>
    </div>
  );
};

const Template2 = () => {
  return (
    <div className="panel pricing-table">
      <PricingPlan
        imgSrc="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png"
        header="Personal"
        features={["Custom domains", "Sleeps after 30 mins of inactivity"]}
        price="Free"
        buttonText="Sign up"
      />
      <PricingPlan
        imgSrc="https://s28.postimg.cc/ju5bnc3x9/plane.png"
        header="Small team"
        features={["Never sleeps", "Multiple workers for more powerful apps"]}
        price="$150"
        buttonText="Free trial"
      />
      <PricingPlan
        imgSrc="https://s21.postimg.cc/tpm0cge4n/space-ship.png"
        header="Enterprise"
        features={["Dedicated", "Simple horizontal scalability"]}
        price="$400"
        buttonText="Free trial"
      />
    </div>
  );
};

export default Template2;
