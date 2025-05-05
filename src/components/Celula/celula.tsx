import './Celula.css';

interface CelulaProps {
  valor: string;
  onClick: () => void;
}

export default function Celula({ valor, onClick }: CelulaProps) {
  return (
    <button className={`celula ${valor}`} onClick={onClick}>
      {valor}
    </button>
  );
}