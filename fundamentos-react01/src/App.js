import dadosJSON from './dados.json'
import './App.css';
import Livros from './components/Livro';

function App() {
  return (
    <div className="App">
        <Livros dadosJSON={dadosJSON}/>
    </div>
  );
};

export default App;









