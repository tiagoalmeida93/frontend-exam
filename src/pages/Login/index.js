import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthRequest } from "../../store/modules/auth/actions";
import { AppRequest } from "../../store/modules/app/actions";

import Button from "../../components/Button";

import logoDark from "../../assets/images/logo_dark.png";
import Loader from "../../components/Loader";

import "./styles.scss";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AppRequest());
  }, [dispatch]);

  const { isLoading } = useSelector((state) => state.app);

  function handleSubmit(e) {
    e.preventDefault(e);

    const user = {
      username,
      password,
    };

    dispatch(AuthRequest(user));
  }

  return isLoading ? (
    <Loader />
  ) : (
    <section className="login-wrapper">
      <div className="form-container">
        <img src={logoDark} alt="The Witcher" />
        <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
          <fieldset>
            <label>
              {username.length > 0 && <p>Email</p>}
              <input
                className="login-username"
                placeholder="Email"
                autoComplete="off"
                type="email"
                required
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </label>

            <label>
              {password.length > 0 && <p>Password</p>}
              <input
                className="login-username"
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </label>

            <Button value="LOGIN" type="submit" />
          </fieldset>
        </form>
      </div>
    </section>
  );
}
