import "../assets/styles/Login.css";
import { useState, useEffect } from "react";

function Login() {
  //definindo váriaveis de aviso de do status da operação de login
    const [msgStatus, setMsgstatus] = useState('');
    const [classStatus, setClassStatus] = useState('');

  //va´riaveis dos inputs
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    //capturando valores dos inputs
    const handleChange = async(event) => {
      const { name, value } = event.target;
      if (name === 'username') {
        setUsername(value);
      } else if (name === 'password') {
        setPassword(value);
      }
    };

    useEffect(() => {

      if(msgStatus == "Login realizado com SUCESSO!!"){
          setClassStatus("login-sucesso");
      }else if(msgStatus == "Usuário e ou Senha incorretos!"){
        setClassStatus("login-erro");
      }else{
        setClassStatus("login");
      }
  }, [msgStatus])

  const handleSubmit = async (e) => {
    e.preventDefault();

    let user;

    try {
      const response = await fetch("http://localhost:5000/users");
      if (response.ok) {
        const users = await response.json();
        // console.log(users);
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

        setMsgstatus("Login realizado com SUCESSO!!");
        

        const token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);

        sessionStorage.setItem("token-user", token);

        sessionStorage.setItem("user-object", JSON.stringify(user));

        setTimeout(()=>{
            window.location = "/solucao";
          },3000);
        
      } else {

        setMsgstatus("Usuário e ou Senha incorretos!");
          
        setTimeout(()=>{

          setMsgstatus("");

          setUsername("");
          setPassword("");

            window.location = "/";
          },3000);
        
      }
    } catch (error) {
      console.log(error);
    }
  };






  return (
    <>
    <h2 className={classStatus}>{msgStatus}</h2>
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
    </>
  );
}

  

export default Login;
