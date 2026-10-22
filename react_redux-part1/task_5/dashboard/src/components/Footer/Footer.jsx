import { useSelector } from 'react-redux';
import { getCurrentYear, getFooterCopy } from '../../utils/utils';

function Footer() {
  const { isLoggedIn } = useSelector(
    (state) => state.auth
  );

  return (
    <div className="App-footer mt-auto flex min-h-[55px] items-center justify-center border-t-[3px] border-[var(--main-color)] box-border">
      <p className="m-0 text-[10px] italic text-[#2d2d2d] max-[520px]:text-xs">
        Copyright {getCurrentYear()} - {getFooterCopy(true)}
      </p>

      {isLoggedIn && (
        <p>
          <a href="#contact">Contact us</a>
        </p>
      )}
    </div>
  );
}

export default Footer;
