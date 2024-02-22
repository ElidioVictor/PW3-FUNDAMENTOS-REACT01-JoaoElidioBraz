
import '../App.css';

function Livros({titulo, autor, imagem, descricao}) /*chaves são necessárias para referenciar JS (java script)*/ {
    return(
        <div>
            <div className="cardBook">
                <h3>{titulo}</h3>
                <p>{autor}</p>
                <img src={imagem} alt="Capa do livro" width={200} ></img>
                <p>{descricao}</p>
            </div>
        </div>
    );
};

export default Livros;