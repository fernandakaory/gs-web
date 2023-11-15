import '../assets/styles/Login.css'

function Login() {
  
  return (
    <form className="form">
      <label>
        Nome de usuário:
        <input type="text"  />
      </label>
      <label>
        Senha:
        <input type="password"  />
      </label>
      <button type="submit">Entrar</button>
      <button type="button" >Não tem login? Cadastre-se!</button>
    </form>
  );
}

export default Login;