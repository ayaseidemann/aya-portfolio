import './HomePage.scss';

import Header from '../../components/Header/Header';
import Bio from '../../components/Bio/Bio';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';

function HomePage({ mode, toggleDarkMode }) {

        // get icons to show and hide based on window position
        let iconsInHeader = false;
        function iconDisplay() {
            if (window.scrollY < 200 && iconsInHeader) {
                document.body.classList.remove('icons-header');
                // console.log('removing icons from bio, should be in header');
                iconsInHeader = false;
            } else if (window.scrollY >= 200 && !iconsInHeader) {
                document.body.classList.add('icons-header');
                // console.log('adding icons to header, should not be in bio');
                iconsInHeader = true;
            }
        }
        window.addEventListener('scroll', iconDisplay, false);

    return(
        <div className='homepage'>
            <Header mode={mode} toggleDarkMode={toggleDarkMode}/>
            <div className='main'>
                <Bio mode={mode}/>
                <Projects />
                <Contact />
            </div>
        </div>
    )
}

export default HomePage;