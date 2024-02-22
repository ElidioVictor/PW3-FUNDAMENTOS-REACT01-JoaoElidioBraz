import logo from './logo.svg';
import './App.css';
import Livros from './components/Livro';
import cavernas from './livros/cavernas_aco.jpg';
import solDesvelado from './livros/sol_desvelado.jpg'
import robosDaAlvoarda from './livros/robos_alvorada.jpg'

const descr = "As Cavernas de Aço, de Isaac Asimov, é o primeiro romance da consagrada Série dos Robôs, uma das mais populares da ficção científica. A história nasceu de um desafio: Asimov queria provar para seu editor que a ficção científica não era limitada e poderia ser incorporada a qualquer gênero literário, inclusive nos dramas policiais. A obra foi publicada, pela primeira vez, na revista Galaxy Science Fiction, e o sucesso foi tão grande que, um ano depois, se tornou livro. Na trama, Os Mundos Siderais, antigas colônias da Terra, possuem rígidas leis de imigração, e não aceitam mais terráqueos em seus planetas. Para agravar a situação, os robôs estão substituindo grande parte da mão de obra trabalhadora na Terra, levando os humanos a perderem seus empregos e privilégios de cidadãos."

function App() {
  return (
    <div className="App">
      <div>
        <Livros
          titulo="As cavernas de aço"
          autor="Isaac Azimov"
          imagem={cavernas}
          descricao={descr}
        />

        <Livros
          titulo="Robos da alvorada"
          autor="Isaac Azimov"
          imagem={robosDaAlvoarda}
          descricao={descr}
        />

        <Livros
          titulo="Sol desvelado"
          autor="Isaac Azimov"
          imagem={solDesvelado}
          descricao={descr}
        />


      </div>
    </div>
  );
};

export default App;









