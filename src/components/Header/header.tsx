import './Header.css';

interface HeaderProps {
  titulo?: string;
}

export default function Header({ titulo = 'Sistema Acadêmico' }: HeaderProps) {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/src/assets/logo.png" alt="Logo SIGA" className="logo" />
        <h1>{titulo}</h1>
      </div>
    </header>
  );
}