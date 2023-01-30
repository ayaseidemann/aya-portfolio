import './Bio.scss';
import profilePic from '../../assets/Pictures/aya-full.png';

// icons
import envelopeMediumDark from '../../assets/Icons/envelope-medium-dark.png';
import envelopeMediumLight from '../../assets/Icons/envelope-medium-light.png';
import githubMediumDark from '../../assets/Icons/github-medium-dark.png';
import githubMediumLight from '../../assets/Icons/github-medium-light.png';
import linkedinMediumDark from '../../assets/Icons/linkedin-medium-dark.png';
import linkedinMediumLight from '../../assets/Icons/linkedin-medium-light.png';

function Bio({ mode }) {

    // get icons to show and hide based on window position
    let bioIcons = document.querySelector('.bio__icons');
    function iconDisplay() {
        if (window.scrollY > 200) {
            bioIcons.classList.add('bio__icons--hidden');
        } else {
            bioIcons.classList.remove('bio__icons--hidden');
        }
    }
    window.addEventListener('scroll', iconDisplay);

    return (
        <div className='bio'>
            <div className='bio__text'>
                <h2 className='bio__header'>Hello!</h2>
                <p className='bio__p'>My name is Aya and I'm a positive and detail-oriented Full-Stack Software Developer living in Vancouver, BC. </p>
                <div className='bio__text--box'></div>
            </div>
            <img className='bio__pic' src={profilePic} alt='headshot' />
            <div className='bio__pic--box'></div>
            {mode === 'light' &&
                        <div className='bio__icons'>
                            <a className='bio__link bio__link--email' href="mailto:aya.seidemann@gmail.com">
                                <img
                                    className='bio__icon bio__icon--email'
                                    src={envelopeMediumDark}
                                    alt='email' />
                            </a>
                            <a className='bio__link bio__link--github' href='https://github.com/ayaseidemann'>
                                <img
                                    className='bio__icon bio__icon--github'
                                    src={githubMediumDark}
                                    alt='github' />
                            </a>
                            <a className='bio__link bio__link--linkedin' href='https://www.linkedin.com/in/aya-seidemann/'>
                                <img
                                    className='bio__icon bio__icon--linkedin'
                                    src={linkedinMediumDark}
                                    alt='linkedin' />
                            </a>
                        </div>
                    }
                    {mode === 'dark' &&
                        <div className='bio__icons'>
                            <a className='bio__link bio__link--email' href="mailto:aya.seidemann@gmail.com">
                                <img
                                    className='bio__icon bio__icon--email'
                                    src={envelopeMediumLight}
                                    alt='email' />
                            </a>
                            <a className='bio__link bio__link--github' href='https://github.com/ayaseidemann'>
                                <img
                                    className='bio__icon bio__icon--github'
                                    src={githubMediumLight}
                                    alt='github' />
                            </a>
                            <a className='bio__link bio__link--linkedin' href='https://www.linkedin.com/in/aya-seidemann/'>
                                <img
                                    className='bio__icon bio__icon--linkedin'
                                    src={linkedinMediumLight}
                                    alt='linkedin' />
                            </a>
                        </div>
                    }
        </div>
    )
}

export default Bio;