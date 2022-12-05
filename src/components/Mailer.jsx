import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Mailer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rfak9xr', 'template_b5kbsxb', form.current, 'jaNRFFW66QLda1hjO')
      .then((result) => {
          console.log(result.text);
          alert("თქვენი მეილი მიღებულია")
      }, (error) => {
          console.log(error.text);
          alert("თქვენი მეილი უარყოფილია კიდევ საცადეთ")
      });
  };

  return (
      <div className='contactMail'>
    <form ref={form} onSubmit={sendEmail}>
      <input required type="text" name="user_name" placeholder="Your name.."/>
      <input required type="email" name="user_email" placeholder="Email"/>
      <textarea required name="message" placeholder="Message"/>
      <input className='btn-submit' type="submit" value="Send" />
    </form>
    </div>
  );
};

export default Mailer;


