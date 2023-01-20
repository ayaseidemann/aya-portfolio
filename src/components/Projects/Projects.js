import './Projects.scss';
import sudotwoLaptop from '../../assets/Pictures/sudotwo-laptop.png';
import sudotwoPhone from '../../assets/Pictures/sudotwo-phone.png';
import telusLaptop from '../../assets/Pictures/telus-laptop.png';
import telusPhone from '../../assets/Pictures/telus-phone.png';


function Projects() {

    return (
        <div className='projects'>
            <h2 className='projects__title'>Projects</h2>
            <div className='projects__section'>
                <div className='card'>
                    <div className='card__images'>
                        <img className='card__phone' src={sudotwoPhone} alt='sudotwo'/>
                        <img className='card__laptop' src={sudotwoLaptop} alt='sudotwo'/>
                    </div>
                    <div className='card__text'>
                        <h3 className='card__title'>
                            <a className='card__link' href='https://sudotwo.com/'>Sudotwo!</a>
                        </h3>
                        <div className='card__tags'>
                            <span className='card__tag'>JavaScript</span>
                            <span className='card__tag'>React</span>
                            <span className='card__tag'>Express</span>
                            <span className='card__tag'>Node.js</span>
                            <span className='card__tag'>HTML</span>
                            <span className='card__tag'>CSS</span>
                            <span className='card__tag'>Socket.io</span>
                        </div>
                        <p className='card__p'>I planned and developed this mobile-first multiplayer and multi-room sudoku gaming site</p>
                    </div>
                </div>
                <div className='card'>
                    <div className='card__images'>
                        <img className='card__phone' src={telusPhone} alt='telus'/>
                        <img className='card__laptop' src={telusLaptop} alt='telus'/>
                    </div>
                    <div className='card__text'>
                        <h3 className='card__title'>Telus Hackathon</h3>
                        <div className='card__tags'>
                            <span className='card__tag'>JavaScript</span>
                            <span className='card__tag'>React</span>
                            <span className='card__tag'>HTML</span>
                            <span className='card__tag'>CSS</span>
                        </div>
                        <p className='card__p'>I co-developed a new TV channel bundling site for Telus in a hackathon</p>
                    </div>
                </div>
                <div className='card'>
                    {/* <img className='card__img' src={profilePic} alt='project 3'/> */}
                    <div className='card__text'>
                        <h3 className='card__title'>Project 3</h3>
                        <div className='card__tags'>
                            <span className='card__tag'>JavaScript</span>
                            <span className='card__tag'>HTML</span>
                            <span className='card__tag'>CSS</span>
                            <span className='card__tag'>Express</span>
                        </div>
                        <p className='card__p'>Here's some info about the project</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;