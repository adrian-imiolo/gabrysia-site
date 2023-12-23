import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const EmailForm = () => {
  const form = useRef();
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    const isValid = validateForm();
    if (isValid) {
      try {
        await emailjs.sendForm('service_wl9duqh', 'template_loonslv', form.current, 'QZtmaFR3ernJv8kuK');
        clearForm();
        setFormSuccess(true);
      } catch (error) {
        setFormError("Ups, coś poszło nie tak :/");
      }
    }
  };

  const validateForm = () => {
    const inputs = form.current.querySelectorAll('input, textarea');
    let isValid = true;

    inputs.forEach((input) => {
      if (input.required && !input.value.trim()) {
        isValid = false;
      }
    });

    if (!isValid) {
      setFormError('Proszę wypełnij wszystkie wymagane pola');
    } else {
      setFormError('');
    }

    return isValid;
  };

  const clearForm = () => {
    const inputs = form.current.querySelectorAll('input, textarea');
    inputs.forEach((input) => {
      input.value = '';
    });
  };

  return (
    <div className="form-container">
      <form ref={form} onSubmit={sendEmail} className="custom-form">
        <input type="text" name="name" placeholder="Imię i nazwisko" required />
        <input type="tel" name="phone" placeholder="Telefon" required />
        <input type="email" name="email" placeholder="Adres e-mail" required />
        <textarea name="message" placeholder="W czym mogę pomóc?" rows="3" required />
        <div className="form-error">{formError}</div>
        {formSuccess && <div className="form-success">Wiadomość została wysłana!</div>}
        <input type="submit" value="Wyślij" className="submit-button" />
      </form>
    </div>
  );
};
