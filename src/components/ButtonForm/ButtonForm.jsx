import React from "react";

import "./ButtonForm.css";
import Checkmark from "../Checkmark/Checkmark";
import Crossmark from "../Crossmark/Crossmark";
import { useEffect } from "react";

const ButtonForm = ({ code, inputCode, isCorrect }) => {
  const arrCode = code.split("");
  const arrInputCode = inputCode.split("");

  const checkCode = () => {
    return arrCode.map((char, index) => {
      if (index < arrInputCode.length) {
        return arrCode[index] === arrInputCode[index] ? (
          <Checkmark key={index} />
        ) : (
          <Crossmark key={index} />
        );
      } else {
        return (
          <p className="btn_code" key={index}>
            {char}
          </p>
        );
      }
    });
  };

  useEffect(() => {
    checkCode();
  }, [arrInputCode]);
  return (
    <>
      <button className="btn_form" disabled={isCorrect}>
        Codigo {checkCode()}
      </button>
    </>
  );
};

export default ButtonForm;
