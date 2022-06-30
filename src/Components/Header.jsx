import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import userContext from "../contexts/userContext";

const Header = () => {
  const location = useLocation();
  const { loggedUser, setLoggedUser } = useContext(userContext);

  const handleClick = () => {
    setLoggedUser("")
    location.pathname = `/`
  }

  if (location.pathname === `/users/${loggedUser.user_id}`) {
    return (
      <header className="header">
        <h1>Dooduels</h1>
        <button onClick={handleClick}>Logout</button>
      </header>
    );
  }

  if (!loggedUser) {
    return (
      <header className="header">
        <h1>Dooduels</h1>
      </header>
    );
  }

  return (
    <header className="header">
      <h1>Dooduels</h1>
      <Link to={`/users/${loggedUser.user_id}`}>
        <div className="home-user">
          <img
            className="home-profile-pic"
            src={loggedUser.avatar_url}
            alt="example"
          />
          <p className="home-username">{loggedUser.user_name}</p>
        </div>
      </Link>
    </header>
  );
};

export default Header;
