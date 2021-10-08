import React from "react";

import "./Input.css";

const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <form action="" className="form">
      <input
        type="text"
        className="input"
        placeholder="Digite uma mensgem..."
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      />
      <button className="sendButton" onClick={(event) => sendMessage(event)}>
        Enviar
      </button>
    </form>
  );
};

export default Input;
