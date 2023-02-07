/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import nightsky from "../nightsky.jpg";
import Footer from "../Components/Footer";
import styles from "../Components/Contact.module.css";
import { useState } from "react";
import {useFormContact} from "../Components/useFromContact";

export default function Contact(props) {
  const lastepisode = props.episodes.slice(-5).reverse();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { errors, validateForm, onBlurField } = useFormContact(form);

  const onUpdateField = e => {
    const field = e.target.name;
    const nextFormState = {
      ...form,
      [field]: e.target.value,
    };
    setForm(nextFormState);
    if (errors[field].dirty)
      validateForm({
        form: nextFormState,
        errors,
        field,
      });
  };
  const onSubmitForm = e => {
    e.preventDefault();
    const { isValid } = validateForm({ form, errors, forceTouchErrors: true });
    if (!isValid) return;
    alert(JSON.stringify(form, null, 2));
  };
  
  return (
    <>
      <div className="relative">
        <img className="bg-cover" src={nightsky} alt="nightsky" />
        <div className="absolute grid justify-items-center top-8 md:top-28 w-full text-white">
          <span className="text-lg md:text-5xl font-sans font-bold">Contact Us</span>
        </div>
        <div className="absolute text-center lg:text-justify -top-12 md:top-16 lg:top-2/4 mt-32 w-full min-h-max bg-black">
          <div className="grid justify-items-center lg:mb-56 mt-12 lg:ml-20 lg:mr-20 leading-8 text-gray-200">
            <span className="text-2xl md:text-4xl font-sans font-bold">Drop us a line!</span><br /><br />
            <span className="text-xl md:text-2xl text-gray-400 font-sans font-bold">If you want to get in touch or leave us a message with questions, feedback, suggestions or anything else, please don't hesitate to fill in the form below and we'll get back to you as soon as we can!</span>
            <form onSubmit={onSubmitForm}>
          <div className="mt-8">
            <input
               type="text"
               name="name"
               id="name"
               value={form.name}
               onChange={onUpdateField}
               autoComplete="family-name"
               placeholder=" Your Name"
               onBlur={onBlurField}
              className="mt-1 h-12 w-96 bg-black block rounded-md border border-white shadow-sm focus:outline-none focus:border-yellow-500 sm:text-medium"
             />
             {errors.name.dirty && errors.name.error ? (
          <p className={styles.formFieldErrorMessage}>{errors.name.message}</p>
        ) : null}
           </div>
           <div className="mt-4">
            <input
               type="text"
               name="email"
               id="email"
               value={form.email}
              onChange={onUpdateField}
               autoComplete="email"
               placeholder=" Your Email"
               onBlur={onBlurField}
              className="mt-1 h-12 w-96 bg-black block rounded-md border border-white shadow-sm focus:outline-none focus:border-yellow-500 sm:text-medium"
             />
             {errors.email.dirty && errors.email.error ? (
          <p className={styles.formFieldErrorMessage}>{errors.email.message}</p>
        ) : null}
           </div>
           <div className="mt-4">
            <textarea
               type="text"
               name="message"
               id="message"
               value={form.message}
               onChange={onUpdateField}
               autoComplete="message"
               placeholder=" Your Message"
               onBlur={onBlurField}
              className="mt-1 h-32 w-96 bg-black block rounded-md border border-white shadow-sm focus:outline-none focus:border-yellow-500 sm:text-medium"
             />
             {errors.message.dirty && errors.message.error ? (
          <p className={styles.formFieldErrorMessage}>{errors.message.message}</p>
        ) : null}
           </div>
           <div className="mt-5">
                <button type="submit" className="bg-yellow-500 text-white lg:w-1/6 lg:h-16 lg:ml-80 md:ml-60 rounded-full hover:bg-white hover:text-black">
                  Submit
                </button>
              </div>
          </form>
          </div>
          <Footer lastepisode = {lastepisode} />
        </div>
      </div>
    </>
  );
}
