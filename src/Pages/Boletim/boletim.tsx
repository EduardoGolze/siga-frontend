import './Boletim.scss'; // Note a mudança de .css para .scss

export default function Boletim() {
  const notas = [
    { disciplina: 'Matemática', nota1: 8.5, nota2: 7.0, nota3: 9.0, media: 8.2, faltas: 2 },
    { disciplina: 'Português', nota1: 7.0, nota2: 6.5, nota3: 8.0, media: 7.2, faltas: 1 },
    { disciplina: 'História', nota1: 9.0, nota2: 8.5, nota3: 9.5, media: 9.0, faltas: 0 },
    { disciplina: 'Geografia', nota1: 6.5, nota2: 7.0, nota3: 8.0, media: 7.2, faltas: 3 },
    { disciplina: 'Ciências', nota1: 8.0, nota2: 8.5, nota3: 9.0, media: 8.5, faltas: 1 },
  ];

  return (
    <section className="boletim-container">
      <h2>Boletim</h2>
      <table className="boletim-table">
        <thead>
          <tr>
            <th>Disciplina</th>
            <th>Nota 1</th>
            <th>Nota 2</th>
            <th>Nota 3</th>
            <th>Média</th>
            <th>Faltas</th>
          </tr>
        </thead>
        <tbody>
          {notas.map((item, index) => (
            <tr key={index}>
              <td>{item.disciplina}</td>
              <td>{item.nota1.toFixed(1)}</td>
              <td>{item.nota2.toFixed(1)}</td>
              <td>{item.nota3.toFixed(1)}</td>
              <td className={item.media >= 7 ? 'aprovado' : 'reprovado'}>
                {item.media.toFixed(1)}
              </td>
              <td>{item.faltas}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}