import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {

  const [nome, setNome] = useState("")

  const [email, setEmail] = useState("")

  const [password, setPassword] = useState("")

  function CastroUsuario(event){
    event.preventDefault();
    alert(`nome:${nome} e-mail:${email} password:${password}`);
    return;
  }

  return (
    <div className="App">

      <form onSubmit={CastroUsuario} className='form'>

        <h1>Formulário</h1>

          <input
            type='text'
            placeholder='Digite seu nome'
            required
            value={nome}
            onChange={(event) => {setNome(event.target.value)}}
          /> 

          <input
            type='email'
            placeholder='Digite seu email'
            required
            value={email}
            onChange={(event) => {setEmail(event.target.value)}}
          />

          <input
            type='password'
            placeholder='Digite sua senha'
            required
            value={password}
            onChange={(event) => {setPassword(event.target.value)}}
          />
          <button type='submit' >cadastre!</button>
          
      </form>

    </div>
  );
}

export default App;
