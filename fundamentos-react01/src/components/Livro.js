import '../App.css';

function Livros({dadosJSON}) /*chaves são necessárias para referenciar JS (java script)*/ {
    return(
        <>
            {
                dadosJSON.map((livro) =>(
                    <div className="cardBook">
                        <h3>{livro.titulo}</h3>
                        <p>{livro.autor}</p>
                        <img src={livro.imagem} alt="Capa do livro" width={200} ></img>
                        <p>{livro.descricao}</p>
                    </div>
                ) )
            }
        </>
    );
};

export default Livros;