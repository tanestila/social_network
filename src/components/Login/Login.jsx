import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators";
import { Input } from "../FormsControls/FormsControls";

let maxLengthCreator20 = maxLengthCreator(20);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          type="text"
          placeholder="Login"
          name={"login"}
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
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = () => {
  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
export default Login;
