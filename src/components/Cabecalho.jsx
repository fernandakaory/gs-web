import "../assets/styles/Cabecalho.css";
import { useState, useEffect } from "react";

export default function Cabecalho() {

  const userLogado = JSON.parse(sessionStorage.getItem("user-object"));
  const [user] = useState(userLogado);

  const handleLogout = () => {
    sessionStorage.removeItem("user-object");
    sessionStorage.removeItem("token-user");
    window.location = "/";
  };

  if (sessionStorage.getItem("token-user")) {
    return (
      <>
        <header>
          <nav>
            <ul>
              <h1>FL</h1>
              <div>
                <p>Olá {user.name}</p>
                <p>{user.email}</p>
              </div>
              <li>Global Solution - Engenharia de Software</li>
              <button onClick={handleLogout} className="botao-log">LOGOUT</button>
            </ul>
          </nav>
        </header>
      </>
    );
  } else {
    return (
      <>
        <header>
          <nav>
            <ul>
              <h1>FL</h1>
              <li>Global Solution - Engenharia de Software</li>
            </ul>
          </nav>
        </header>
      </>
    );
  }
}
