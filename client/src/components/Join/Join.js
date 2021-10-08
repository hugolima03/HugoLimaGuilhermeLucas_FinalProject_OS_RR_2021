import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("SO");

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Seja bem vindo!</h1>

        <div>
          <input
            type="text"
            className="joinInput mt-20"
            placeholder="Digite seu nome"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <Link
          onClick={(e) => {
            // eslint-disable-next-line no-unused-expressions
            !name || !room ? e.preventDefault() : null;
          }}
          to={`/chat?name=${name}&room=SO`}
        >
          <button className="button" type="submit">
            Entrar
          </button>
        </Link>
      </div>
      <strong className="strong">
        Desenvolvido por{" "}
        <a
          href="https://github.com/hugolima03"
          target="_blank"
          rel="noreferrer"
        >
          Hugo Lima
        </a>{" "}
        e{" "}
        <a
          href="https://github.com/GuilhermeBn198"
          target="_blank"
          rel="noreferrer"
        >
          Guilherme Lucas
        </a>
      </strong>
    </div>
  );
};

export default Join;
