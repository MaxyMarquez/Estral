import React from "react";

import "./Contact.css";
import { useEffect } from "react";
import { useState } from "react";
import ButtonForm from "@/components/ButtonForm/ButtonForm";

const Contact = () => {
  const [isCorrect, setIsCorrect] = useState(true);
  const [captchaCode, setCaptchaCode] = useState("");
  const [inputCode, setInputCode] = useState("");

  useEffect(() => {
    const generateCaptcha = () => {
      const code = Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);
      setCaptchaCode(code.toString());
    };

    generateCaptcha();
  }, []);

  const handleChange = (e) => {
    setIsCorrect(e.target.value !== captchaCode);
    setInputCode(e.target.value);
  };

  return (
    <>
      <div className="contact_container">
        <h1>Contacto</h1>

        <form className="contact_form">
          <div className="contact_form_input_container">
            <input
              type="text"
              placeholder="Nombre"
              className="contact_form_input"
            />
            <label className="contact_form_label">Nombre</label>
          </div>
          <div className="contact_form_input_container">
            <input
              type="email"
              placeholder="Correo electrónico"
              className="contact_form_input"
            />
            <label className="contact_form_label">Correo electrónico</label>
          </div>
          <div className="contact_form_input_container">
            <input
              type="text"
              placeholder="Asunto"
              className="contact_form_input"
            />
            <label className="contact_form_label">Asunto</label>
          </div>
          <div className="contact_form_input_container">
            <textarea
              type="text"
              placeholder="Mensaje"
              className="contact_form_textarea"
            ></textarea>
            <label className="contact_form_label">Mensaje</label>
          </div>
          <div className="contact_btn_container">
            <div className="contact_btn_captcha_container">
              <p>Ingrese el Código:</p>
              <input
                type="text"
                className="contact_captcha_input"
                onChange={handleChange}
                maxLength="6"
              />
            </div>
            {/* <button
              className={`${
                !isCorrect
                  ? "contact_form_btn"
                  : "contact_form_btn contact_form_btn_disabled"
              }`}
              disabled={isCorrect}
            >
              Enviar
            </button> */}
            <ButtonForm
              code={captchaCode}
              inputCode={inputCode}
              isCorrect={isCorrect}
            />
          </div>
        </form>

        <div></div>
      </div>
    </>
  );
};

export default Contact;
