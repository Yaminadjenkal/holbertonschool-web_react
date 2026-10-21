import logo from '../../assets/holberton-logo.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/auth/authSlice';

function Header() {
  const dispatch = useDispatch();

  const { user, isLoggedIn } = useSelector(
    (state) => state.auth
  );

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <div className='App-header flex min-h-[110px] items-center border-b-[3px] border-[var(--main-color)] px-5 box-border max-flex-col max-justify-center max-py-5'>
      {logo}

      <h1 className='ml-[25px] text-[28px] text-[var(--main-color)] max-ml-0 max-mt-2 max-text-center max-text-[24px]'>
        School Dashboard
      </h1>

      {isLoggedIn && (
        <div id='logoutSection'>
          Welcome {user.email} (
          #logOut
            logout
          </a>
          )
        </div>
      )}
    </div>
  );
}

export default Header;
