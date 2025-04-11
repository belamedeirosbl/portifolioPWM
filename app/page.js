import Header from "../components/Header";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <>
      <Header />

      <nav
        style={{
          position: "sticky",
          top: 0,
          backgroundColor: "#1f2937",
          color: "#ffffff",
          padding: "1rem",
          textAlign: "center",
          zIndex: 1000,
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <a
          href="#sobre-mim"
          style={{ margin: "0 1rem", color: "#ffffff", textDecoration: "none" }}
        >
          Sobre Mim
        </a>
        <a
          href="#projetos"
          style={{ margin: "0 1rem", color: "#ffffff", textDecoration: "none" }}
        >
          Projetos
        </a>
        <a
          href="#habilidades"
          style={{ margin: "0 1rem", color: "#ffffff", textDecoration: "none" }}
        >
          Habilidades
        </a>
        <a
          href="#contato"
          style={{ margin: "0 1rem", color: "#ffffff", textDecoration: "none" }}
        >
          Contato
        </a>
        <a
          href="/jogo-senha"
          style={{ margin: "0 1rem", color: "#ffffff", textDecoration: "none" }}
        >
          Jogo da Senha
        </a>
      </nav>

      <main>
        <div style={{ display: "flex", gap: "20px" }}>
          <img
            src="/midias/fotoCurriculo.JPG"
            alt="Foto de Isabela Medeiros"
            style={{
              width: "300px",
              height: "315px",
              borderRadius: "10%",
              objectFit: "cover",
            }}
          />

          <section id="sobre-mim" className="bio">
            <h2>Sobre Mim</h2>
            <p>
              Sou estudante de Ciência da Computação na Universidade Católica de
              Pernambuco, estou cursando agora o quinto período. Gosto muito de
              programar, de explorar novos algoritmos e sempre descobrir a
              melhor solução para cada problema! Atualmente, participo de uma
              pesquisa PIBIC que foca na classificação de câncer de mama através
              de processamento de imagens e aplicação dos dados em redes
              neurais. Também faço parte da Maratona de Programação,
              participando anualmente de competições e praticando semanalmente
              para melhorar minhas habilidades. Estou sempre em busca de
              oportunidades para evoluir tecnicamente e aprender novas
              tecnologias.
            </p>
          </section>
        </div>

        <section id="projetos" className="projetos">
          <h2>PROJETOS</h2>
          <p>
            Projetos desenvolvidos na Universidade Católica de Pernambuco que
            ajudaram a aprimorar as minhas habilidades:
          </p>
          <ul>
            <li>
              <strong>Workshop de Maratona Da Computação: </strong>Evento de
              duas semanas voltado organizado pelos próprios alunos da maratona
              para alunos iniciantes (1º e 2º períodos) de Ciências da
              Computação. O workshop tratou desde conceitos básicos até
              algoritmos mais avançados, o evento contou com aulas de cada
              integrante da equipe e competições entre os alunos que estavam
              participando do workshop.
            </li>
            <li>
              <strong>Apoio Local: </strong>Protótipo de aplicativo criado para
              reduzir o desperdício de alimentos, tinha como objetivo também
              promover doações por meio de um mapa onde pessoas ou empresas
              poderiam sinalizar quando tivesse sobras disponíveis para resgate,
              assim, ajudando também pessoas em situação de fome.
            </li>
            <li>
              <strong>
                Biblioteca digital para alunos de Ciências da Computação:{" "}
              </strong>
              Prototipo desenvolvido para tornar a busca e acesso ao
              conhecimento mais fácil e direto. Tinha como obetivo
              disponibilizar os principais livros para estudantes de ciências da
              computação.{" "}
              <a
                href="https://github.com/Dudubraga/Projeto-Biblioteca"
                target="_blank"
                rel="noopener noreferrer"
              >
                (clique aqui para ver o projeto!)
              </a>
            </li>
            <li>
              <strong>Hortinha inclusiva: </strong>Projeto desenvolvido para a
              cadeira de Robótica Inclusiva. Era um sistema que avisava, com
              base na umidade da planta, quando era hora de regar. O objetivo
              era ajudar pessoas com deficiência visual, idosos ou quem tem
              problema de memória a cuidar melhor das plantas.{" "}
              <a
                href="https://github.com/juliasvilar/Hortinha_Inclusiva"
                target="_blank"
                rel="noopener noreferrer"
              >
                (clique aqui para ver o projeto!)
              </a>
            </li>
            <li>
              <strong>Quiz de ciências da computação: </strong> O projeto é um
              quiz voltado para alunos de Ciências da Computação, do 1º ao 5º
              período, com perguntas sobre os conteúdos das disciplinas. A ideia
              é usar a gamificação para tornar o aprendizado mais divertido e
              motivador, incentivando os alunos a estudarem e fixarem melhor o
              conhecimento de forma leve e interativa.{" "}
              <a
                href="https://projeto-web-mobile-seven.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                (clique aqui para ver o projeto!)
              </a>
            </li>
          </ul>
        </section>

        <section id="habilidades" className="habilidades">
          <h2>Habilidades</h2>
          <ul>
            <li>
              <strong>Linguagens:</strong> Python, Java, C, C++
            </li>
            <li>
              <strong>Web:</strong> HTML, CSS, JavaScript, React
            </li>
            <li>
              <strong>Banco de Dados:</strong> MySQL, SQLite
            </li>
            <li>
              <strong>Ferramentas:</strong> Git, GitHub, Figma
            </li>
            <li>
              <strong>Frameworks:</strong> Django, Next
            </li>
          </ul>
        </section>

        <section id="contato" className="contato">
          <h2>Contato</h2>
          <ul>
            <li>
              <a
                href="https://github.com/belamedeirosbl"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/belamedeirosbl"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a href="mailto:belamedeirosbl@gmail.com">
                belamedeirosbl@gmail.com
              </a>
            </li>
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}
