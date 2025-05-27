import styles from './Celula.module.scss';

interface CelulaProps {
  valor: string;
  onClick: () => void;
}

export default function Celula({ valor, onClick }: CelulaProps) {
  return (
    <button className={`${styles.celula} ${valor}`} onClick={onClick}>
      {valor}
    </button>
  );
}