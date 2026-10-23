import logo from '../../assets/holberton-logo.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/auth/authSlice';

function Header() {
  const dispatch = useDispatch();

  const { user, isLoggedIn } = useSelector(
    (state) => state.auth
  );

  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(logout());
  };

  return (
    <div className="App-header flex min-h-[110px] items-center border-b-[3px] border-[var(--main-color)] px-5 box-border">
      <img
        src={logo}
        alt="holberton logo"
        className="w-[130px] h-auto"
      />

      <h1 className="ml-[25px] text-[28px] text-[var(--main-color)]">
        School Dashboard
      </h1>

      {isLoggedIn && (
        <div id="logoutSection">
          Welcome {user.email} (
          <a href="#logout" onClick={handleLogout}>
            logout
          </a>
          )
        </div>
      )}
    </div>
  );
}

export default Header;
