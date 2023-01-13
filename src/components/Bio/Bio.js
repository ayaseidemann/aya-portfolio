import './Bio.scss';
import profilePic from '../../assets/Aya.jpg';

function Bio() {

    return (
        <div className='bio'>
            <div className='bio__text'>
                <h2 className='bio__header'>Hello!</h2>
                <p className='bio__p'>Here's my bio, I'm a pretty cool person</p>
            </div>
            <img className='bio__pic' src={profilePic} alt='headshot'/>
        </div>
    )
}

export default Bio;