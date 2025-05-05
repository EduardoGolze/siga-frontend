import './Disciplinas.css';

export default function Disciplinas() {
  const disciplinas = [
    { id: 1, nome: 'Matemática', professor: 'Prof. Silva', cargaHoraria: 60 },
    { id: 2, nome: 'Português', professor: 'Prof. Santos', cargaHoraria: 60 },
    { id: 3, nome: 'História', professor: 'Prof. Oliveira', cargaHoraria: 40 },
    { id: 4, nome: 'Geografia', professor: 'Prof. Souza', cargaHoraria: 40 },
    { id: 5, nome: 'Ciências', professor: 'Prof. Lima', cargaHoraria: 40 },
  ];

  return (
    <section className="disciplinas-container">
      <h2>Disciplinas Matriculadas</h2>
      <table className="disciplinas-table">
        <thead>
          <tr>
            <th>Disciplina</th>
            <th>Professor</th>
            <th>Carga Horária</th>
          </tr>
        </thead>
        <tbody>
          {disciplinas.map(disciplina => (
            <tr key={disciplina.id}>
              <td>{disciplina.nome}</td>
              <td>{disciplina.professor}</td>
              <td>{disciplina.cargaHoraria}h</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}