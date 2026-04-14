import React, { useState, useEffect } from "react";

export default function App() {

  const [produtos, setProdutos] = useState([]);
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");

  useEffect(() => {
    console.log("Sistema iniciado!");
  }, []);

  function adicionarProduto() {
    if (nome === "" || preco === "") {
      alert("Preencha todos os campos!");
    } else {
      const novoProduto = {
        nome: nome,
        preco: preco
      };

      setProdutos([...produtos, novoProduto]);

      setNome("");
      setPreco("");
    }
  }
}
