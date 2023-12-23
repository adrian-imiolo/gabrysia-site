import { useRef, useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

interface CustomFormElements extends HTMLFormElement {
  formName: HTMLInputElement;
  phone: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

export const EmailForm = () => {
  const form = useRef<CustomFormElements>(null);
  const [formError, setFormError] = useState<string>('');
  const [formSuccess, setFormSuccess] = useState<boolean>
  (false);
  const [isLoading, setIsLoading] = useState<boolean>
  (false);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = validateForm();
    if (isValid && form.current) {
        setIsLoading(true)
      try {
        await emailjs.sendForm('service_wl9duqh', 'template_loonslv', form.current, 'QZtmaFR3ernJv8kuK');
        clearForm();
        setFormSuccess(true);
      } catch (error) {
        setFormError("Ups, coś poszło nie tak :/");
      }
      setIsLoading(false)
    }
  };

  const validateForm = () => {
    if (!form.current) return false;

    const inputs = form.current.elements;
    let isValid = true;

    Array.from(inputs).forEach((input) => {
      if (isInput(input)) {
        if ((input as HTMLInputElement | HTMLTextAreaElement).required && !(input as HTMLInputElement | HTMLTextAreaElement).value.trim()) {
          isValid = false;
        }
      }
    });

    if (!isValid) {
      setFormError('Proszę wypełnij wszystkie wymagane pola');
    } else {
      setFormError('');
    }

    return isValid;
  };

  const isInput = (element: Element): element is HTMLInputElement | HTMLTextAreaElement => {
    return element.tagName === 'INPUT' || element.tagName === 'TEXTAREA';
  };

  const clearForm = () => {
    if (!form.current) return;

    const inputs = form.current.elements;
    Array.from(inputs).forEach((input) => {
      if (isInput(input)) {
        (input as HTMLInputElement | HTMLTextAreaElement).value = '';
      }
    });
  };

  return (
    <div className="form-container">
      <form ref={form} onSubmit={sendEmail} className="custom-form">
        <input type="text" name="formName" placeholder="Imię i nazwisko" required />
        <input type="tel" name="phone" placeholder="Telefon" required />
        <input type="email" name="email" placeholder="Adres e-mail" required />
        <textarea name="message" placeholder="W czym mogę pomóc?" rows={3} required />
        <div className="form-error">{formError}</div>
        {formSuccess && <div className="form-success">Wiadomość została wysłana!</div>}
        <input type="submit" value={isLoading ? "Wysyłanie..." : "Wyślij"} className="submit-button" />
      </form>
    </div>
  );
};

export default EmailForm;
