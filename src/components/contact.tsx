import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../sass/pages/contact.scss"
interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        'service_7c6nj3v'!,
        'template_adz0hr9'!,
        form.current!,
        'yvdtdBZK-qJCjyBDd'!
      );

      console.log('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      }
      form.current!.reset()
      
  };

    return (
        <section className='contact' id='contact'>
            <div className="inner-container">
                <h2>Got a Question?</h2>
                <p>We have an answer, shoot us an email</p>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="from_name" required/>
                    <label>Email</label>
                    <input type="email" name="user_email" required />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" required/>
                </form>
            </div>
        </section>
  );
};

export default Contact;