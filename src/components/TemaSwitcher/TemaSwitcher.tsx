import styles from './TemaSwitcher.module.scss';
import { useTema } from '../../contexts/TemaContext';

export default function TemaSwitcher() {
  const { tema, alterarTema } = useTema();

  return (
    <div className={styles.container}>
      <button 
        className={`${styles.botao} ${tema === 'light' ? styles.ativo : ''}`}
        onClick={() => alterarTema('light')}
      >
        Light
      </button>
      <button 
        className={`${styles.botao} ${tema === 'dark' ? styles.ativo : ''}`}
        onClick={() => alterarTema('dark')}
      >
        Dark
      </button>
      <button 
        className={`${styles.botao} ${tema === 'impress' ? styles.ativo : ''}`}
        onClick={() => alterarTema('impress')}
      >
        Impress
      </button>
    </div>
  );
}