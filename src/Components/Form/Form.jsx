import React, { useEffect, useState } from "react";
import "./form.css";

const Form = ({ setForms, formData, initialFormType }) => {
  const [isSignUp, setIsSignUp] = useState(initialFormType === "sign up");
  const [signIn, setSignIn] = useState("Sign in");
  const [signUp, setSignUp] = useState("Sign up");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (isSignUp) {
      setSignIn("Sign Up");
      setSignUp("Sign In");
    } else {
      setSignIn("Sign In");
      setSignUp("Sign Up");
    }
  }, [isSignUp]);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="form-container">
      <form className="form">
        <div className="form-header">
          <h2>{signIn}</h2>
          <div onClick={() => setForms(false)} className="cross-icon">
            <svg
              className="close-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {isSignUp && (
          <input
            type="text"
            placeholder="Full Name"
            required
          />
        )}

        <input
          type="email"
          placeholder="Email"
          required
        />

        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
          />
          <button
            type="button"
            className="password-toggle"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                <line x1="1" y1="1" x2="23" y2="23" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        </div>

        <button type="submit">{signIn}</button>

        <div className="form-toggle">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <span onClick={toggleForm} className="form-message">
            <span className="sign-in">{signUp}</span>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Form;