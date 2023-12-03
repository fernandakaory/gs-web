import "../assets/styles/Login.scss";
import { useState} from "react";

//página de login
function Login() {

  //variáveis dos inputs
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    //capturando os valores dos inputs
    const handleChange = async(event) => {
      const { name, value } = event.target;
      if (name === 'username') {
        setUsername(value);
      } else if (name === 'password') {
        setPassword(value);
      }
    };


  const handleSubmit = async (event) => {

    try {
      event.preventDefault();

      let user;

      const response = await fetch("http://localhost:5000/users");
      if (response.ok) {
        const users = await response.json();

        for (let i = 0; i < users.length; i++) {
          const usuario = users[i];

          //validando
          if (usuario.username == username && usuario.password == password) {
            user = usuario;
            break;
          }
        }
      }
      if (user) {

        alert("Login bem sucedido!!");

        const token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
        sessionStorage.setItem("token-user", token);
        sessionStorage.setItem("user-object", JSON.stringify(user));

        window.location = "/solucao";
      } else {
        throw new Error("Usuário e/ou Senha incorretos!!"); 
      }
    } catch (error) {
      console.log(error);
      alert(error.message)
      setUsername("");
      setPassword("");
    }
  };

  return (
    <>
      <div className="divForm">
        <form className="form" onSubmit={handleSubmit}>
          <fieldset>
            <legend>LOGIN</legend>
            <label>
              Nome de usuário:
              <input type="text" name="username" value={username} onChange={handleChange} required />
            </label>
            <label>
              Senha:
              <input type="password" name="password" value={password} onChange={handleChange} required />
            </label>
            <button type="submit">Entrar</button>
          </fieldset>
        </form>
      </div>
    </>
  );
}

  

export default Login;
