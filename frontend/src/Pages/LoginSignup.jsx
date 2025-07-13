import React from "react";
import "../CSS/LoginSignup.css";
const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <button>Continue</button>
        </div>

        <p className="loginsignup-login">
          Already have an account ? <span>Login here</span>
        </p>
        <label
          style={{
            display: "inline-flex",
            alignItems: "center",
            cursor: "pointer",
            fontSize: "16px",
            padding: "8px 12px",
            borderRadius: "8px",
            backgroundColor: checked ? "#d1e7dd" : "#f8f9fa",
            border: "1px solid #ced4da",
            transition: "all 0.2s ease",
            userSelect: "none",
          }}
        >
          <input
            type="checkbox"
            checked={checked}
            onChange={handleChange}
            style={{
              width: "18px",
              height: "18px",
              marginRight: "10px",
              accentColor: "#198754", // green color
            }}
          />
          Accept Terms & Conditions
        </label>
        {/* <div className='loginsignup-agree'>
          <input type='checkbox' name='' id=''/>
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div> */}
      </div>
    </div>
  );
};

export default LoginSignup;
