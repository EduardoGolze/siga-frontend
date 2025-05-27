import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Sistema Integrado de Gestão Acadêmica - SIGA React</p>
      <p>© {new Date().getFullYear()} - Todos os direitos reservados</p>
    </footer>
  );
}