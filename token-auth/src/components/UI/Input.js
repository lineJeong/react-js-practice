import classes from "./Input.module.css";

function Input(props) {
  return (
    <div className={classes["input-control"]}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        name={props.name}
        type={props.type || "text"}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      {props.hasError && <p>{props.errorMsg}</p>}
    </div>
  );
}

export default Input;
