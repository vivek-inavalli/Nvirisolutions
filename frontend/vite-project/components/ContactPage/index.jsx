import "./index.css";
import icon from "../../images/icon.png";
import { MdOutlineFacebook } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const ContactPage = () => {
  return (
    <div className="contactmaindiv">
      <div className="upperpart">
        <div className="contact-info">
          <div>
            <p>Get in touch with us</p>
            <div className="email-input">
              <input
                className="contactinput"
                placeholder="Email address"
                aria-label="Enter your email"
              />
              <button className="contactbutton" aria-label="Submit email">
                →
              </button>
            </div>
          </div>
          <p>
            Hello, we are Lift Media. Our goal is to <br /> translate the
            positive effects from <br /> revolutionizing how companies engage
            with <br /> their clients & their team.
          </p>
        </div>
        <button className="book-service-button">Book a Service</button>
        <div>
          <ul>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Business Login</li>
          </ul>
        </div>
      </div>
      <div>
        <hr className="separator" />
        <div className="footer">
          <div className="logo-container">
            <img src={icon} alt="Company logo" />
          </div>
          <div className="social-icons">
            <FaLinkedin className="contactimg" />
            <MdOutlineFacebook />
            <AiFillTwitterCircle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
