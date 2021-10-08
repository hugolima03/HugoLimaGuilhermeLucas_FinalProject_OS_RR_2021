import React from "react";

import onlineIcon from "../../Icons/onlineIcon.png";

import "./TextContainer.css";

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>
        Chat Realtime com Docker!{" "}
        <span role="img" aria-label="emoji">
          💬
        </span>
      </h1>
      <h2>
        Desenvolvido durante a disciplína de Sistema Operacionais{" "}
        <span role="img" aria-label="emoji">
          ❤️
        </span>
      </h2>
      <h2>UFRR! </h2>
    </div>
    {users ? (
      <div>
        <h1>Pessoas na sala:</h1>
        <div className="activeContainer">
          <h2>
            {users.map(({ name }) => (
              <div key={name} className="activeItem">
                {name}
                <img alt="Online Icon" src={onlineIcon} />
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
