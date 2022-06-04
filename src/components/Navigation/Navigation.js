import "./Navigation.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import Button from "../Button/Button";

function Navigation() {
  return (
    <header>
      <nav className="nav">
        <div className="logo">
          <Link className="logo__link" to="/">
            <img className="logo__image" src={logo} alt="Brainflix Logo" />
          </Link>
        </div>

        <form className="nav__form">
          <div className="nav__container">
            <input
              className="nav__input"
              type="text"
              placeholder="Search"
            ></input>
            <img src={avatar} alt="Avatar" className="avatar" />
          </div>

          <Link to="/upload">
            <Button className="button" name="UPLOAD" />
          </Link>

          <img src={avatar} alt="Avatar" className="avatar avatar--tablet" />
        </form>
      </nav>
    </header>
  );
}

export default Navigation;
