import React, { useState } from "react";
import swal from 'sweetalert';

import '../../assets/styles/components.scss'

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    /* let response = await fetch("https://projettiweb.com.br/TEMP/contato.php", { */
    fetch("https://projettiweb.com.br/TEMP/contato.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    name.value = '';
    email.value = '';
    message.value = '';
    setStatus("Submit");
    swal("Success!", "Your email was sent successfully!", "success");
    /* let result = await response.json();
    console.log('result ', result); */
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" required />
      </div>
      <button type="submit">{status}</button>
    </form>
  );
};

export default ContactForm;
