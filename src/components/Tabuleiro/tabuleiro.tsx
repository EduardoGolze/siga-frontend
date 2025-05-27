import { useState } from 'react';
import Celula from '../Celula/celula';
import styles from './Tabuleiro.module.scss';

export default function Tabuleiro() {
  const [celulas, setCelulas] = useState(Array(9).fill(''));
  const [vezX, setVezX] = useState(true);
  const [fimDeJogo, setFimDeJogo] = useState(false);
  const [vencedor, setVencedor] = useState<string | null>(null); // Tipagem mais precisa

  const verificarVencedor = (tabuleiro: string[]) => {
    const combinacoesVitoria = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // linhas
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // colunas
      [0, 4, 8], [2, 4, 6]             // diagonais
    ];

    for (let combinacao of combinacoesVitoria) {
      const [a, b, c] = combinacao;
      if (tabuleiro[a] && tabuleiro[a] === tabuleiro[b] && tabuleiro[a] === tabuleiro[c]) {
        return tabuleiro[a];
      }
    }

    return null;
  };

  const verificarEmpate = (tabuleiro: string[]) => {
    return tabuleiro.every(celula => celula !== '');
  };

  const joga = (index: number) => {
    if (celulas[index] !== '' || fimDeJogo) return;

    const novoCelulas = [...celulas];
    novoCelulas[index] = vezX ? 'X' : 'O';
    setCelulas(novoCelulas);

    const vencedorAtual = verificarVencedor(novoCelulas); // Renomeado para evitar conflito
    if (vencedorAtual) {
      setFimDeJogo(true);
      setVencedor(vencedorAtual);
      return;
    }

    if (verificarEmpate(novoCelulas)) {
      setFimDeJogo(true);
      setVencedor('Empate');
      return;
    }

    setVezX(!vezX);
  };

  const reiniciar = () => {
    setCelulas(Array(9).fill(''));
    setVezX(true);
    setFimDeJogo(false);
    setVencedor(null);
  };

  return (
    <div className={styles.container}>
      <h2>Jogo da Velha</h2>
      <div className={styles.status}>
        {fimDeJogo 
          ? vencedor === 'Empate' 
            ? 'Empate!' 
            : `Vencedor: ${vencedor}`
          : `Próximo jogador: ${vezX ? 'X' : 'O'}`}
      </div>
      <div className={styles.tabuleiro}>
        {celulas.map((valor, index) => (
          <Celula 
            key={index} 
            valor={valor} 
            onClick={() => joga(index)} 
          />
        ))}
      </div>
      <button className={styles.botaoReiniciar} onClick={reiniciar}>
        Reiniciar Jogo
      </button>
    </div>
  );
}