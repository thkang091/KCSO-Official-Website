import React, { useState } from "react";

function Auth({ onSuccess }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const correctPassword = "KCSOGOGO";
    if (password === correctPassword) {
      onSuccess();
    } else {
      setError(true);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      BACKOFFICE LOGIN
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            palceholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          {error && <p>Incorret, try again</p>}
        </form>
      </div>
    </div>
  );
}

export default Auth;
