import './HomePage.scss';
import Header from '../../components/Header/Header';
import Bio from '../../components/Bio/Bio';
import Projects from '../../components/Projects/Projects';

function HomePage() {

    return(
        <>
            <Header />
            <Bio />
            <Projects />
        </>
    )
}

export default HomePage;