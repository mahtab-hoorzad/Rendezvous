import React from 'react';

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />

          <button type="submit">Login</button>
        </form>
      </div>

      <div className="signup-form">
        <h2>Sign Up</h2>
        <form>
          <label htmlFor="newUsername">New Username:</label>
          <input type="text" id="newUsername" name="newUsername" />

          <label htmlFor="newPassword">New Password:</label>
          <input type="password" id="newPassword" name="newPassword" />

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" />

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
