import { useTema } from "../../contexts/TemaContext";
import styles from "./Header.module.scss";

export default function Header() {
  const { tema, alterarTema } = useTema();

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <h1>Sistema Acadêmico</h1>
      </div>
      
      <div className={styles.temaContainer}>
        <button onClick={() => alterarTema('light')} className={tema === 'light' ? styles.active : ''}>
          Light
        </button>
        <button onClick={() => alterarTema('dark')} className={tema === 'dark' ? styles.active : ''}>
          Dark
        </button>
        <button onClick={() => alterarTema('impress')} className={tema === 'impress' ? styles.active : ''}>
          Impress
        </button>
      </div>
    </header>
  );
}