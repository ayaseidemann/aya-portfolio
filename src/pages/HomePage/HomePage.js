import './HomePage.scss';

import Header from '../../components/Header/Header';
import Bio from '../../components/Bio/Bio';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';

import { useState } from 'react';

function HomePage() {

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

    // set darkmode toggle
    const [mode, setMode] = useState('light');

    // function to toggle darkmode
    function toggleDarkMode() {
        let darkToggleClass = document.querySelector('.homepage');
        if (mode === 'light') {
            setMode('dark');
            darkToggleClass.classList.add('dark');
            console.log('switched to dark mode');
        } else {
            setMode('light');
            darkToggleClass.classList.remove('dark');
            console.log('switched to light mode');
        }
    }

    return(
        <div className='homepage'>
            <Header mode={mode} toggleDarkMode={toggleDarkMode} />
            <div className='main'>
                <Bio mode={mode} />
                <Projects />
                <Contact />
            </div>
        </div>
    )
}

export default HomePage;