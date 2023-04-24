import "../styles/homepage.css";
import logo from "../assets/logo.svg";
import headerImage from "../assets/header_bg.svg";
import { data } from "./data";

export const HomePage = () => {
  return (
    <div className="homepage">
      <nav>
        <div className="logo__div">
          <img className="logo" src={logo} alt="company-logo" />
          <p>STERLING ASSURANCE</p>
        </div>
        <ul>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>PRODUCTS</li>
          <li>INVESTORS</li>
          <li>INSURANCE</li>
          <li>CLAIMS</li>
          <li>DOWNLOADS</li>
          <li>CONTACT</li>
        </ul>
      </nav>
      <div className="header__section">
        <img
          src={headerImage}
          alt="header-background"
          className="header__image"
        />
      </div>
      <div className="claims__container">
        {data.map((item) => {
          return (
            <div key={item.id} className="claim">
              <img src={item.image} alt="" />
              <p>{item.title}</p>
              <p>{item.description}</p>
              <div className="button__div">
                <button className="claim-btn">Claim</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
