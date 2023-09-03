import { useState } from "react";
import img from "./assets/images/illustration-sign-up-mobile.svg";
import iconList from "./assets/images/icon-list.svg";
import Form from "./Form";

const DesktopContent = () => {
  const [signUp, setSignUp] = useState(false);
  const [email, setEmail] = useState("");

  if (signUp) {
    return (
      <article className="desktop-success">
        <img src={iconList} alt="" className="small-img" />

        <h2>Thanks for subscribing!</h2>
        <p>
          A confirmation email has been sent to <b>{email}</b>. Please open it
          and click the button inside to confirm your subscription.
        </p>
        <button
          type="button"
          className="btn dismiss-btn"
          onClick={() => {
            setSignUp(false);
            setEmail("");
          }}
        >
          Dismiss message
        </button>
      </article>
    );
  }
  return (
    <article className="desktop-signup">
      <div className="text-container">
        <div className="info">
          <h2>Stay updated!</h2>
          <p>Join 60,000+ project managers receiving monthly updates on:</p>
          <p className="update">
            <span>
              <img src={iconList} className="img" />
            </span>{" "}
            Product discovery and building what matters
          </p>
          <p className="update">
            <span>
              <img src={iconList} className="img" />
            </span>{" "}
            Measuring to ensure updates are a success
          </p>
          <p className="update">
            <span>
              <img src={iconList} className="img" />
            </span>{" "}
            And so much more!
          </p>
        </div>
        <Form setSignUp={setSignUp} email={email} setEmail={setEmail} />
      </div>

      <img src={img} className="img" />
    </article>
  );
};
export default DesktopContent;
