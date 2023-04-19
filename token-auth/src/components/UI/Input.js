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
        disabled={props.disabled}
      />
      {props.button && <button onClick={props.onClick}>{props.button}</button>}
      {props.hasError && <p>{props.errorMsg}</p>}
      {props.hasCheckMsg && <p>{props.checkMsg}</p>}
    </div>
  );
}

export default Input;
