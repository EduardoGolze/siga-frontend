import './Footer.css';
export default function Footer() {
  return (
    <footer className="footer">
      <p>Sistema Integrado de Gestão Acadêmica - SIGA React</p>
      <p>© {new Date().getFullYear()} - Todos os direitos reservados</p>
    </footer>
  );
}