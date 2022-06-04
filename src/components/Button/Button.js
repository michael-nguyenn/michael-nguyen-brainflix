import { Link } from "react-router-dom";

import "./Button.scss";

function Button(props) {
  return <button className={props.className}>{props.name}</button>;
}

export default Button;
