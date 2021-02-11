import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators";
import { Input } from "../common/FormsControls/FormsControls";
import { loginThunkCreator } from "../../redux/reducer/authReducer";
import { Redirect } from "react-router-dom";
import s from "./Login.module.css";

let maxLengthCreator20 = maxLengthCreator(20);

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          type="text"
          placeholder="Email"
          name={"email"}
          component={Input}
          validate={[required, maxLengthCreator20]}
        />
      </div>
      <div>
        <Field
          type="password"
          placeholder="Password"
          name={"password"}
          component={Input}
          validate={[required, maxLengthCreator20]}
        />
      </div>
      <div>
        <Field type="checkbox" name={"rememberMe"} component={Input} /> Remember
        me
      </div>
      {error && <div className={s.formSummaryError}>{error}</div>}
      {captchaUrl && (
        <div>
          <img src={captchaUrl} alt="captcha" />
          <Field
            type="text"
            placeholder=""
            name={"captcha"}
            component={Input}
            validate={[required]}
          />
        </div>
      )}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login: loginThunkCreator })(Login);
