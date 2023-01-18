import './Header.scss';
import { Link } from 'react-router-dom';
import { Moon, Sun, EnvelopeSimple, GithubLogo, LinkedinLogo } from "phosphor-react";

function Header() {

    return(
        <div className='header__wrapper'>
            <header className='header'>
                <Link className='header__link' to='/'>
                    <h1 className='header__title'>Aya Seidemann</h1>
                </Link>
                <div className='header__right'>
                    <button className='header__icon header__icon--mode'>
                        <Moon size={24} />
                    </button>
                    <a className='header__icon header__icon--email' href="mailto:aya.seidemann@gmail.com">
                        <EnvelopeSimple size={24} />
                    </a>
                    <a className='header__icon header__icon--github' href='https://github.com/ayaseidemann'>
                        <GithubLogo size={24} />
                    </a>
                    <a className='header__icon header__icon--linkedin' href='https://www.linkedin.com/in/aya-seidemann/'>
                        <LinkedinLogo size={24} />
                    </a>
                </div>
            </header>
        </div>
    )
}

export default Header;