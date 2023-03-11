import useInput from "../hooks/useInput";
import Input from "./UI/Input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  let formIsValid = false;
  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    console.log(firstNameValue);
    console.log(lastNameValue);
    console.log(emailValue);

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <Input
          inputClasses={firstNameClasses}
          id="firstName"
          label="First Name"
          type="text"
          value={firstNameValue}
          onChange={firstNameChangeHandler}
          onBlur={firstNameBlurHandler}
          hasError={firstNameHasError}
          errorMsg="First Name must not be empty"
        />
        <Input
          inputClasses={lastNameClasses}
          id="lastName"
          label="Last Name"
          type="text"
          value={lastNameValue}
          onChange={lastNameChangeHandler}
          onBlur={lastNameBlurHandler}
          hasError={lastNameHasError}
          errorMsg="Last Name must not be empty"
        />
        <Input
          inputClasses={emailClasses}
          id="email"
          label="E-Mail Address"
          type="email"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          hasError={emailHasError}
          errorMsg="Email must include '@'"
        />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
