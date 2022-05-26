import "./Navigation.scss";

function Navigation() {
  return (
    <nav className="nav">
      <a className="logo" href="/">
        <img
          className="logo__image"
          src="./assets/Logo/BrainFlix-logo.svg"
          alt="Brainflix Logo"
        />
      </a>

      <div className="nav__container">
        <div className="nav__search">
          <input className="nav__input"></input>
        </div>
        <div className="avatar">
          <img
            src="./assets/Images/Mohan-muruge.jpg"
            alt="Avatar Image"
            className="avatar__image"
          />
        </div>

        <a className="nav__upload" href="/">
          Upload
        </a>
      </div>
    </nav>
  );
}

export default Navigation;
