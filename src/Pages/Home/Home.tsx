import './Home.scss';

export default function Home() {
  return (
    <section className="home-container">
      <h2>Página Inicial</h2>
      <p>Bem-vindo ao sistema acadêmico.</p>
      <div className="home-content">
        <p>Aqui você pode acessar suas disciplinas, ver seu boletim ou jogar um jogo da velha.</p>
      </div>
    </section>
  );
}