import './Header.scss';
import { Link } from 'react-router-dom';

// icons
import moonMediumDark from '../../assets/Icons/moon-medium-dark.png';
import sunMediumLight from '../../assets/Icons/sun-medium-light.png';
import envelopeMediumDark from '../../assets/Icons/envelope-medium-dark.png';
import envelopeMediumLight from '../../assets/Icons/envelope-medium-light.png';
import githubMediumDark from '../../assets/Icons/github-medium-dark.png';
import githubMediumLight from '../../assets/Icons/github-medium-light.png';
import linkedinMediumDark from '../../assets/Icons/linkedin-medium-dark.png';
import linkedinMediumLight from '../../assets/Icons/linkedin-medium-light.png';
// import { Moon, Sun, EnvelopeSimple, GithubLogo, LinkedinLogo } from "phosphor-react";

function Header({ mode, toggleDarkMode }) {

    return (
        <div className='header__wrapper'>
            <header className='header'>
                <Link className='header__home-link' to='/'>
                    <h1 className='header__title'>Aya Seidemann</h1>
                </Link>
                <div className='header__right'>
                    {mode === 'light' &&
                        <>
                            <img
                                className='header__icon header__icon--mode'
                                src={moonMediumDark}
                                onClick={() => toggleDarkMode()}
                                alt='darkmode' />
                            <a className='header__link header__link--email' href="mailto:aya.seidemann@gmail.com">
                                <img
                                    className='header__icon header__icon--email'
                                    src={envelopeMediumDark}
                                    alt='email' />
                            </a>
                            <a className='header__link header__link--github' href='https://github.com/ayaseidemann'>
                                <img
                                    className='header__icon header__icon--github'
                                    src={githubMediumDark}
                                    alt='github' />
                            </a>
                            <a className='header__link header__link--linkedin' href='https://www.linkedin.com/in/aya-seidemann/'>
                                <img
                                    className='header__icon header__icon--linkedin'
                                    src={linkedinMediumDark}
                                    alt='linkedin' />
                            </a>
                        </>
                    }
                    {mode === 'dark' &&
                        <>
                            <img
                                className='header__icon header__icon--mode'
                                src={sunMediumLight}
                                onClick={() => toggleDarkMode()}
                                alt='darkmode' />
                            <a className='header__link header__link--email' href="mailto:aya.seidemann@gmail.com">
                                <img
                                    className='header__icon header__icon--email'
                                    src={envelopeMediumLight}
                                    alt='email' />
                            </a>
                            <a className='header__link header__link--github' href='https://github.com/ayaseidemann'>
                                <img
                                    className='header__icon header__icon--github'
                                    src={githubMediumLight}
                                    alt='github' />
                            </a>
                            <a className='header__link header__link--linkedin' href='https://www.linkedin.com/in/aya-seidemann/'>
                                <img
                                    className='header__icon header__icon--linkedin'
                                    src={linkedinMediumLight}
                                    alt='linkedin' />
                            </a>
                        </>
                    }
                </div>
            </header>
        </div>
    )
}

export default Header;