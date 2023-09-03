import { useState } from "react";

const Form = ({ setSignUp, email, setEmail }) => {
  const handleEmailChange = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSignUp(true);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="email" className="form-label">
        Email address
      </label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        required
        placeholder="email@company.com"
        className="form-input"
        onChange={handleEmailChange}
      />
      <button className="btn form-btn">Subscribe to monthly newsletter</button>
    </form>
  );
};
export default Form;
