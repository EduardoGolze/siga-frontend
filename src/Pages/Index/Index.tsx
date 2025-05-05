import './Index.css';
import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <div className="index-container">
      <main className="index-main">
        <h1>Bem-vindo ao SIGA React</h1>
        <p>Sistema Integrado de Gestão Acadêmica</p>
        <div className="index-buttons">
          <Link to="/home" className="index-button">Entrar no Sistema</Link>
          <Link to="/jogo" className="index-button">Jogo da Velha</Link>
        </div>
      </main>
    </div>
  );
}