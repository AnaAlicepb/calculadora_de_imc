import React, { useState } from 'react';
import './App.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState('');

  const formatarAltura = (value) => {
    if (!value.includes(',')) {
      return value.length === 1 ? `${value},` : value.replace(/,/g, '');
    }
    return value;
  };

  const handleAlturaChange = (e) => {
    const formattedHeight = formatarAltura(e.target.value.replace(/[^0-9,]/g, ''));
    setAltura(formattedHeight);
  };

  const calcularIMC = () => {
    if (altura && peso) {
      const alturaEmMetros = parseFloat(altura.replace(',', '.'));
      const imc = peso / (alturaEmMetros * alturaEmMetros);
      let classificacao = '';

      if (imc < 18.5) classificacao = 'Abaixo do peso';
      else if (imc >= 18.5 && imc <= 24.9) classificacao = 'Peso normal';
      else if (imc >= 25 && imc <= 29.9) classificacao = 'Sobrepeso';
      else if (imc >= 30) classificacao = 'Obesidade';

      setResultado(`IMC: ${imc.toFixed(2)}, Classificação: ${classificacao}`);
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <input
        type="text"
        value={altura}
        onChange={handleAlturaChange}
        placeholder="Altura (em metros)"
      />
      <input
        type="number"
        value={peso}
        onChange={(e) => setPeso(parseFloat(e.target.value))}
        placeholder="Peso (em kg)"
      />
      <button onClick={calcularIMC}>Calcular IMC</button>
      <p>{resultado}</p>
    </div>
  );
}

export default App;
