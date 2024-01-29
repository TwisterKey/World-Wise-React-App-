import { useEffect, useState } from "react";
import styles from "./Login.module.css";
import PageNav from "../Components/PageNav";
import { useAuth } from "../Contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  const navigate = useNavigate();

  const { login, isAuthentificated } = useAuth();

  useEffect(
    function Auth() {
      if (isAuthentificated === true) navigate("/app", { replace: true });
    },
    [isAuthentificated]
  );

  return (
    <main className={styles.login}>
      <PageNav></PageNav>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          if (email && password) login(email, password);
        }}
      >
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary">Login</Button>
        </div>
      </form>
    </main>
  );
}
