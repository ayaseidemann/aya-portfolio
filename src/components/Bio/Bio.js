import './Bio.scss';
import profilePic from '../../assets/Aya.jpg';

function Bio() {

    return (
        <div className='bio'>
            <div className='bio__text'>
                <div className='bio__header--wrapper'>
                    <h2 className='bio__header'>Hello!</h2>
                    <div className='bio__header--box'></div>
                </div>
                <h3 className='bio__subheader'>A positive and focused Software Developer with years of management work experience and a math background. </h3>
                <p className='bio__p'>
                    I have always found joy and satisfaction in logic, coding, and collaboration, so transitioning to software development just made sense. I earned two Bachelor Degrees (B.S. and B.A.) from The University of Texas, double-majoring in Math and Theatre. I loved the juxtaposition of math and art -- math and science provided joy in working out concrete solutions, while art provided freedom due to the absence of such concrete solutions. After university, I began my career as a software implementation Project Manager at Epic, and found myself increasingly intrigued by the intricacies of developing effective software that solves problems. I also grew my analytical and communication skills, which I actively bring into the software development process. Combining attention to detail, problem-solving, and organizational skills gained from coordinating a non-profit tutoring center, I have become a driven and nuanced Developer.
                </p>
            </div>
            <img className='bio__pic' src={profilePic} alt='headshot'/>
        </div>
    )
}

export default Bio;