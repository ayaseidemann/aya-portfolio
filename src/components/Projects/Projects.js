import './Projects.scss';

function Projects() {

    return (
        <div className='projects'>
            <h2 className='projects__title'>Here are some of my projects</h2>
            <div className='projects__section'>
                <div className='card'>
                    <img className='card__img' src='' alt='project 1'/>
                    <div className='card__text'>
                        <h3 className='card__title'>Project 1</h3>
                        <div className='card__tags'>
                            <span className='card__tag'>JavaScript</span>
                            <span className='card__tag'>HTML</span>
                            <span className='card__tag'>CSS</span>
                            <span className='card__tag'>Express</span>
                        </div>
                        <p className='card__p'>Here's some info about the project</p>
                    </div>
                </div>
                <div className='card'>
                    <img className='card__img' src='' alt='project 2'/>
                    <div className='card__text'>
                        <h3 className='card__title'>Project 2</h3>
                        <div className='card__tags'>
                            <span className='card__tag'>JavaScript</span>
                            <span className='card__tag'>HTML</span>
                            <span className='card__tag'>CSS</span>
                            <span className='card__tag'>Express</span>
                        </div>
                        <p className='card__p'>Here's some info about the project</p>
                    </div>
                </div>
                <div className='card'>
                    <img className='card__img' src='' alt='project 3'/>
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