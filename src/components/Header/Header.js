import './Header.scss';
import { Link } from 'react-router-dom';
import { Moon, Sun, EnvelopeSimple, GithubLogo, LinkedinLogo } from "phosphor-react";

function Header({ mode, toggleDarkMode }) {

    return(
        <div className='header__wrapper'>
            <header className='header'>
                <Link className='header__link' to='/'>
                    <h1 className='header__title'>Aya Seidemann</h1>
                </Link>
                <div className='header__right'>
                    {mode === 'light' &&
                    <button className='header__icon header__icon--mode' onClick={() => toggleDarkMode()}>
                        <Moon className='header__svg header__svg--mode' size={24} />
                    </button>
                    }
                    {mode === 'dark' &&
                    <button className='header__icon header__icon--mode' onClick={() => toggleDarkMode()}>
                        <Sun className='header__svg header__svg--mode' size={24} />
                    </button>
                    }
                    <a className='header__icon header__icon--email' href="mailto:aya.seidemann@gmail.com">
                        <EnvelopeSimple className='header__svg header__svg--mode' size={24} />
                    </a>
                    <a className='header__icon header__icon--github' href='https://github.com/ayaseidemann'>
                        <GithubLogo className='header__svg header__svg--mode' size={24} />
                    </a>
                    <a className='header__icon header__icon--linkedin' href='https://www.linkedin.com/in/aya-seidemann/'>
                        <LinkedinLogo className='header__svg header__svg--mode' size={24} />
                    </a>
                </div>
            </header>
        </div>
    )
}

export default Header;