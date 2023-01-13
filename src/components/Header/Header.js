import './Header.scss';
import { Link } from 'react-router-dom';

function Header() {

    return(
        <div className='header__wrapper'>
            <header className='header'>
                <Link className='header__link' to='/'>
                    <h1 className='header__title'>Aya Seidemann</h1>
                </Link>
                <div className='header__right'>
                    <button className='header__mode'>🌙</button>
                    <a className='header__email' href="mailto:aya.seidemann@gmail.com">email</a>
                    <a className='header__github' href='https://github.com/ayaseidemann'>GitHub</a>
                    <a className='header__linkedin' href='https://www.linkedin.com/in/aya-seidemann/'>LinkedIn</a>
                </div>
            </header>
        </div>
    )
}

export default Header;