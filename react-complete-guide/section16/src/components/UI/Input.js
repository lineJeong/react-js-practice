function Input(props) {
  return (
    <div className={props.inputClasses}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type || "text"}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      {props.hasError && <p className="error-text">{props.errorMsg}</p>}
    </div>
  );
}

export default Input;
