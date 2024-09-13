// pages/despesas.js
import { useState, useEffect } from 'react';

const Despesas = () => {
  const [despesas, setDespesas] = useState([]);

  useEffect(() => {
    fetch('/data/despesas.json')
      .then(response => response.json())
      .then(data => setDespesas(data));
  }, []);

  return (
    <div>
      <h1>Despesas</h1>
      <ul>
        {despesas.map(despesa => (
          <li key={despesa.id}>
            <h2>{despesa.nome}</h2>
            <p><strong>Valor:</strong> ${despesa.valor}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Despesas;
