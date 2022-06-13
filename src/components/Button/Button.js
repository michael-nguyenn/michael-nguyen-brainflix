import "./Button.scss";

function Button(props) {
  return (
    <button className={props.className} type="submit">
      {props.name}
    </button>
  );
}

export default Button;
