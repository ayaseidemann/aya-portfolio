import './Bio.scss';
import profilePic from '../../assets/Pictures/aya-full.png';

function Bio() {

    return (
        <div className='bio'>
            <div className='bio__text'>
                <div className='bio__header--wrapper'>
                    <h2 className='bio__header'>Hello!</h2>
                    <div className='bio__header--box'></div>
                </div>
                <p className='bio__p'>My name is Aya and I'm a positive and detail-oriented Full-Stack Software Developer living in Vancouver, BC. </p>
            </div>
            <img className='bio__pic' src={profilePic} alt='headshot'/>
        </div>
    )
}

export default Bio;