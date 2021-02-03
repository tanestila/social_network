import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators";
import { Input } from "../common/FormsControls/FormsControls";
import { loginThunkCreator } from "../../redux/reducer/authReducer";
import { Redirect } from "react-router-dom";
import s from "../FormsControls/FormsControls.module.css";

let maxLengthCreator20 = maxLengthCreator(20);

const LoginForm = ({ handleSubmit, error }) => {
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
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login: loginThunkCreator })(Login);
