import './HomePage.scss';
import Header from '../../components/Header/Header';
import Bio from '../../components/Bio/Bio';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';

function HomePage() {

    // set darkmode toggle
    // const [mode, setMode] = useState('');

    // function to toggle darkmode
    function toggleDarkMode() {
        let darkToggleClass = document.querySelector('.homepage');
        darkToggleClass.classList.toggle('dark');
        console.log('adding dark class to homepage');
    }

    return(
        <div className='homepage'>
            <Header toggleDarkMode={toggleDarkMode} />
            <div className='main'>
                <Bio />
                <Projects />
                <Contact />
            </div>
        </div>
    )
}

export default HomePage;