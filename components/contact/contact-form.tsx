import { useEffect, useState } from 'react' 
import classes from './contact-form.module.css'
import Notification from '../ui/notification'

async function sendContactData(contactDetails: { email: string, name:string, message:string }){
    const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(contactDetails),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    await response.json()
}

function ContactForm() {
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredName, setEnteredName] = useState('')
    const [enteredMessage, setEnteredMessage] = useState('')
    const [requestStatus, setRequestStatus] = useState('')
    const [requestError, setRequestError] = useState<undefined | unknown | string>(undefined)

    useEffect(
        () => {
        if(requestStatus === 'success' || requestStatus === 'error') {
            const timer = setTimeout(
                () => {
                    setRequestStatus('')
                    setRequestError(null)
                }, 3000
            )
            return () => clearTimeout(timer)
        }
    }, [requestStatus])

    async function sendMessageHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        try {
            setRequestStatus('pending')
            await sendContactData({
                email: enteredEmail,
                name: enteredName,
                message: enteredMessage
            })
            setRequestStatus('success')
            setEnteredEmail('')
            setEnteredName('')
            setEnteredMessage('')
        } catch(e) {
            setRequestStatus('error')
            setRequestError(e)
        }
    }

    let notification;
    if(requestStatus === 'pending'){
        notification = {
            status: 'pending',
            title: 'Sending message...',
            message: 'Your message is on its way'
        }
    }
    if(requestStatus === 'success') {
        notification = {
            status: 'success',
            title: 'Success!',
            message: 'Message sent succesfully'
        }
    }

    if(requestStatus === 'error') {
        notification = {
            status: 'error',
            title: 'Error!',
            message: requestError
        }
    }

    return(
        <section data-testid='contact-form-section' className={classes.contact}>
            <h1>
                How can I help you?
            </h1>
            <form data-testid='contact-form' className={classes.form} onSubmit={sendMessageHandler}>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor='emal'> Your Email </label>
                        <input type='email' data-testid='email-input' value={enteredEmail} onChange={(e) => setEnteredEmail(e.target.value)} id='email' required />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='name'> Your Name </label>
                        <input type='text' data-testid='name-input' value={enteredName} onChange={(e) => setEnteredName(e.target.value)} id='name' required />
                    </div>
                </div>
                <div className={classes.control}>
                    <label htmlFor='message'> Your Message </label>
                    <textarea id='message' data-testid='message-input' value={enteredMessage} onChange={(e) => setEnteredMessage(e.target.value)} rows={5} required />
                </div>
                <div className={classes.actions}>
                    <button data-testid='submit-button'>
                        Send Message
                    </button>
                </div>
            </form>
            {notification && <Notification status={notification.status} message={notification.message as string} title={notification.title} />}
        </section>
    )
}

export default ContactForm