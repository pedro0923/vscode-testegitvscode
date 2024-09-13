// pages/receitas.js
import { useState, useEffect } from 'react';

const Receitas = () => {
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    fetch('/data/receitas.json')
      .then(response => response.json())
      .then(data => setReceitas(data));
  }, []);

  return (
    <div>
      <h1>Receitas</h1>
      <ul>
        {receitas.map(receita => (
          <li key={receita.id}>
            <h2>{receita.nome}</h2>
            <p><strong>Valor:</strong> ${receita.valor}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Receitas;
