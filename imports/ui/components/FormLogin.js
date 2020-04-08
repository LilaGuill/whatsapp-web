import React, { useState } from "react";
import StyledFormLogin from "../elements/StyledFormLogin";

const FormLogin = ({ login }) => {
  const [fields, setFields] = useState({
    username: "",
    phone: "",
    password: "",
  });

  const { username, phone, password } = fields;

  const handleChange = (event) => {
    const copyfields = { ...fields };
    copyfields[event.target.name] = event.target.value;
    setFields(copyfields);
  };

  return (
    <StyledFormLogin>
      <label className="label">
        <input
          className="input"
          name="username"
          placeholder="nom d'utilisateur"
          value={username}
          onChange={handleChange}
        />
      </label>
      <label className="label">
        <input
          className="input"
          name="phone"
          placeholder="Téléphone"
          value={phone}
          onChange={handleChange}
        />
      </label>
      <label className="label">
        <input
          className="input"
          name="password"
          placeholder="Mot de passe"
          type="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <button className="loginBtn" onClick={() => login(fields)}>
        CONNEXION
      </button>
    </StyledFormLogin>
  );
};

export default FormLogin;
