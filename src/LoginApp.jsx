import { useState } from "react";

export default function LoginApp() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const [success, setSuccess] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const email = formData.email;
    const password = formData.password;
    if (email.trim() === "") {
      setError({ ...error, email: "You need an email!" });
      setSuccess("");
      return;
    }
    if (email && !email.includes("@")) {
      setError({ ...error, email: "Invalid email format" });
      setSuccess("");
      return;
    }
    if (password.trim() === "") {
      setError({ ...error, password: "You need a password!" });
      setSuccess("");
      return;
    }
    if (password.length < 8) {
      setError({ ...error, password: "Password needs minimum 8 characters!" });
      setSuccess("");
      return;
    }
    setSuccess("Form submitted!");
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {success && <div style={{ color: "green" }}>{success}</div>}
      <div>
        <label>Email:</label>
        <input
          className="input-regular"
          required
          name="email"
          type="email"
          value={formData.email || ""}
          onChange={(e) => {
            setFormData({
              ...formData,
              email: e.target.value,
            });
            setError({ ...error, email: "" });
          }}
          /*  onBlur={(e) => {
            setTouched({ ...touched, email: true });
            validateField("email", e.target.value);
}}*/
        ></input>
        {error.email && <span style={{ color: "red" }}>{error.email}</span>}
      </div>
      <div>
        <label>Password:</label>
        <input
          className="input-regular"
          required
          name="password"
          type="password"
          value={formData.password || ""}
          onChange={(e) => {
            setFormData({
              ...formData,
              password: e.target.value,
            });
            setError({ ...error, password: "" });
          }}
          /* onBlur={(e) => {
            setTouched({ ...touched, password: true });
            validateField("password", e.target.value);
          }} */
        ></input>
        {error.password && (
          <span style={{ color: "red" }}>{error.password}</span>
        )}
      </div>

      <button className="button" type="submit">
        Submit
      </button>
    </form>
  );
}
