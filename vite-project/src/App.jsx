import { useState, useEffect } from "react";
import "./App.css";
import images from "./assets/images.png";
import ListRender from "./components/ListRender";

function App() {
  const [userName] = useState();

  useEffect(() => {
    console.log("Sistema iniciado!");
  }, []);
  return (
    <>
    <ListRender/>
      <div style={{ textAlign: "center", fontFamily: "Arial" }}>
        <header style={{ background: "#333", color: "#fff", padding: "10px" }}>
          <h1>Sistema de Produtos</h1>
        </header>

        <div>
          <img src={images} alt="Imagem do ecommerce" />
        </div>

        <div style={{ marginTop: "20px" }}>
          <input
            type="text"
            placeholder="Nome do produto"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <br />
          <br />

          <input
            type="number"
            placeholder="Preço"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
          />

          <br />
          <br />

          <button onClick={adicionarProduto}>Adicionar Produto</button>
        </div>

        <div style={{ marginTop: "30px" }}>
          <h2>Lista de Produtos</h2>

          {produtos.map((produto, index) => (
            <div key={index}>
              <p>
                {produto.nome} - R$ {produto.preco}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <footer
          style={{ marginTop: "600px", padding: "10px", background: "black" }}
        >
          <p>Vinicius - Data 14/04</p>
        </footer>
      </div>
    </>
  );
}

export default App;
