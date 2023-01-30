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

    // get icons to show and hide based on window position
    let bioIcons = document.querySelector('.header__left-icons');
    function iconDisplayHeader() {
        if (window.scrollY < 200) {
            bioIcons.classList.add('header__left-icons--hidden');
        } else {
            bioIcons.classList.remove('header__left-icons--hidden');
        }
    }
    window.addEventListener('scroll', iconDisplayHeader);

    return (
        <div className='header__wrapper'>
            <header className='header'>
                <Link className='header__home-link' to='/'>
                    <h1 className='header__title'>Aya Seidemann</h1>
                </Link>
                {mode === 'light' &&
                    <div className='header__icons'>
                        <div className='header__left-icons header__left-icons--hidden'>
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
                        </div>
                        <img
                            className='header__icon header__icon--mode'
                            src={moonMediumDark}
                            onClick={() => toggleDarkMode()}
                            alt='darkmode' />
                    </div>
                }
                {mode === 'dark' &&
                    <div className='header__icons'>
                        <div className='header__left-icons'>
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
                        </div>
                        <img
                            className='header__icon header__icon--mode'
                            src={sunMediumLight}
                            onClick={() => toggleDarkMode()}
                            alt='darkmode' />
                    </div>
                }
            </header>
        </div>
    )
}

export default Header;