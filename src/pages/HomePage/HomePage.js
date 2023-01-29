import './HomePage.scss';

import Header from '../../components/Header/Header';
// import Bio from '../../components/Bio/Bio';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';

import { useState } from 'react';

function HomePage() {

    // set darkmode toggle
    const [mode, setMode] = useState('light');

    // function to toggle darkmode
    function toggleDarkMode() {
        let darkToggleClass = document.querySelector('.homepage');
        darkToggleClass.classList.toggle('dark');
        if (mode === 'light') {
            setMode('dark');
        } else {
            setMode('light');
        }
        console.log('adding dark class to homepage');
    }

    return(
        <div className='homepage'>
            <Header mode={mode} toggleDarkMode={toggleDarkMode} />
            <div className='main'>
                {/* <Bio /> */}
                <Projects />
                <Contact />
            </div>
        </div>
    )
}

export default HomePage;