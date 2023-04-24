import "../styles/motoclaimform.css";

export const MotorClaimForm = () => {
  return (
    <div className="motorClaim__conatiner">
      <div className="title">Motor Insurrance Claim Process</div>
      <hr />
      <p className="sub__heading">Policy Owner Details</p>
      <form>
        <div className="user-details">
          <div className="input-box">
            <span className="label">Policy Number</span>
            <input type="text" placeholder="" />
          </div>
          <div className="input-box">
            <span className="label">First Name</span>
            <input type="text" placeholder="" />
          </div>
          <div className="input-box">
            <span className="label">Last Name</span>
            <input type="text" placeholder="" />
          </div>
          <div className="input-box">
            <span className="label">Phone number</span>
            <input type="text" placeholder="" />
          </div>
          <div className="input-box">
            <span className="label">Email Address</span>
            <input type="text" placeholder="" />
          </div>
        </div>
        <p>Details of Incident</p>
        <div className="user-details">
          <div className="input-box">
            <span className="label">Date of Incident</span>
            <input type="date" placeholder="" />
          </div>
          <div className="input-box">
            <span className="label">Time of Incident</span>
            <input type="time" placeholder="" />
          </div>
          <div className="input-box">
            <span className="label">Where did the Incident Occur?</span>
            <input type="text" placeholder="" />
          </div>
          <div className="input-box">
            <span className="label">Brief Description of Incident</span>
            <textarea type="text" placeholder=""></textarea>
          </div>
          <div className="input-box">
            <span className="label">Upload Driver License</span>
            <input type="file" placeholder="upload file" />
          </div>
          <hr />
          <p>Documents for Incident</p>
          <div className="input-box">
            <span className="label">Upload Pictures</span>
            <input type="file" placeholder="upload file" />
          </div>
          <div className="input-box">
            <span className="label">Upload Videos</span>
            <input type="file" placeholder="upload file" />
          </div>
          <div className="input-box">
            <span className="label">Others</span>
            <input type="file" placeholder="upload file" />
          </div>
        </div>
      </form>
    </div>
  );
};
