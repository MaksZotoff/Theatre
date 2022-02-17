import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { credent } from "../../actions/auth";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Это обязательное поле.
      </div>
    );
  }
};




const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();


  const onChangeLogin = (e) => {
    const login = e.target.value;
    setLogin(login);
  };

  const onChangePass = (e) => {
    const pass = e.target.value;
    setPass(pass);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(credent(login, pass))
        .then(() => {
          props.history.push("/profile");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Redirect to="/profile" />;
  }


  return (
    <div className="col-md-12">
      <div className="cardlogin">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <Form onSubmit={handleLogin} ref={form}>
          <div className="form-group">
            <label htmlFor="login">Login</label>
            <Input
              type="text"
              className="form-control"
              name="login"
              value={login}
              onChange={onChangeLogin}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="pass">Pass</label>
            <Input
              type="pass"
              className="form-control"
              name="pass"
              value={pass}
              onChange={onChangePass}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-block" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Войти</span>
            </button>
          </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default Login;