"use client";

import { useState } from "react";

export default function JogoSenha() {
  const [secretNumber, setSecretNumber] = useState(generateSecretNumber());
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState([]);

  function generateSecretNumber() {
    const digits = [];
    while (digits.length < 4) {
      const randomDigit = Math.floor(Math.random() * 10);
      if (!digits.includes(randomDigit)) {
        digits.push(randomDigit);
      }
    }
    return digits.join("");
  }

  function handleGuess() {
    if (guess.length !== 4 || new Set(guess).size !== 4) {
      alert("Digite um número de 4 dígitos únicos.");
      return;
    }

    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < 4; i++) {
      if (guess[i] === secretNumber[i]) {
        bulls++;
      } else if (secretNumber.includes(guess[i])) {
        cows++;
      }
    }

    setFeedback([{ guess, bulls, cows }, ...feedback]); // Adiciona a nova tentativa no topo
    setGuess("");

    if (bulls === 4) {
      alert(`Parabéns! Você acertou o número secreto ${secretNumber}!`);
      resetGame();
    }
  }

  function resetGame() {
    setSecretNumber(generateSecretNumber());
    setGuess("");
    setFeedback([]);
  }

  function showSecretNumber() {
    alert(`O número secreto é: ${secretNumber}`);
  }

  return (
    <div
      style={{ maxWidth: "400px", margin: "2rem auto", textAlign: "center" }}
    >
      <h1>Jogo Touros e Vacas</h1>
      <p>Tente adivinhar o número secreto de 4 dígitos únicos.</p>
      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          maxLength={4}
          placeholder="Digite sua tentativa"
          style={{
            padding: "0.5rem",
            fontSize: "1rem",
            width: "70%",
            marginRight: "0.5rem",
          }}
        />
        <button onClick={handleGuess} style={{ padding: "0.5rem 1rem" }}>
          Adivinhar
        </button>
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <button onClick={resetGame} style={{ padding: "0.5rem 1rem" }}>
          Reiniciar
        </button>
        <button
          onClick={showSecretNumber}
          style={{ padding: "0.5rem 1rem", marginLeft: "0.5rem" }}
        >
          Mostrar Resposta
        </button>
      </div>
      <h2>Tentativas</h2>
      <ul
        style={{
          maxHeight: "200px",
          overflowY: "auto",
          listStyle: "none",
          padding: "0",
          border: "1px solid #ccc",
          borderRadius: "4px",
          backgroundColor: "#f9f9f9",
        }}
      >
        {feedback.map((entry, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0.5rem",
              borderBottom: "1px solid #eee",
            }}
          >
            <span>{entry.guess}</span>
            <span>
              {entry.bulls} Touros, {entry.cows} Vacas
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
