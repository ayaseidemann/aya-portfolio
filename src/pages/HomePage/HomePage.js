import './HomePage.scss';
import Header from '../../components/Header/Header';
import Bio from '../../components/Bio/Bio';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';

function HomePage() {

    return(
        <>
            <Header />
            <Bio />
            <Projects />
            <Contact />
        </>
    )
}

export default HomePage;