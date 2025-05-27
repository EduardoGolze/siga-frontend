import Tabuleiro from '../../components/Tabuleiro/tabuleiro';
import './Jogo.scss';
export default function Jogo() {
  return (
    <section className="jogo-container">
      <h2>Jogo da Velha</h2>
      <Tabuleiro />
    </section>
  );
}