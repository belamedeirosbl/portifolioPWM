"use client";

import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useRouter } from "next/navigation";
import styles from "./jogo-senha.module.css";

export default function JogoSenha() {
  const [secretNumber, setSecretNumber] = useState(generateSecretNumber());
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState([]);
  const router = useRouter();

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

    setFeedback([{ guess, bulls, cows }, ...feedback]);
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
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>Jogo Touros e Vacas</h1>
        <p className={styles.subtitle}>
          Tente adivinhar o número secreto de 4 dígitos únicos.
        </p>
        <div>
          <input
            type="text"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            maxLength={4}
            placeholder="Digite sua tentativa"
            className={styles.input}
          />
          <button onClick={handleGuess} className={styles.button}>
            Adivinhar
          </button>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <button onClick={resetGame} className={styles.button}>
            Reiniciar
          </button>
          <button
            onClick={showSecretNumber}
            className={`${styles.button} ${styles.secondaryButton}`}
            style={{ marginLeft: "0.5rem" }}
          >
            Mostrar Resposta
          </button>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <button
            onClick={() => router.push("/")}
            className={`${styles.button} ${styles.secondaryButton}`}
          >
            Voltar para a Página Principal
          </button>
        </div>
        <h2 className={styles.title} style={{ fontSize: "1.5rem" }}>
          Tentativas
        </h2>
        <ul className={styles.list}>
          {feedback.map((entry, index) => (
            <li key={index} className={styles.listItem}>
              <span>{entry.guess}</span>
              <span>
                {entry.bulls} Touros, {entry.cows} Vacas
              </span>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}
