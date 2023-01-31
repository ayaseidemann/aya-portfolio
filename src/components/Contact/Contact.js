import './Contact.scss';
import resume from '../../assets/Documents/Aya-Seidemann-Developer-Resume.pdf'

function Contact() {

    return (
        <div className='contact'>
            <h2 className='contact__title'>Contact me</h2>
            <div className='contact__links'>
                <a className='contact__link contact__link--email' href='mailto:aya.seidemann@gmail.com' target='_blank' rel="noreferrer noopener">aya.seidemann@gmail.com</a>
                <a className='contact__link contact__link--resume' href={resume} target='_blank' rel="noreferrer noopener">Resume</a>
                
                <a className='contact__link contact__link--linkedin' href='https://www.linkedin.com/in/aya-seidemann/' target='_blank' rel="noreferrer noopener">LinkedIn</a>
            </div>
        </div>
    )
}

export default Contact;