import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

//styles
import styles from "./Signup.module.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { error, isPending, signup } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, name);
    //console.log(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className={styles["signup-form"]}>
      <h2> Signup</h2>

      <label>
        <span>Firstname: </span>
        <input
          type="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
      </label>

      <label>
        <span>Email: </span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
      </label>

      <label>
        <span>Password: </span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
      </label>

      {isPending ? (
        <button className="btn">Loading...</button>
      ) : (
        <button className="btn"> Sign Up </button>
      )}

      {error && <p>{error} </p>}
    </form>
  );
};

export default Signup;
