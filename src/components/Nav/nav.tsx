import './Nav.css';
import { Link } from 'react-router-dom';
export default function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/disciplinas">Disciplinas</Link></li>
        <li><Link to="/boletim">Boletim</Link></li>
        <li><Link to="/jogo">Jogo da Velha</Link></li>
      </ul>
    </nav>
  );
}