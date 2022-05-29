import "./Navigation.scss";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";

function Navigation() {
  return (
    <nav className="nav">
      <div className="logo">
        <a className="logo__link" href="/">
          <img className="logo__image" src={logo} alt="Brainflix Logo" />
        </a>
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
        <button className="button" href="/">
          UPLOAD
        </button>
        <img src={avatar} alt="Avatar" className="avatar avatar--tablet" />
      </form>
    </nav>
  );
}

export default Navigation;
