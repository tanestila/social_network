import { Field, reduxForm } from "redux-form";
import { Input, Textarea } from "../../common/FormsControls/FormsControls";
import { maxLengthCreator } from "../../../utils/validators";
import s from "../../Login/Login.module.css";

let maxLengthCreator20 = maxLengthCreator(20);

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Full Name</label>
        <Field
          type="text"
          placeholder="Full Name"
          name={"fullName"}
          component={Input}
          validate={[]}
        />
      </div>
      <div>
        <label>Looking For A Job</label>
        <Field
          type="checkbox"
          placeholder=""
          name={"lookingForAJob"}
          component={Input}
          validate={[]}
        />
      </div>

      <div>
        <label>My professional skills</label>
        <Field
          placeholder=""
          name={"lookingForAJobDescription"}
          component={Textarea}
          validate={[]}
        />
      </div>

      <div>
        <label>About me</label>
        <Field
          placeholder=""
          name={"aboutMe"}
          component={Textarea}
          validate={[]}
        />
      </div>

      {Object.keys(profile.contacts).map((contact) => (
        <div key={contact}>
          <label>{contact}</label>
          <Field
            type="text"
            placeholder={contact}
            name={"contacts." + contact}
            component={Input}
            validate={[]}
          />
        </div>
      ))}
      {error && <div className={s.formSummaryError}>{error}</div>}
      <button>save</button>
    </form>
  );
};

let ProfileDataReduxForm = reduxForm({ form: "edit-profile" })(ProfileDataForm);

// ProfileDataReduxForm = connect(
//   (state) => ({
//     initialValues: state.account.data, // pull initial values from account reducer
//   }),
//   { load: loadAccount } // bind account loading action creator
// )(ProfileDataReduxForm);

export default ProfileDataReduxForm;
