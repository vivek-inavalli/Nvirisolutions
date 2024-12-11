import step1 from "../../images/step1.png";
import step2 from "../../images/step2.png";
import step3 from "../../images/step3.png";
import "./index.css";

const Steps = () => {
  return (
    <div className="booking-steps">
      <h1>Book a request in 3 simple steps</h1>
      <div className="stepsmini">
        <div className="step">
          <img src={step1} alt="Provide your appliance details" />
          <h2>Provide your appliance details</h2>
          <p>Let us know your appliance details and your issue.</p>
        </div>
        <div className="step">
          <img src={step2} alt="Choose your technician" />
          <h2>Choose your technician</h2>
          <p>Choose from a wide variety of technicians and vendors.</p>
        </div>
        <div className="step">
          <img src={step3} alt="Get it fixed!" />
          <h2>Get it fixed!</h2>
          <p>The technician will arrive at your doorstep shortly to fix it!</p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
