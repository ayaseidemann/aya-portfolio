import './Contact.scss';

function Contact() {

    return (
        <div className='contact'>
            <h2 className='contact__title'>Contact me</h2>
            <div className='contact__links'>
                <a className='contact__link' href='mailto:aya.seidemann@gmail.com'>aya.seidemann@gmail.com</a>
                <a className='contact__link' href='https://www.linkedin.com/in/aya-seidemann/'>LinkedIn</a>
            </div>
        </div>
    )
}

export default Contact;