import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AuthRequest } from "../../store/modules/auth/actions";

// import { Container } from './styles';

function Login() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AuthRequest());
  }, []);

  return <h1>Login</h1>;
}

export default Login;
